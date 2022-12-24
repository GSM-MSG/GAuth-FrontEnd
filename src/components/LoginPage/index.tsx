import Link from 'next/link'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import * as S from './style'
import { API } from '../../lib/API'
import SideWave from './SideWave'
import { accessToken, refreshToken } from '../../lib/Token'
import { useRecoilValue } from 'recoil'
import { ViewWidth } from '../../Atom/Atoms'
import { LoginLogo } from '../../../public/svg'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'

export default function LoginPage() {
    const [serviceName, setServiceName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [emailCheck, setEmailCheck] = useState<boolean>(false);
    const [pwCheck, setPwCheck] = useState<boolean>(false);
    const [error, setError] = useState<number>(200);
    const viewWidth = useRecoilValue(ViewWidth);
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement[]>([]);
    const serviceNameRef = useRef<HTMLSpanElement>(null);
    const isQuery = router.query.client_id === undefined && router.query.redirect_uri === undefined;

    useEffect(() => {
        if (!router.isReady) return
        !isQuery && titleNaming()
    }, [router.isReady])

    const titleNaming = async () => {
        try {
            const { data } = await API.get('/oauth/' + router.query.client_id)
            setServiceName(data.serviceName)
        } catch (e) {
            if (e instanceof AxiosError && e.response!.status === 404) {
                alert("해당하는 서비스가 없습니다.");
                router.back();
            } else {
                alert("예기치 못한 오류가 발생하였습니다.")
            }

        }
    }

    const onLogin = async () => {
        for (let i = 0; i < inputRef.current.length; i++) {
            if (inputRef.current[i].value === "") {
                alert(inputRef.current[i].name + "을(를) 입력하지 않았습니다.")
                return inputRef.current[i].focus()
            }
        }

        try {
            const { data } = await API.post(
                isQuery ? "/auth" : "/oauth/code",
                {
                    email: email + "@gsm.hs.kr",
                    password: pw
                }
            );
            alert("로그인에 성공했습니다.")

            if (isQuery) {
                localStorage.setItem(accessToken, data.accessToken);
                localStorage.setItem(refreshToken, data.refreshToken);
                API.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken
                router.replace("/");
            } else {
                router.replace(router.query.redirect_uri as string + "?code=" + data.code)
            }
        } catch (e) {
            if (e instanceof AxiosError) {
                if (e.response!.status === 400 || e.response!.status === 404) {
                    alert("이메일 또는 비밀번호가 틀렸습니다.");
                } else if (e.response!.status === 403) {
                    alert("관리자 승인이 될 때까지 기다려주세요.")
                } else {
                    alert("예기치 못한 오류가 발생하였습니다.")
                }
                setError(e.response!.status);
            }
        }
    }

    return (
        <S.Layer>
            <SideWave />
            {
                viewWidth >= 900 &&
                <S.TitleWrapper>
                    <S.TitleBox>
                        <LoginLogo />
                        <div>
                            <h1>GAUTH</h1>
                            <h2>GSM 통합 계정관리 시스템</h2>
                        </div>
                    </S.TitleBox>
                </S.TitleWrapper>
            }
            <S.LoginWrapper>
                <S.LoginContainer>
                    {
                        serviceName === "" ?
                            <h1>Login</h1>
                            :
                            <S.LoginName>
                                <span>GAuth</span> 계정으로<br />
                                <span ref={serviceNameRef}>{serviceName}에 로그인</span>
                            </S.LoginName>
                    }
                    <S.InputContainer>
                        <S.InputWrapper>
                            <S.InputName being={emailCheck} error={error}>
                                {error === 404 ? "이메일이 일치하지 않습니다" : "이메일"}
                            </S.InputName>
                            <div>
                                <input name="이메일" type="text" maxLength={6} value={email}
                                    ref={(e: HTMLInputElement) => inputRef.current[0] = e}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value.replace(/[^a-zA-Z\d]/gi, '')); }}
                                    onFocus={() => { setEmailCheck(true) }}
                                    onBlur={() => { !email && setEmailCheck(false) }}
                                />
                                <S.Email>@gsm.hs.kr</S.Email>
                            </div>
                        </S.InputWrapper>
                        <S.InputWrapper>
                            <S.InputName being={pwCheck} error={error}>{error === 400 ? "비밀번호가 일치하지 않습니다" : "비밀번호"}</S.InputName>
                            <input name="비밀번호" type="password" maxLength={72} value={pw}
                                ref={(e: HTMLInputElement) => inputRef.current[1] = e}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => { setPw(e.target.value) }}
                                onFocus={() => { setPwCheck(true) }}
                                onBlur={() => { !pw && setPwCheck(false) }}
                                onKeyUp={(e) => { e.code === "Enter" && onLogin() }}
                            />
                        </S.InputWrapper>
                    </S.InputContainer>
                    <S.ButtonContainer>
                        <S.Submit onClick={onLogin}>로그인</S.Submit>
                        <div>
                            <Link href="/signUp">회원가입</Link> <span>l</span> <Link href="/initPassword">비밀번호 찾기</Link>
                        </div>
                    </S.ButtonContainer>
                </S.LoginContainer >
            </S.LoginWrapper >
        </S.Layer >
    )
}

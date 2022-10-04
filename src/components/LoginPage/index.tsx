import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import * as S from "./style"

export default function LoginPage() {
    const waveRef = useRef<any>();
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [emailCheck, setEmailCheck] = useState<boolean>(false);
    const [pwCheck, setPwCheck] = useState<boolean>(false);


    useEffect(() => {
        waveRef.current.children[0].style.width = "100vh";
        waveRef.current.children[1].style.width = "100vh";
        waveRef.current.children[2].style.width = "100vh";
    }, [email])

    return (
        <>
            <S.Layer>
                <div ref={waveRef}>
                    <S.SideWave fill="url(#gradient1)" options={{
                        height: 0,
                        amplitude: 150,
                        speed: 0.185,
                        points: 1
                    }}>
                        <defs>
                            <linearGradient id="gradient1" gradientTransform="rotate(180)">
                                <stop offset="0%" stopColor="#7EB2E2" />
                                <stop offset="100%" stopColor="#5499D9" />
                            </linearGradient>
                        </defs>
                    </S.SideWave>
                    <S.SideWave fill="url(#gradient2)" options={{
                        height: 100,
                        amplitude: 200,
                        speed: 0.17,
                        points: 1
                    }}>
                        <defs>
                            <linearGradient id="gradient2" gradientTransform="rotate(180)">
                                <stop offset="0%" stopColor="#5499D9" />
                                <stop offset="100%" stopColor="#2E80CC" />
                            </linearGradient>
                        </defs>
                    </S.SideWave>
                    <S.SideWave fill="url(#gradient3)" options={{
                        height: 200,
                        amplitude: 250,
                        speed: 0.17,
                        points: 1
                    }}>
                        <defs>
                            <linearGradient id="gradient3" gradientTransform="rotate(208.17)">
                                <stop offset="11.3%" stopColor="#2E80CC" />
                                <stop offset="100%" stopColor="#2566A2" />
                            </linearGradient>
                        </defs>
                    </S.SideWave>
                    <S.Title>
                        <S.Img src="/svg/LoginLogo.svg" />
                        <div>
                            <h1>GAUTH</h1>
                            <h2>GSM 통합 계정관리 시스템</h2>
                        </div>
                    </S.Title>
                </div>
                <S.LoginWrapper>
                    <S.LoginContainer>
                        <h1>LOGIN</h1>
                        <S.InputContainer>
                            <S.InputWrapper>
                                <S.InputName being={emailCheck}>이메일</S.InputName>
                                <input name="email" type="text" maxLength={6} value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    onFocus={() => { setEmailCheck(true) }}
                                    onBlur={() => { !email && setEmailCheck(false) }}
                                />
                                {email && <S.Email left={email.length * 13.5}>@gsm.hs.kr</S.Email>}
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <S.InputName being={pwCheck}>비밀번호</S.InputName>
                                <input name="pw" type="password" maxLength={20}
                                    onChange={(e: any) => setPw(e.target.value)}
                                    onFocus={() => { setPwCheck(true) }}
                                    onBlur={() => { !pw && setPwCheck(false) }} />
                            </S.InputWrapper>
                        </S.InputContainer>
                        <S.ButtonContainer>
                            <S.Submit>로그인</S.Submit>
                            <div>
                                <Link href="/register">회원가입</Link> | <Link href="/find">비밀번호 찾기</Link>
                            </div>
                        </S.ButtonContainer>
                    </S.LoginContainer>
                </S.LoginWrapper>
            </S.Layer>
        </>
    )
}
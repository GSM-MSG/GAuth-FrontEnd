import Link from "next/link"
import * as S from "./style"

export default function LoginPage() {
    return (
        <>
            <S.Layer>
                <div>
                    <S.SideWave src="/svg/SideWave.svg" />
                    <S.Title>
                        <img src="/svg/LoginLogo.svg" />
                        <div>
                            <h1>GAUTH</h1>
                            <h2>GSM 통합 계정관리 시스템</h2>
                        </div>
                    </S.Title>
                </div>
                <S.LoginWrapper>
                    <S.LoginContainer>
                        <h1>Log in</h1>
                        <S.InputContainer>
                            <S.InputWrapper>
                                <small>이메일을 입력해주세요</small>
                                <h2>@gsm.hs.kr</h2>
                                <input name="email" maxLength={6} />
                            </S.InputWrapper>
                            <S.InputWrapper>
                                <small>비밀번호를 입력해주세요</small>
                                <input name="pw" />
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
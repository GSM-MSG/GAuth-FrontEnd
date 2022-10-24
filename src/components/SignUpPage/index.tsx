import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as SVG from '../../SVG';

export default function SignUpPage() {
	const waveRef = useRef<any>();
	const signUpRef = useRef<any>();
	const [email, setEmail] = useState<string>('');
	const [pw, setPw] = useState<string>('');
	const [emailCheck, setEmailCheck] = useState<boolean>(false);
	const [pwCheck, setPwCheck] = useState<boolean>(false);

	useEffect(() => {
		waveRef.current.children[0].style.left =
			-signUpRef.current.offsetWidth + 'px';
		waveRef.current.children[1].style.left =
			-signUpRef.current.offsetWidth + 'px';
		waveRef.current.children[2].style.left =
			-signUpRef.current.offsetWidth + 'px';
		window.addEventListener('resize', () => {
			const width = signUpRef.current.offsetWidth;
			waveRef.current.children[0].style.left = -width + 'px';
			waveRef.current.children[1].style.left = -width + 'px';
			waveRef.current.children[2].style.left = -width + 'px';
		});
	}, []);

	return (
		<>
			<S.Layer>
				<S.WaveWrapper ref={waveRef}>
					<S.SideWave
						fill="url(#gradient1)"
						options={{
							height: 10,
							amplitude: 150,
							speed: 0.185,
							points: 2,
						}}
					>
						<defs>
							<linearGradient id="gradient1" gradientTransform="rotate(180)">
								<stop offset="0%" stopColor="#7EB2E2" />
								<stop offset="100%" stopColor="#5499D9" />
							</linearGradient>
						</defs>
					</S.SideWave>
					<S.SideWave
						fill="url(#gradient2)"
						options={{
							height: 30,
							amplitude: 150,
							speed: 0.17,
							points: 2,
						}}
					>
						<defs>
							<linearGradient id="gradient2" gradientTransform="rotate(180)">
								<stop offset="0%" stopColor="#5499D9" />
								<stop offset="100%" stopColor="#2E80CC" />
							</linearGradient>
						</defs>
					</S.SideWave>
					<S.SideWave
						fill="url(#gradient3)"
						options={{
							height: 60,
							amplitude: 150,
							speed: 0.165,
							points: 2,
						}}
					>
						<defs>
							<linearGradient id="gradient3" gradientTransform="rotate(180)">
								<stop offset="0%" stopColor="#000000" />
								<stop offset="100%" stopColor="#2E80CC" />
							</linearGradient>
						</defs>
					</S.SideWave>
					{/* <S.Title>
						<div>
							<S.WaterDrop>
								<span></span>
								<span></span>
								<span></span>
							</S.WaterDrop>
							<SVG.Human1 />
						</div>
						<div>
							<S.WaterDrop>
								<span></span>
								<span></span>
								<span></span>
							</S.WaterDrop>
							<SVG.SmallPhone />
						</div>
						<div>
							<S.WaterDrop>
								<span></span>
								<span></span>
								<span></span>
							</S.WaterDrop>
							<SVG.Human2 />
						</div>
					</S.Title> */}
				</S.WaveWrapper>
				<S.LoginWrapper ref={signUpRef}>
					<S.LoginContainer>
						<h1>SIGNUP</h1>
						<S.InputContainer>
							<S.InputWrapper>
								<S.InputName being={emailCheck}>이메일</S.InputName>
								<input
									name="email"
									type="text"
									maxLength={6}
									value={email}
									onChange={(e: any) => setEmail(e.target.value)}
									onFocus={() => {
										setEmailCheck(true);
									}}
									onBlur={() => {
										!email && setEmailCheck(false);
									}}
								/>
								{email && (
									<S.Email left={email.length * 13.5}>@gsm.hs.kr</S.Email>
								)}
							</S.InputWrapper>
							<S.InputWrapper>
								<S.InputName being={pwCheck}>비밀번호</S.InputName>
								<input
									name="pw"
									type="password"
									maxLength={20}
									onChange={(e: any) => setPw(e.target.value)}
									onFocus={() => {
										setPwCheck(true);
									}}
									onBlur={() => {
										!pw && setPwCheck(false);
									}}
								/>
							</S.InputWrapper>
						</S.InputContainer>
						<S.ButtonContainer>
							<S.Submit>회원가입</S.Submit>
							<div>
								<Link href="/register">회원가입</Link> |{' '}
								<Link href="/find">비밀번호 찾기</Link>
							</div>
						</S.ButtonContainer>
					</S.LoginContainer>
				</S.LoginWrapper>
			</S.Layer>
		</>
	);
}

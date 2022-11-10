import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import AuthenticationCheck from '../ AuthenticationCheck';
import { API } from '../../lib/API';
import PrivacyConsent from './PrivacyConsent';
import * as S from './style';
import * as SVG from '../../../public/svg';

export default function SignUpPage() {
	const waveRef = useRef<any>();
	const signUpRef = useRef<any>();
	const uploadBoxRef = useRef<any>();
	const imgInput = useRef<any>();

	const [email, setEmail] = useState<string>('');
	const [pw, setPw] = useState<string>('');
	const [emailCheck, setEmailCheck] = useState<boolean>(false);
	const [pwCheck, setPwCheck] = useState<boolean>(false);
	const [privacyCheck, setPrivacyCheck] = useState(false);
	const [privacyConsent, setPrivacyConsent] = useState<boolean>(false);
	const [changeForm, setChangeForm] = useState(false);
	const [waveWidth, setWaveWidth] = useState(0);
	const [profileImg, setImg] = useState('');

	useEffect(() => {
		const uploadBox = uploadBoxRef.current;
		const input = imgInput.current;

		const handleFiles = (files: any) => {
			if (files[0].type.startsWith('image/')) {
				const reader = new FileReader();
				reader.onloadend = (e: any) => {
					console.log(e);
					const result = e.target.result;
					if (result) {
						setImg(result);
					}
				};
				reader.readAsDataURL(files[0]);
			}
		};

		const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files;
			handleFiles(file);
		};

		const dropHandler = (event: React.DragEvent<HTMLInputElement>) => {
			event.preventDefault();
			event.stopPropagation();
			const file = event.dataTransfer.files;
			handleFiles(file);
		};

		const dragOverHandler = (event: React.DragEvent) => {
			event.preventDefault();
			event.stopPropagation();
		};

		uploadBox.addEventListener('drop', dropHandler);
		uploadBox.addEventListener('dragover', dragOverHandler);
		input.addEventListener('change', changeHandler);
	}, []);

	useEffect(() => {
		if (window.innerWidth < 1200) {
			setWaveWidth(0);
		} else {
			setWaveWidth(-signUpRef.current.offsetWidth);
		}
		window.addEventListener('resize', (e: any) => {
			if (e.target.innerWidth < 1200) {
				setWaveWidth(0);
			} else {
				setWaveWidth(-signUpRef.current.offsetWidth);
			}
		});
	}, []);

	const SignUp = async () => {
		try {
			await API.post('/signup', {
				email: email + '@gsm.hs,kr', // 정규식 ^[a-zA-Z0-9]+@gsm.hs.kr$, 공백 미허용
				password: pw, // 8자 이상 ~ 72자 이하, 공백 미허용
			});
			alert('성공');
			window.location.replace('/login');
		} catch (e: any) {
			alert('다시 시도해주세요');
		}
	};

	//dummy data
	const [data, setData] = useState({
		loading: false,
		data: '',
		error: '',
	});

	const ExSignUp = async () => {
		try {
			setData((prev) => {
				return { ...prev, loading: true };
			});
			setTimeout(() => {
				setData((prev) => {
					return { ...prev, error: 'err' };
				});
			}, 5000);
		} catch (e: any) {
			setData({ ...data, error: 'err' });
		}
	};

	return (
		<>
			<S.Layer>
				<S.WaveWrapper ref={waveRef}>
					<S.SideWave
						fill="url(#gradient1)"
						options={{
							height: 30,
							amplitude: 150,
							speed: 0.15,
							points: 1,
						}}
						style={{ left: waveWidth }}
					>
						<defs>
							<linearGradient id="gradient1" gradientTransform={'rotate(67.5)'}>
								<stop offset="0%" stopColor="#7EB2E2" />
								<stop offset="100%" stopColor="#5499D9" />
							</linearGradient>
						</defs>
					</S.SideWave>
					<S.SideWave
						fill="url(#gradient2)"
						options={{
							height: 60,
							amplitude: 200,
							speed: 0.17,
							points: 1,
						}}
						style={{ left: waveWidth }}
					>
						<defs>
							<linearGradient id="gradient2" gradientTransform={'rotate(67.5)'}>
								<stop offset="0%" stopColor="#5499D9" />
								<stop offset="100%" stopColor="#2E80CC" />
							</linearGradient>
						</defs>
					</S.SideWave>
					<S.SideWave
						fill="url(#gradient3)"
						options={{
							amplitude: 250,
							speed: 0.19,
							points: 1,
						}}
						style={{ left: waveWidth }}
					>
						<defs>
							<linearGradient id="gradient3" gradientTransform={'rotate(67.5)'}>
								<stop offset="11.3%" stopColor="#2E80CC" />
								<stop offset="100%" stopColor="#2566A2" />
							</linearGradient>
						</defs>
					</S.SideWave>
					<S.Title>
						<div>
							<S.WaterDrop top="100px" left="300px" rotate="30deg">
								<span></span>
								<span></span>
								<span></span>
							</S.WaterDrop>
							<S.IMG src="/svg/Human1.svg" />
						</div>
						<div>
							<S.WaterDrop top="50px" left="-20px" rotate="-50deg">
								<span></span>
								<span></span>
								<span></span>
							</S.WaterDrop>

							<S.IMG src="/svg/SmallPhone.svg" />
						</div>
						<div>
							<S.WaterDrop top="120px" left="250px" rotate="-50deg">
								<span></span>
								<span></span>
								<span></span>
							</S.WaterDrop>
							<S.IMG src="/svg/Human2.svg" />
						</div>
					</S.Title>
				</S.WaveWrapper>
				<S.SignUpWrapper ref={signUpRef}>
					<S.Container>
						<S.SignUpContainer changeForm={changeForm}>
							<h1>SIGNUP</h1>
							<S.InputContainer>
								<S.InputWrapper>
									<S.InputName being={emailCheck}>이메일</S.InputName>
									<input
										name="email"
										type="text"
										maxLength={6}
										value={email}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
											!/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|\s/g.test(e.target.value)
												? setEmail(e.target.value)
												: '';
										}}
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
										onChange={(e: any) => setPw(e.target.value)}
										value={pw}
										onFocus={() => {
											setPwCheck(true);
										}}
										onBlur={() => {
											!pw && setPwCheck(false);
										}}
									/>
								</S.InputWrapper>
								<S.PrivacyConsent>
									<input
										type="checkbox"
										onClick={() => {
											setPrivacyCheck((prev) => !prev);
										}}
									/>
									<p>개인정보 수집 및 이용에 대한 동의</p>
									<a onClick={() => setPrivacyConsent(true)}>자세히 보기</a>
								</S.PrivacyConsent>
							</S.InputContainer>
							<S.ButtonContainer>
								<S.Submit
									onClick={() => {
										if (/^.{0}$/.test(email)) {
											alert('이메일 입력이 잘못 되었습니다.');
											document.getElementsByName('email')[0].focus();
										} else if (!/^.{8,72}$/.test(pw)) {
											alert('암호의 길이는 8자 이상 72자 이하 입니다.');
											document.getElementsByName('pw')[0].focus();
										} else if (!privacyCheck) {
											alert('개인정보 수집 및 이용에 대해 동의해 주십시오.');
										} else setChangeForm(true);
									}}
								>
									다음
								</S.Submit>
								<div>
									<Link href="/login">로그인</Link> |{' '}
									<Link href="/find">비밀번호 찾기</Link>
								</div>
							</S.ButtonContainer>
						</S.SignUpContainer>
						<S.SignUpContainer changeForm={changeForm}>
							<h1>PROFILE</h1>
							<S.UpLoadProfileContainter>
								<S.ProfileSVGWrapper>
									<label htmlFor="profile" ref={uploadBoxRef}>
										{profileImg ? (
											<S.Profile src={profileImg} />
										) : (
											<SVG.ProfileFace />
										)}
										<i>
											<SVG.PlusBtn />
										</i>
									</label>
									<input
										type="file"
										multiple
										accept="image/*"
										id="profile"
										style={{ display: 'none' }}
										ref={imgInput}
									/>
								</S.ProfileSVGWrapper>
								<S.ProfileBtnWrapper>
									<div>
										<S.ChangeBtn
											position="left"
											onClick={() => setChangeForm(false)}
										>
											이전
										</S.ChangeBtn>
										<S.ChangeBtn
											position="right"
											onClick={() => {
												ExSignUp();
											}}
										>
											다음
										</S.ChangeBtn>
									</div>
									<Link href="/login">로그인</Link> |{' '}
									<Link href="/find">비밀번호 찾기</Link>
								</S.ProfileBtnWrapper>
							</S.UpLoadProfileContainter>
						</S.SignUpContainer>
					</S.Container>
				</S.SignUpWrapper>
			</S.Layer>
			{privacyConsent && (
				<PrivacyConsent closeHandle={() => setPrivacyConsent(false)} />
			)}
			{data.loading && <AuthenticationCheck data={data} />}
		</>
	);
}

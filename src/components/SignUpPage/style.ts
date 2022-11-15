import styled from '@emotion/styled';
import Wave from 'react-wavify';

type WaterDrop = {
	top: string;
	left: string;
	rotate: string;
};
export const Layer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	background: #f7f8fc;
	> div {
		height: 100vh;
	}
`;

export const WaveWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #d1e4f5;
	@media (max-width: 1200px) {
		position: absolute;
	}
`;

export const SideWave = styled(Wave)`
	width: 100%;
	position: fixed;
	bottom: 0;
	transform-origin: bottom;
	height: 950px;
	@media (max-width: 1200px) {
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const Title = styled.div`
	position: relative;
	width: 100%;
	height: 900px;
	> div {
		position: absolute;
		display: flex;
		:nth-of-type(1) {
			top: 220px;
			animation: humanAnimation 4s linear infinite;
		}
		:nth-of-type(2) {
			top: 250px;
			left: 450px;
			animation: humanAnimation 4s linear infinite;
			animation-delay: 1s;
		}
		:nth-of-type(3) {
			bottom: 0;
			right: 0;
			animation: humanAnimation 4s linear infinite;
			animation-delay: 2s;
			@media (max-width: 1477px) {
				display: none;
			}
		}
	}
	@keyframes humanAnimation {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(20px);
		}
	}
	@media (max-width: 1200px) {
		display: none;
	}
`;

export const WaterDrop = styled.div<WaterDrop>`
	position: absolute;
	top: ${(e) => e.top};
	left: ${(e) => e.left};
	transform: ${(e) => `rotate(${e.rotate})`};
	span {
		position: absolute;
		width: 1px;
		height: 1px;
		border-radius: 50%;
		opacity: 0;
		background: white;
		animation: Air 5s linear infinite;
		:nth-of-type(1) {
			animation-delay: 2s;
		}
		:nth-of-type(2) {
			animation-delay: 3s;
		}
		:nth-of-type(3) {
			animation-delay: 4s;
		}
	}
	@keyframes Air {
		0%,
		100% {
			opacity: 0;
			transform: translateY(0);
		}
		15% {
			transform: translateY(-15px) translateX(5px);
		}
		35% {
			width: 7.5px;
			height: 7.5px;
			transform: translateY(-35px) translateX(-5px);
		}
		55% {
			opacity: 1;
			transform: translateY(-55px) translateX(15px);
			width: 15px;
			height: 15px;
		}
		75% {
			transform: translateY(-55px) translateX(15px);
			width: 15px;
			height: 15px;
		}
		60.1% {
			opacity: 0;
		}
	}
`;

export const SignUpWrapper = styled.div`
	width: 60vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1200px) {
		width: 100%;
	}
`;

export const Container = styled.div`
	width: 425px;
	height: 545px;
	overflow: hidden;
`;

export const SignUpContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 80px;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	transform: ${({ changeForm }: { changeForm: boolean }) =>
		changeForm ? 'translateY(-100%)' : 'translateY(0%)'};
	h1 {
		text-align: center;
		font-size: 60px;
		font-weight: 100;
		letter-spacing: 5px;
		margin: 0;
		color: #2e80cc;
	}
	@media (max-width: 1200px) {
		h1 {
			color: #fff;
		}
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	h2 {
		position: relative;
		margin: 0px auto -60px auto;
		font-size: 27px;
		font-weight: 400;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
	position: relative;
	input {
		border: none;
		border-bottom: 3px solid black;
		width: 100%;
		padding: 0 30px 10px 30px;
		font-size: 27px;
		font-weight: 400;
		outline: none;
		background-color: transparent;
	}
	@media (max-width: 1200px) {
		input {
			color: #fff;
		}
	}
`;

export const Email = styled.div`
	position: absolute;
	top: -5px;
	left: ${({ left }: { left: number }) => {
		return left + 40 + 'px';
	}};
	font-size: 27px;
	@media (max-width: 1200px) {
		color: #fff;
	}
`;

export const InputName = styled.h3`
	color: #929292;
	position: absolute;
	margin: 0;
	transition: 0.5s;
	${({ being }: { being: boolean }) => {
		if (being) {
			return 'transform: translateY(-25px); font-size: 15px;';
		}
	}};
	@media (max-width: 1200px) {
		color: #fff;
	}
`;

export const ButtonContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	text-align: center;
	font-size: 20px;
	font-size: 18px;
	line-height: 21px;

	div {
		color: #929292;
		@media (max-width: 1200px) {
			color: #fff;
		}
	}
`;

export const Submit = styled.button`
	width: 100%;
	height: 60px;
	color: #fff;
	background: #2e80cc;
	font-weight: 590;
	font-size: 27px;
	line-height: 32px;
	text-align: center;
	border: none;
	border-radius: 30px;
	margin-bottom: 10px;
	cursor: pointer;

	&:active {
		box-shadow: rgba(50, 50, 93, 0.15) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
	}
`;

export const PrivacyConsent = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	height: 20px;
	input[type='checkbox'] {
		position: relative;
		top: 0;
		width: 15px;
		height: 15px;
		-webkit-appearance: none;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.5s;
		::before {
			content: '';
			position: absolute;
			width: 15px;
			height: 15px;
			border: 2px solid #000000;
		}
		:checked {
			::before {
				border: 2px solid #2e80cc;
			}
			::after {
				content: '';
				position: absolute;
				transform: rotate(-40deg) translate(1px, -1px);
				width: 9px;
				height: 5px;
				border-left: 1px solid #2e80cc;
				border-bottom: 1px solid #2e80cc;
			}
		}
	}
	@media (max-width: 1200px) {
		input[type='checkbox'] {
			::before {
				border: 2px solid #fff;
			}
			:checked {
				::before {
					border: 2px solid #fff;
				}
				::after {
					border-left: 1px solid #fff;
					border-bottom: 1px solid #fff;
				}
			}
		}
	}
	p {
		margin: 0;
		font-size: 15px;
		color: #5e5e5e;
		@media (max-width: 1200px) {
			color: #fff;
		}
	}
	a {
		font-size: 13px;
		color: #929292;
		text-decoration: underline #929292;
		@media (max-width: 1200px) {
			color: #fff;
			text-decoration: underline #fff;
		}
	}
`;

export const IMG = styled.img``;

export const UpLoadProfileContainter = styled.div`
	position: relative;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 100px;
	transform: translateY(0px);

	@keyframes profileMountAnimation {
		0% {
			transform: translateY(-800px);
		}
		100% {
			transform: translateY(0px);
		}
	}
	@keyframes profileUnmountAnimation {
		0% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(-800px);
		}
	}
`;

export const ProfileSVGWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	label {
		cursor: pointer;
		i {
			position: absolute;
			top: 130px;
			left: 130px;
		}
		:hover {
			i {
				svg {
					path {
						fill: #868e96;
					}
				}
			}
		}
	}
`;

export const ProfileBtnWrapper = styled.div`
	text-align: center;
	color: #929292;
	@media (max-width: 1200px) {
		color: #fff;
	}
	div {
		display: flex;
		gap: 10px;
		margin-bottom: 10px;
	}
`;

export const ChangeBtn = styled.button`
	font-family: 'Pretendard';
	font-size: 27px;
	font-weight: 600;
	text-align: center;
	background: none;
	border-radius: 10px;
	cursor: pointer;
	line-height: 32px;
	${({ position }: { position: string }) =>
		`
			border-top-${position}-radius: 100px;
			border-bottom-${position}-radius: 100px;
			color:${position == 'left' ? '#A8CBEB' : '#FFFFFF'};
			background:${position == 'right' && '#5499D9'};
			`};
	border: 2px solid #5499d9;
	width: 148px;
	height: 60px;
`;

export const Profile = styled.img`
	margin: 0;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	object-fit: cover;
	background: #fff;
`;

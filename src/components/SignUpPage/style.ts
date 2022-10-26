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
	top: 0;
	left: 0;
	display: flex;

	> div {
		height: 100vh;
	}
`;

export const WaveWrapper = styled.div`
	width: 200vw;
	min-height: 100vh;
	background: #d1e4f5;
`;

export const SideWave = styled(Wave)`
	position: fixed;
	bottom: 0;
	transform-origin: bottom;
	height: 950px;
`;

export const Title = styled.div`
	position: relative;
	width: 100%;
	height: 900px;
	> div {
		position: absolute;
		display: flex;
		:nth-child(1) {
			top: 220px;
			animation: humanAnimation 4s linear infinite;
		}
		:nth-child(2) {
			top: 250px;
			left: 450px;
			animation: humanAnimation 4s linear infinite;
			animation-delay: 1s;
		}
		:nth-child(3) {
			bottom: 0;
			right: 0;
			animation: humanAnimation 4s linear infinite;
			animation-delay: 2s;
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
		:nth-child(1) {
			animation-delay: 2s;
		}
		:nth-child(2) {
			animation-delay: 3s;
		}
		:nth-child(3) {
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
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

export const SignUpContainer = styled.div`
	width: 425px;
	display: flex;
	flex-direction: column;
	gap: 80px;
	justify-content: center;

	h1 {
		text-align: center;
		font-size: 60px;
		font-weight: 100;
		letter-spacing: 5px;
		margin: 0;
		color: #2e80cc;
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
`;

export const Email = styled.div`
	position: absolute;
	top: -5px;
	left: ${({ left }: { left: number }) => {
		return left + 40 + 'px';
	}};
	font-size: 27px;
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
	p {
		margin: 0;
		font-size: 15px;
		color: #5e5e5e;
	}
	a {
		font-size: 13px;
		color: #929292;
		text-decoration: underline #929292;
	}
`;

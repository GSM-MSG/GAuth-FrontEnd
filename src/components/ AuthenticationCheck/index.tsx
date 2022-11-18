import * as S from './style';
import * as SVG from '../../SVG';
import { useState } from 'react';

export default function AuthenticationCheck({ data }: any) {
	const [check, setCheck] = useState(false);
	const BeforeConsent = () => {
		return (
			<>
				<h2>인증 메일이 전송되었습니다!</h2>
				<p>
					전송된 메일에서 <span>인증 버튼</span>을 눌러 인증을 완료해주세요
				</p>
				<SVG.Mail></SVG.Mail>
				{data.data && (
					<button type="button" onClick={() => setCheck(true)}>
						확인
					</button>
				)}
			</>
		);
	};

	const AfterConsent = () => {
		setTimeout(() => {
			window.location.replace('/login');
		}, 2500);
		return (
			<>
				<h2>
					인증이 완려되었습니다!
					<br />
					<br />
					과리자 승인을 기다려 주세요
				</h2>
			</>
		);
	};

	return (
		<S.Layer>
			<S.Wrapper check={check}>
				{check ? (
					<AfterConsent />
				) : data.error ? (
					<h1>Opps</h1>
				) : (
					<BeforeConsent />
				)}
			</S.Wrapper>
		</S.Layer>
	);
}

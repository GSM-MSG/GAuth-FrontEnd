import * as S from './style';
import * as SVG from '../../SVG';
import { useEffect, useState } from 'react';

export default function AuthenticationCheck({
	authCheck,
	setAuthCheck,
}: {
	authCheck: boolean;
	setAuthCheck: any;
}) {
	//더미데이터
	const [data, setDate] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('로딩시작', data);
		setTimeout(() => {
			setDate((prev) => {
				console.log('로딩끈', !prev);
				return !prev;
			});
		}, 2000);
	}, []);
	const BeforeConsent = () => {
		return (
			<>
				<h2>인증 메일이 전송되었습니다!</h2>
				<p>
					전송된 메일에서 <span>인증 버튼</span>을 눌러 인증을 완료해주세요
				</p>
				<SVG.Mail></SVG.Mail>
				<button
					type="button"
					onClick={() => {
						data
							? () => {
									setLoading((prev) => !prev);
									setInterval(() => {
										window.location.replace('/login');
									}, 2000);
							  }
							: console.log(data);
					}}
				>
					확인
				</button>
			</>
		);
	};

	const AfterConsent = () => {
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
			<S.Wrapper>{loading ? <BeforeConsent /> : <AfterConsent />}</S.Wrapper>
		</S.Layer>
	);
}

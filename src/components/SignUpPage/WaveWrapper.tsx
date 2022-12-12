import { RefObject, useEffect, useRef, useState } from 'react';
import * as S from './style';
import * as SVG from '../../../public/svg';

export default function WaveWrapper({
	signUpRef,
}: {
	signUpRef: RefObject<HTMLDivElement>;
}) {
	const waveRef = useRef<HTMLDivElement>(null);
	const [waveWidth, setWaveWidth] = useState(0);
	useEffect(() => {
		if (window.innerWidth < 1200) {
			setWaveWidth(0);
		} else {
			if (signUpRef.current) setWaveWidth(-signUpRef.current.offsetWidth);
		}
		window.addEventListener('resize', () => {
			if (window.innerWidth < 1200) {
				setWaveWidth(0);
			} else {
				if (signUpRef.current) setWaveWidth(-signUpRef.current.offsetWidth);
			}
		});
	}, [signUpRef]);
	return (
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
					<SVG.Human1 />
				</div>
				<div>
					<S.WaterDrop top="50px" left="-20px" rotate="-50deg">
						<span></span>
						<span></span>
						<span></span>
					</S.WaterDrop>
					<SVG.SmallPhone />
				</div>
				<div>
					<S.WaterDrop top="120px" left="250px" rotate="-50deg">
						<span></span>
						<span></span>
						<span></span>
					</S.WaterDrop>
					<SVG.Human2 />
				</div>
			</S.Title>
		</S.WaveWrapper>
	);
}

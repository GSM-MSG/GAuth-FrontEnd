import * as S from './style'
import { useRecoilState } from 'recoil';
import { ViewWidth } from '../../Atom/Atoms';
import React, { useEffect, useRef } from 'react';

export default function SideWave() {

    const waveRef = useRef<HTMLDivElement>(null);
    const [viewWidth, setViewWidth] = useRecoilState(ViewWidth);

    useEffect(() => {
        setViewWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (viewWidth >= 900 && waveRef.current) {
                const waves: HTMLCollection = waveRef.current.children
                Array.prototype.map.call(waves, (e: HTMLDivElement, idx: number) => {
                    if (idx <= 2) e.style.width = window.innerWidth > 1200 ? "100vh" : "100vw"
                })
            }
        })
    }, [viewWidth, setViewWidth])

    return (
        <S.SideWaveBox ref={waveRef}>
            <S.SideWave fill="url(#gradient1)" options={{
                height: viewWidth > 1200 ? 10 : 50,
                amplitude: 150,
                speed: 0.175,
                points: 1
            }}>
                <defs>
                    <linearGradient id="gradient1" gradientTransform={viewWidth > 1200 ? "rotate(0)" : "rotate(67.5)"}>
                        <stop offset="0%" stopColor="#7EB2E2" />
                        <stop offset="100%" stopColor="#5499D9" />
                    </linearGradient>
                </defs>
            </S.SideWave>
            <S.SideWave fill="url(#gradient2)" options={{
                height: viewWidth > 1200 ? 110 : 100,
                amplitude: 200,
                speed: 0.17,
                points: 1
            }}>
                <defs>
                    <linearGradient id="gradient2" gradientTransform={viewWidth > 1200 ? "rotate(0)" : "rotate(67.5)"}>
                        <stop offset="0%" stopColor="#5499D9" />
                        <stop offset="100%" stopColor="#2E80CC" />
                    </linearGradient>
                </defs>
            </S.SideWave>
            <S.SideWave fill="url(#gradient3)" options={{
                height: viewWidth > 1200 ? 210 : 150,
                amplitude: 250,
                speed: 0.17,
                points: 1
            }}>
                <defs>
                    <linearGradient id="gradient3" gradientTransform={viewWidth > 1200 ? "rotate(45)" : "rotate(67.5)"}>
                        <stop offset="11.3%" stopColor="#2E80CC" />
                        <stop offset="100%" stopColor="#2566A2" />
                    </linearGradient>
                </defs>
            </S.SideWave>

            <S.Bubble delay={1.5} />
            <S.Bubble delay={2} />
            <S.Bubble delay={2.8} />
            <S.Bubble delay={3.6} />
        </S.SideWaveBox>
    )
}
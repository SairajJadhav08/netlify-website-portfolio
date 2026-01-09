'use client';

import React, { useRef, useId, useEffect, useState, CSSProperties } from 'react';
import { animate, useMotionValue, AnimationPlaybackControls } from 'framer-motion';

// Type definitions
interface ResponsiveImage {
    src: string;
    alt?: string;
    srcSet?: string;
}

interface AnimationConfig {
    preview?: boolean;
    scale: number;
    speed: number;
}

interface NoiseConfig {
    opacity: number;
    scale: number;
}

interface ShadowOverlayProps {
    type?: 'preset' | 'custom';
    presetIndex?: number;
    customImage?: ResponsiveImage;
    sizing?: 'fill' | 'stretch';
    color?: string;
    animation?: AnimationConfig;
    noise?: NoiseConfig;
    style?: CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
): number {
    if (fromLow === fromHigh) {
        return toLow;
    }
    const percentage = (value - fromLow) / (fromHigh - fromLow);
    return toLow + percentage * (toHigh - toLow);
}

const useInstanceId = (): string => {
    const id = useId();
    const cleanId = id.replace(/:/g, "");
    const instanceId = `shadowoverlay-${cleanId}`;
    return instanceId;
};

// Hook to detect mobile devices and reduced motion preference
const useMobileOptimizations = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Detect mobile device by screen width and touch capability
        const checkMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 768;
            setIsMobile(isTouchDevice && isSmallScreen);
        };

        // Check for reduced motion preference
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(motionQuery.matches);

        const handleMotionChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        motionQuery.addEventListener('change', handleMotionChange);

        return () => {
            window.removeEventListener('resize', checkMobile);
            motionQuery.removeEventListener('change', handleMotionChange);
        };
    }, []);

    return { isMobile, prefersReducedMotion };
};

export function EtheralShadow({
    sizing = 'fill',
    color = 'rgba(128, 128, 128, 1)',
    animation,
    noise,
    style,
    className,
    children
}: ShadowOverlayProps) {
    const id = useInstanceId();
    const { isMobile, prefersReducedMotion } = useMobileOptimizations();

    // Reduce animation intensity on mobile for better performance
    const mobileScaleMultiplier = isMobile ? 0.5 : 1;
    const mobileSpeedMultiplier = isMobile ? 0.6 : 1;

    // Disable animation entirely if user prefers reduced motion
    const shouldAnimate = animation && animation.scale > 0 && !prefersReducedMotion;

    const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
    const hueRotateMotionValue = useMotionValue(180);
    const hueRotateAnimation = useRef<AnimationPlaybackControls | null>(null);
    const lastUpdateTime = useRef(0);

    // Apply mobile optimizations to displacement scale (lower = less GPU intensive)
    const baseDisplacementScale = animation ? mapRange(animation.scale, 1, 100, 20, 100) : 0;
    const displacementScale = baseDisplacementScale * mobileScaleMultiplier;

    // Slower animation duration on mobile for smoother performance
    const baseAnimationDuration = animation ? mapRange(animation.speed, 1, 100, 1000, 50) : 1;
    const animationDuration = baseAnimationDuration / mobileSpeedMultiplier;

    // Mobile: reduce numOctaves for simpler turbulence (1 vs 2)
    const numOctaves = isMobile ? 1 : 2;

    // Mobile: use simpler base frequency
    const baseFrequency = animation ? (
        isMobile
            ? `${mapRange(animation.scale, 0, 100, 0.002, 0.001)},${mapRange(animation.scale, 0, 100, 0.006, 0.003)}`
            : `${mapRange(animation.scale, 0, 100, 0.001, 0.0005)},${mapRange(animation.scale, 0, 100, 0.004, 0.002)}`
    ) : "0.001,0.004";

    useEffect(() => {
        if (feColorMatrixRef.current && shouldAnimate) {
            if (hueRotateAnimation.current) {
                hueRotateAnimation.current.stop();
            }
            hueRotateMotionValue.set(0);

            // Throttle updates on mobile to reduce CPU/GPU load
            const throttleMs = isMobile ? 50 : 0; // ~20fps on mobile vs 60fps on desktop

            hueRotateAnimation.current = animate(hueRotateMotionValue, 360, {
                duration: animationDuration / 25,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                ease: "linear",
                delay: 0,
                onUpdate: (value: number) => {
                    const now = Date.now();
                    if (now - lastUpdateTime.current >= throttleMs) {
                        if (feColorMatrixRef.current) {
                            feColorMatrixRef.current.setAttribute("values", String(value));
                        }
                        lastUpdateTime.current = now;
                    }
                }
            });

            return () => {
                if (hueRotateAnimation.current) {
                    hueRotateAnimation.current.stop();
                }
            };
        }
    }, [shouldAnimate, animationDuration, hueRotateMotionValue, isMobile]);

    return (
        <div
            className={className}
            style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                // Hardware acceleration hints for mobile
                transform: "translateZ(0)",
                willChange: shouldAnimate ? "auto" : "auto",
                ...style
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: -displacementScale,
                    filter: shouldAnimate ? `url(#${id}) blur(${isMobile ? '2px' : '4px'})` : "none",
                    // Hardware acceleration for the animated layer
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                }}
            >
                {shouldAnimate && (
                    <svg style={{ position: "absolute" }}>
                        <defs>
                            <filter id={id}>
                                <feTurbulence
                                    result="undulation"
                                    numOctaves={numOctaves}
                                    baseFrequency={baseFrequency}
                                    seed="0"
                                    type="turbulence"
                                />
                                <feColorMatrix
                                    ref={feColorMatrixRef}
                                    in="undulation"
                                    type="hueRotate"
                                    values="180"
                                />
                                <feColorMatrix
                                    in="dist"
                                    result="circulation"
                                    type="matrix"
                                    values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="circulation"
                                    scale={displacementScale}
                                    result="dist"
                                />
                                <feDisplacementMap
                                    in="dist"
                                    in2="undulation"
                                    scale={displacementScale}
                                    result="output"
                                />
                            </filter>
                        </defs>
                    </svg>
                )}
                <div
                    style={{
                        backgroundColor: color,
                        maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
                        maskSize: sizing === "stretch" ? "100% 100%" : "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>

            {children && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        zIndex: 10
                    }}
                >
                    {children}
                </div>
            )}

            {noise && noise.opacity > 0 && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
                        // Reduce noise texture size on mobile for better performance
                        backgroundSize: isMobile ? noise.scale * 300 : noise.scale * 200,
                        backgroundRepeat: "repeat",
                        // Reduce noise opacity on mobile
                        opacity: isMobile ? noise.opacity / 3 : noise.opacity / 2
                    }}
                />
            )}
        </div>
    );
}

import { useEffect, useState } from "react";

export interface TimerProps {
  startTime: number;
  endTime: number;
}

export const Timer = ({ startTime, endTime }: TimerProps) => {
  const [progress, setProgress] = useState(1);
  const [largeArc, setLargeArc] = useState(0);

  useEffect(() => {
    let animationId: number;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const ratio = Math.max(0, 1 - elapsed / (endTime - startTime));
      setProgress(ratio);
      setLargeArc(ratio > 0.5 ? 1 : 0);
      if (ratio > 0 && ratio < 1) {
        animationId = requestAnimationFrame(update);
      }
    };

    animationId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationId);
  }, [endTime, startTime]);

  // calculate path
  const radius = 0.5;
  const angle = 360 * progress;
  const rad = (angle * Math.PI) / 180;
  const x = radius - radius * Math.sin(rad);
  const y = radius - radius * Math.cos(rad);

  const pathData = `
    M ${radius} ${radius}
    L ${radius} 0
    A ${radius} ${radius} 0 ${largeArc} 0 ${x} ${y}
    Z
  `;

  return (
    <svg
      className="w-full h-full text-mb-orange fill-current"
      viewBox="0 0 1 1"
    >
      <path d={pathData} />
    </svg>
  );
};

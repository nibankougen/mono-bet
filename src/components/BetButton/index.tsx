import styled from "styled-components";
import { Timer } from "./Timer";
import { useState } from "react";

export interface BetButtonProps {
  onClick: () => void;
  disabled?: boolean;
  startTime: number;
  endTime: number;
}

export const BetButton = ({
  onClick,
  disabled,
  startTime,
  endTime,
}: BetButtonProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(false);
    setTimeout(() => setActive(true), 0);
    onClick();
  };
  return (
    <>
      <div className="relative p-[20px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <Timer startTime={startTime} endTime={endTime} />
        </div>
        <RippleWrapper className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div
            className={`w-full h-full rounded-full bg-mb-orange ${
              active ? "animate-ripple" : "opacity-0"
            }`}
          />
        </RippleWrapper>
        <button
          type="button"
          aria-label={"Bet!"}
          onClick={handleClick}
          disabled={disabled}
          className="relative w-[200px] h-[200px] text-[80px] border-[4px] rounded-full bg-mb-orange text-white disabled:bg-mb-gray transition font-bold z-10 active:scale-95"
        >
          Bet!
        </button>
      </div>
    </>
  );
};

const RippleWrapper = styled.div`
  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  .animate-ripple {
    animation: ripple 0.5s ease-out forwards;
  }
`;

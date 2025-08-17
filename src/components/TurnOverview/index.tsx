import type { Turn } from "../../types";
import { TurnOverviewBox } from "../TurnOverviewBox";

export interface TurnOverviewProps {
  turns: Turn[];
  currentTurnIndex: number | null;
  firstBetBonusIndex: number | null;
}

export const TurnOverview = ({
  turns,
  currentTurnIndex,
  firstBetBonusIndex,
}: TurnOverviewProps) => {
  return (
    <div className="relative grid grid-cols-[auto_auto_1fr] gap-[8px]">
      {currentTurnIndex !== null && currentTurnIndex < turns.length && (
        <div
          className="absolute left-0 w-[60px] h-[60px] rounded-[12px] border-[6px] border-mb-orange transition-turn"
          style={{ top: `${currentTurnIndex * 68 + 28}px` }}
        />
      )}
      <div />
      <div>
        <div className="w-[20px] h-[20px] mx-auto bg-mb-gray" />
      </div>
      <div />
      {turns.map((turn, index) => (
        <TurnOverviewBox
          key={index}
          turn={turn}
          hasFirstBetBonus={firstBetBonusIndex === index}
        />
      ))}
    </div>
  );
};

import type { Turn } from "../../types";
import { Icon } from "../Icon";

export interface TurnOverviewBoxProps {
  turn: Turn;
  hasFirstBetBonus: boolean;
}

export const TurnOverviewBox = ({
  turn,
  hasFirstBetBonus,
}: TurnOverviewBoxProps) => {
  return (
    <>
      <div className="relative w-[60px] my-auto text-[30px]/[60px] font-bold text-center">
        {hasFirstBetBonus && (
          <div className="absolute right-[6px] top-[12px] w-[10px] h-[10px] bg-mb-blue rotate-45"></div>
        )}
        {turn.score}
      </div>
      <div className="w-[20px] my-auto text-[20px] text-mb-gray text-center">
        {turn.betUsers.length}
      </div>
      <div className="grid grid-cols-5 my-auto gap-[4px]">
        {turn.betUsers.map((betUser) => (
          <div key={betUser.id} className="animate-slide-in-right">
            <Icon
              size={24}
              color={betUser.iconColor}
              image={betUser.iconImage}
            />
          </div>
        ))}
      </div>
    </>
  );
};

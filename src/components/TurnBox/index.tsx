import type { Turn } from "../../types";
import { BetUser } from "../BetUser";
import { TurnScore } from "../TurnScore";

export interface TurnBoxProps {
  active: boolean;
  turn: Turn;
}

export const TurnBox = ({ active, turn }: TurnBoxProps) => {
  return (
    <div
      className={`grid grid-cols-[auto_1fr] transition-turn ${
        active ? "gap-[16px]" : "gap-[8px]"
      }`}
    >
      <div className="my-auto">
        <TurnScore active={active} score={turn.score} />
      </div>
      <div className="my-auto">
        <div className={`grid transition-turn ${active ? "gap-4" : "gap-2"}`}>
          {turn.betUsers.map((user) => (
            <BetUser key={user.id} active={active} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

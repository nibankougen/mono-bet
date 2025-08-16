import type { User } from "../../types";
import { Icon } from "../Icon";

export interface BetUserProps {
  active: boolean;
  user: User;
}

export const BetUser = ({ active, user }: BetUserProps) => {
  const textClassName = `${
    active ? "text-[32px]/[48px]" : "text-[16px]/[24px]"
  } font-bold overflow-hidden text-ellipsis whitespace-nowrap transition-turn`;

  return (
    <div
      className={`grid grid-cols-[auto_1fr] text-mb-black animate-slide-in-right transition-turn ${
        active ? "gap-[8px]" : "gap-[4px]"
      }`}
    >
      <Icon
        size={active ? 48 : 24}
        color={user.iconColor}
        image={user.iconImage}
      />
      <div className={textClassName}>{user.name}</div>
    </div>
  );
};

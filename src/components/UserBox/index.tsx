import type { User } from "../../types";
import { Icon } from "../Icon";

export interface UserBoxProps {
  active: boolean;
  user: User;
  score: number;
}

export const UserBox = ({ active, user, score }: UserBoxProps) => {
  return (
    <div className="w-[100px]">
      <div className="flex justify-center">
        <Icon
          size={48}
          color={user.iconColor}
          image={user.iconImage}
          active={active}
        />
      </div>
      <div className="text-center text-[16px]/[24px] font-bold text-mb-black overflow-hidden text-ellipsis whitespace-nowrap">
        {user.name}
      </div>
      <div className="text-center text-[32px]/[32px] font-bold text-mb-black">
        {score}
      </div>
    </div>
  );
};

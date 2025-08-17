import StarImage from "./images/Star.svg?react";
import TriangleImage from "./images/Triangle.svg?react";

export interface IconProps {
  size: IconSize;
  color: number;
  image: number;
  active?: boolean;
}

type IconSize = 24 | 48;

const SizeTagMap: Record<IconSize, string> = {
  24: "w-[24px] h-[24px]",
  48: "w-[48px] h-[48px]",
};

const ColorTagMap: Record<number, string> = {
  0: "text-red-500",
  1: "text-orange-500",
  2: "text-yellow-500",
  3: "text-green-500",
  4: "text-teal-500",
  5: "text-sky-500",
  6: "text-blue-500",
  7: "text-indigo-500",
  8: "text-purple-500",
  9: "text-pink-500",
};

export const Icon = ({ size, color, image, active = true }: IconProps) => {
  const className = `${SizeTagMap[size]} ${
    ColorTagMap[color]
  } block transition-turn${active ? "" : " opacity-40"}`;

  switch (image) {
    case 0:
      return <StarImage className={className} />;
    case 1:
      return <TriangleImage className={className} />;
    default:
      return <StarImage className={className} />;
  }
};

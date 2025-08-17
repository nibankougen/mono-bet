export interface FirstBetBonusBoxProps {
  active: boolean;
  score: number;
}

export const FirstBetBonusBox = ({ active, score }: FirstBetBonusBoxProps) => {
  const backgroundClassName = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rotate-45 bg-mb-blue transition${
    active ? "" : " opacity-40"
  }`;

  return (
    <div>
      <div className="relative">
        <div className={backgroundClassName} />
        <div className="relative ml-[-4px] grid grid-flow-col justify-center gap-[2px] text-white font-bold">
          <div className="text-[20px]/[60px]">+</div>
          <div className="text-[32px]/[60px]">{score}</div>
        </div>
      </div>
      <div className="relative mt-[20px] text-center text-[20px]/[30px] text-mb-black">
        First Bet Bonus
      </div>
    </div>
  );
};

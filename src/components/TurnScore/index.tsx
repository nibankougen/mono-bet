export interface TurnScoreProps {
  active: boolean;
  score: number;
}

export const TurnScore = ({ active, score }: TurnScoreProps) => {
  return (
    <div
      className={`${
        active
          ? "w-[200px] h-[200px] rounded-[40px] border-16 text-[120px]/[168px] border-mb-orange"
          : "w-[100px] h-[100px] rounded-[20px] border-10 text-[60px]/[80px] border-mb-gray"
      }
          text-center font-bold text-mb-black transition-turn`}
    >
      {score}
    </div>
  );
};

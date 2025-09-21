import type { AchievementItem } from "../model/types";

type AchievementProps = AchievementItem;

export const Achievement = ({ score, label }: AchievementProps) => {
  return (
    <p className="flex flex-col items-center rounded-lg bg-accent px-4 py-3 text-[10px]">
      <span className="text-[22px] font-bold">{score}</span>
      <span>{label}</span>
    </p>
  );
};

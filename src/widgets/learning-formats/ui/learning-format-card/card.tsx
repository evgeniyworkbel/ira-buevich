import Image from "next/image";
import { Chip } from "@/shared/ui";
import { cn } from "@/shared/lib";
import styles from "./card.module.css";
import { LearningFormat } from "../../model/types";

type LearningFormatCardProps = LearningFormat & {
  className?: string;
};

export function LearningFormatCard({
  className,
  iconSrc,
  title,
  description,
  benefits,
}: LearningFormatCardProps) {
  return (
    <div
      className={cn(
        "grid min-h-[450px] grid-rows-[auto_1fr_auto] gap-8 rounded-[20px] bg-background-surface px-4 py-10 text-sm text-foreground-surface xl:text-xs",
        styles.card,
        className,
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <Image src={iconSrc} width={34} height={34} alt="" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p>{description}</p>
      <ul className="flex flex-wrap gap-2.5">
        {benefits.map((item, idx) => (
          <Chip key={idx} className="border-foreground-surface">
            {item}
          </Chip>
        ))}
      </ul>
    </div>
  );
}

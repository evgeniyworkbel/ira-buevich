import { cn } from "@/shared/lib";
import { Button, Chip, Dot } from "@/shared/ui";
import { Course } from "../../model/types";
import styles from "./card.module.css";
import { getLessonsLabel } from "../../lib/getLessonsLabel";

type CourseCardProps = Course & {
  className?: string;
};

export function CourseCard({
  className,
  level,
  lessonsCount,
  description,
  listItems,
}: CourseCardProps) {
  return (
    <div
      className={cn(
        "grid min-h-[660px] grid-rows-[auto_auto_auto_1fr_auto] gap-6 rounded-[20px] border-3 border-card-border px-4 py-7.5 text-sm xl:min-h-[740px]",
        styles.card,
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Chip className={cn("border-card-border xl:font-semibold", styles.chip)} size="md">
          {level}
        </Chip>
        <p className="text-xs">{getLessonsLabel(lessonsCount)}</p>
      </div>
      <p className="text-lg font-bold">Кому подойдет этот курс</p>
      <p>{description}</p>
      <ul
        aria-label="Чему вы научитесь:"
        className="list-none space-y-3.5 before:mb-3.5 before:block before:text-base before:font-semibold before:content-[attr(aria-label)]"
      >
        {listItems.map((item) => (
          <li key={item} className="flex items-center gap-4">
            <Dot />
            {item}
          </li>
        ))}
      </ul>
      <Button className={cn("mx-auto mt-auto w-3/4 py-3 xl:w-full", styles.button)}>
        Записаться на курс
      </Button>
    </div>
  );
}

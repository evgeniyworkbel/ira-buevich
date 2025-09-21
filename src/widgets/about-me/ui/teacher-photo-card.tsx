import Image from "next/image";
import { achievementsData } from "../model/data";
import { cn } from "@/shared/lib";

export function TeacherPhotoCard() {
  return (
    <div className="relative aspect-[3/4] h-full">
      <div className="relative h-full shrink-0 overflow-hidden rounded-[40px]">
        <Image
          className="h-auto max-w-full"
          src="/teacher-photo.jpg"
          alt="Фото преподователя и основателя школы Lingua Ирины Буевич"
          width={2481}
          height={3308}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 grid -translate-x-1/2 translate-y-1/2 grid-cols-[repeat(3,auto)] gap-3 xl:right-0 xl:bottom-1/2 xl:left-auto xl:translate-x-1/2 xl:grid-cols-[auto] xl:gap-5">
        {achievementsData.map((item, idx) => (
          <p
            key={idx}
            className={cn(
              "flex h-[70px] w-[100px] flex-col items-center justify-center rounded-lg bg-accent text-center text-xs xl:h-[104px] xl:w-[150px] xl:text-sm",
              item.className,
            )}
          >
            <span className="text-[22px] font-bold xl:text-[28px]">{item.score}</span>
            <span>{item.label}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

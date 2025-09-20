import { cn } from "../lib";

type TitleProps = {
  descriptionClassName?: string;
  title: string;
  description: string;
};

export function Title({ descriptionClassName, title, description }: TitleProps) {
  return (
    <hgroup className="mx-auto flex flex-col items-center gap-4.5 text-center xl:max-w-[1000px]">
      <h2 className="text-[22px] font-bold xl:text-[40px]">{title}</h2>
      <p
        className={cn(
          "text-xs font-medium text-foreground-secondary xl:text-lg",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </hgroup>
  );
}

import { cn } from "@/shared/lib";

type AccordionArrowProps = {
  className?: string;
};

export function AccordionArrow({ className }: AccordionArrowProps) {
  return (
    <div className="relative h-[10px] w-[10px] shrink-0">
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-full -translate-y-1/4 -rotate-135 border-t-1 border-l-1 border-foreground transition-transform",
          className,
        )}
      />
    </div>
  );
}

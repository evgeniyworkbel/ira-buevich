import { cn } from "../lib";

type ChipProps = Pick<React.HTMLAttributes<HTMLSpanElement>, "className" | "children">;

export function Chip({ className, ...restProps }: ChipProps) {
  return (
    <span
      {...restProps}
      className={cn(
        "rounded-full border border-card-border px-2.5 py-1 text-center text-xs font-semibold whitespace-nowrap text-foreground-surface",
        className,
      )}
    />
  );
}

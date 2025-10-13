import { cn } from "../lib";

type ChipProps = Pick<React.HTMLAttributes<HTMLSpanElement>, "className" | "children"> & {
  size?: "sm" | "md";
};

export function Chip({ className, size = "sm", ...restProps }: ChipProps) {
  return (
    <span
      {...restProps}
      className={cn(
        "rounded-full border border-foreground-surface text-center text-xs font-semibold whitespace-nowrap text-foreground-surface",
        {
          ["px-2.5 py-1"]: size === "sm",
          ["px-6 py-2"]: size === "md",
        },
        className,
      )}
    />
  );
}

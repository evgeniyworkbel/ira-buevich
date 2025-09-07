import { PropsWithChildren } from "react";
import { cn } from "../lib";

type ButtonProps = PropsWithChildren<{ className?: string }>;

export function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-[50px] w-fit shrink-0 items-center justify-center rounded-[40px] px-3 py-4 text-sm font-semibold text-foreground-surface",
        className,
      )}
    >
      {children}
    </button>
  );
}

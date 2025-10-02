import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib";

type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "type" | "children">;

export function Button({ className, type = "button", children }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-fit w-fit shrink-0 cursor-pointer items-center justify-center rounded-[40px] px-3 py-4 text-sm font-semibold text-foreground-surface",
        className,
      )}
      type={type}
    >
      {children}
    </button>
  );
}

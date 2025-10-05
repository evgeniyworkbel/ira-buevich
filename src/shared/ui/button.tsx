import { cn } from "../lib";
import { NativeButtonProps } from "../types";

type ButtonProps = Pick<NativeButtonProps, "className" | "type" | "children" | "onClick">;

// cn() needs to enable sorting of classes by prettier-plugin-tailwindcss
export const buttonClassName = cn(
  "inline-flex h-fit w-fit shrink-0 cursor-pointer items-center justify-center rounded-[40px] px-3 py-4 text-sm font-semibold text-foreground-surface",
);

export function Button({ className, type = "button", ...restProps }: ButtonProps) {
  return <button {...restProps} className={cn(buttonClassName, className)} type={type} />;
}

import { cn } from "../lib";

export type InputProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className" | "type" | "defaultValue" | "value" | "placeholder" | "onChange" | "disabled"
> & {
  ref?: React.Ref<HTMLInputElement>;
  name: string;
  label?: string;
};

export function Input({ ref, className, label, ...restProps }: InputProps) {
  return (
    <label className="flex flex-col gap-3">
      {label && (
        <span className="text-center text-sm font-semibold text-foreground-surface">{label}</span>
      )}
      <input
        {...restProps}
        ref={ref}
        className={cn(
          "h-12 rounded-[10px] border border-[oklch(0.93_0.013_255.5)] bg-background text-center placeholder:text-center placeholder:text-sm placeholder:text-foreground-secondary",
          className,
        )}
      />
    </label>
  );
}

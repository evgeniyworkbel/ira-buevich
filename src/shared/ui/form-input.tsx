import { Input, InputProps } from "./input";

type FormInputProps = InputProps & {
  error?: string;
};

export function FormInput({ error, ...restProps }: FormInputProps) {
  return (
    <div className="w-full">
      <Input {...restProps} />
      {error && (
        <p className="mt-1 ml-auto flex w-fit items-center text-[10px] text-foreground-surface xl:text-xs">
          <span className="mr-1.5 inline-flex size-3 items-center justify-center rounded-full bg-[indianred] text-[8px]">
            !
          </span>
          {error}
        </p>
      )}
    </div>
  );
}

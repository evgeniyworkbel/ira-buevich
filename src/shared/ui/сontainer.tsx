import { cn } from "../lib";
import { NativeDivProps } from "../types";

type ContainerProps = Pick<NativeDivProps, "id" | "className" | "children">;

export function Container({ className, children, id }: ContainerProps) {
  return (
    <div id={id} className={cn("px-4 py-12 lg:px-[100px]", className)}>
      {children}
    </div>
  );
}

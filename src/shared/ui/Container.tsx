import { PropsWithChildren } from "react";
import { cn } from "../lib";

type ContainerProps = PropsWithChildren<{ className?: string }>;

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("px-4 py-4 lg:px-[100px]", className)}>{children}</div>
  );
}

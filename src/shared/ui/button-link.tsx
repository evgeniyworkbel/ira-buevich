import Link, { LinkProps } from "next/link";
import { cn } from "../lib";
import { buttonClassName } from "./button";
import { NativeLinkProps } from "../types";

type ButtonLinkProps = LinkProps & Pick<NativeLinkProps, "className" | "target" | "children">;

export function ButtonLink({ className, ...restProps }: ButtonLinkProps) {
  return <Link {...restProps} className={cn(buttonClassName, className)} />;
}

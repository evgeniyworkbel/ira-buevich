import { cn } from "@/shared/lib";
import { AccordionArrow } from "./accordion-arrow";

export type AccordionItemProps = {
  title: string;
  content: string;
};

import styles from "./accordion-item.module.css";

export function AccordionItem({ title, content }: AccordionItemProps) {
  return (
    <details
      className={cn(
        "group overflow-hidden rounded-xl bg-background p-6 text-sm text-foreground xl:text-lg",
        styles.details,
      )}
    >
      <summary className="flex list-none items-center justify-between gap-3 font-semibold">
        {title}
        <AccordionArrow className="group-open:translate-y-1/4 group-open:rotate-45" />
      </summary>
      <p className="py-3">{content}</p>
    </details>
  );
}

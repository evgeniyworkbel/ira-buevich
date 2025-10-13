import { cn } from "@/shared/lib";
import { AccordionItem, AccordionItemProps } from "./accordion-item";

type AccordeonProps = {
  className?: string;
  items: Array<AccordionItemProps>;
};

export function Accordion({ className, items }: AccordeonProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} />
      ))}
    </div>
  );
}

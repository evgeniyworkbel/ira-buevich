import { AccordionArrow } from "./accordion-arrow";

export type AccordionItemProps = {
  title: string;
  content: React.ReactNode;
};

export function AccordionItem({ title, content }: AccordionItemProps) {
  return (
    <div className="group rounded-xl bg-background text-sm text-foreground xl:text-lg">
      <label className="relative flex list-none items-center justify-between gap-3 p-6 font-semibold">
        {title}
        <AccordionArrow className="group-has-checked:translate-y-1/4 group-has-checked:rotate-45" />
        <input type="checkbox" hidden />
      </label>
      <div className="h-0 overflow-clip px-6 transition-all group-has-checked:h-auto group-has-checked:pt-0 group-has-checked:pb-6">
        {content}
      </div>
    </div>
  );
}

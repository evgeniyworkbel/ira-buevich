import { Accordion, Container, Title } from "@/shared/ui";
import { faqData } from "../model/data";

export function Faq() {
  return (
    <Container className="bg-background-surface text-foreground-surface">
      <Title
        descriptionClassName="text-foreground-surface"
        title="Вопросы и ответы"
        description="Выберите формат обучения, который лучше всего соответствует вашим предпочтениям, расписанию и бюджету.
Все форматы включают одну и ту же высококачественную учебную программу и подход к обучению."
      />
      <section className="mt-11.5">
        <Accordion className="mx-auto max-w-[900px]" items={faqData} />
      </section>
    </Container>
  );
}

import { Container, Title } from "@/shared/ui";
import { learningFormatsData } from "../model/data";
import { LearningFormatCard } from "./learning-format-card";

export function LearningFormats() {
  return (
    <Container className="px-10.5">
      <Title
        title="Форматы обучения"
        description="Выберите формат обучения, который лучше всего соответствует вашим предпочтениям, расписанию и бюджету. Все форматы включают одну и ту же высококачественную учебную программу и подход к обучению."
      />
      <section className="mx-auto mt-10 grid max-w-[350px] grid-cols-1 gap-6 xl:max-w-[1240px] xl:grid-cols-4">
        {learningFormatsData.map((item, idx) => (
          <LearningFormatCard key={idx} {...item} />
        ))}
      </section>
    </Container>
  );
}

import { Container, Title } from "@/shared/ui";
import { coursesData } from "../model/data";
import { CourseCard } from "./course-card";

export function Courses() {
  return (
    <Container className="bg-background-surface text-foreground-surface">
      <Title
        title="Выберите свой уровень"
        description="От полного новичка до продвинутого оратора - найдите идеальный курс, соответствующий вашему текущему уровню и целям обучения"
      />
      <section className="mt-11.5 flex flex-col flex-wrap justify-center gap-12 xl:flex-row">
        {coursesData.map((item) => (
          <CourseCard key={item.level} {...item} className="xl:w-[calc(33.33%_-_32px)]" />
        ))}
      </section>
    </Container>
  );
}

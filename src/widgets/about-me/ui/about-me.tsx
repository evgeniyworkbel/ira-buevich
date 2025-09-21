import { Container, Title } from "@/shared/ui";
import { Autobiography } from "./autobiography";
import { TeacherPhotoCard } from "./teacher-photo-card";

export function AboutMe() {
  return (
    <Container className="bg-background-surface text-foreground-surface">
      <Title title="Обо мне" />
      <section className="mt-11.5 flex flex-col items-center justify-center gap-19 xl:h-[650px] xl:flex-row xl:items-start xl:gap-26.5">
        <TeacherPhotoCard />
        <Autobiography />
      </section>
    </Container>
  );
}

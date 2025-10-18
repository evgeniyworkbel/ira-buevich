import { contacts } from "@/shared/contacts";
import { ButtonLink, Container } from "@/shared/ui";

export function ReadyToSpeak() {
  return (
    <Container>
      <div className="mx-auto flex flex-col items-center gap-10 rounded-[20px] bg-linear-106 from-[oklch(0.536_0.187_261.9)] from-[2%] to-[oklch(0.89_0.06_231)] to-[112%] px-4.5 py-6">
        <hgroup className="flex flex-col items-center gap-3 text-center text-foreground-surface">
          <h2 className="text-xl font-bold xl:text-[34px]">
            Готовы начать уверенно говорить по-английски?
          </h2>
          <p className="text-sm leading-7 xl:text-lg">
            Присоединяйтесь к сотням успешных студентов, которые изменили
            <span className="xl:block">&nbsp;свои навыки владения английским.</span>
            <span className="block">
              Ваш путь к свободному владению английским языком начинается с одного шага.
            </span>
          </p>
        </hgroup>
        <ButtonLink
          className="w-full rounded-xl bg-accent xl:w-fit"
          href={contacts.instagramDM}
          target="_blank"
        >
          Бесплатная консультация
        </ButtonLink>
      </div>
    </Container>
  );
}

import { Container, Dot, Title } from "@/shared/ui";
import { speakingClubsBenefits } from "../model/data";
import Image from "next/image";
import { navItems } from "@/shared/navigation";

export function SpeakingClubs() {
  return (
    <Container id={navItems.speakingClubs.sectionId}>
      <Title
        title="Разговорные клубы"
        description="Вы знаете грамматику, но впадаете в ступор при живом общении? Вы учите слова, но не можете их вовремя вспомнить в диалоге? Вы не одиноки. Именно для решения этих задач я создала Speaking Club!"
      />
      <section className="mx-auto mt-10 flex flex-col gap-12">
        <div className="flex flex-col gap-2 text-sm xl:text-lg">
          <p>
            <span className="text- font-medium">Разговорный клуб</span> - это живое общение в
            комфортной атмосфере, где нет места скучным упражнениям и страху сделать ошибку.
          </p>
          <p>
            <span className="font-medium">Как это работает?</span> Мы выбираем увлекательный формат
            (просмотр кино, виртуальное путешествие, викторины, настольные игры, культурный обмен),
            готовим материал заранее и погружаемся в дискуссию.
          </p>
          <p>
            <span className="font-medium">Ваша задача</span> - выражать мысли, выполнять задания,
            общаться. Мы не перебиваем и не исправляем ошибки по ходу речи - это раскрепощает и
            снимает языковой барьер.
          </p>
        </div>
        <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-24">
          <ul
            aria-label="Присоединяйтесь к нашему языковому сообществу!"
            className="flex list-none flex-col space-y-3.5 text-sm before:mb-3.5 before:block before:text-xl before:font-semibold before:content-[attr(aria-label)] xl:text-lg xl:before:text-2xl"
          >
            {speakingClubsBenefits.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <Dot />
                <hgroup>
                  <h3 className="inline font-semibold">{item.title}:</h3>&nbsp;
                  {item.description}
                </hgroup>
              </li>
            ))}
          </ul>
          <Image
            className="rounded-xl"
            src="/speaking-club.webp"
            width={1000}
            height={667}
            alt=""
          />
        </div>
      </section>
    </Container>
  );
}

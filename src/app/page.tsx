import {
  AboutMe,
  Courses,
  Faq,
  Footer,
  // ReceiveGift,
  Header,
  Hero,
  LearningFormats,
  ReadyToSpeak,
  SpeakingClubs,
} from "@/widgets";

export default function Page() {
  return (
    // todo: добавить Отзывы, кнопку Наверх и красивые ссылки в соцсетях (фавиконы и прочее)
    <div className="min-h-screen max-w-[1920px] bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Courses />
        <SpeakingClubs />
        <LearningFormats />
        <AboutMe />
        <Faq />
        {/* <ReceiveGift /> */}
        <ReadyToSpeak />
      </main>
      <Footer />
    </div>
  );
}

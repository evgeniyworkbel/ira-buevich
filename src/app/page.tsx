import {
  AboutMe,
  Courses,
  Faq,
  Footer,
  // ReceiveGift,
  Header,
  Hero,
  LearningFormats,
  SpeakingClubs,
} from "@/widgets";

export default function Page() {
  return (
    // todo: сделать smooth скролл
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
      </main>
      <Footer />
    </div>
  );
}

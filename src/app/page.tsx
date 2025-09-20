import { Courses, Footer, Header, Hero, LearningFormats } from "@/widgets";

export default function Page() {
  return (
    // todo: сделать smooth скролл
    <div className="min-h-screen max-w-[1920px] bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Courses />
        <LearningFormats />
      </main>
      <Footer />
    </div>
  );
}

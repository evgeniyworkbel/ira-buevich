import { Footer, Header } from "@/widgets";

export default function Page() {
  return (
    // todo: сделать smooth скролл
    <div className="bg-background text-foreground min-h-screen max-w-[1920px]">
      <Header />
      <main className=""></main>
      <Footer />
    </div>
  );
}

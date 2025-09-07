import { Button, Container } from "@/shared/ui";
import Image from "next/image";

export function Hero() {
  return (
    <Container className="bg-background-surface text-foreground-surface">
      <div
        id="hero-card"
        className="relative flex min-h-[500px] flex-col justify-between rounded-[40px] border-4 border-[oklch(0.642_0.141_262.6)] px-4.5 py-6 xl:min-h-[450px] xl:justify-end xl:gap-14 xl:border-10 xl:p-12"
      >
        <hgroup className="leading-relaxed xl:max-w-[790px]">
          <h1 className="text-[22px] font-bold xl:text-4xl">
            Выбор формата обучения – это важный шаг на пути к знаниям!
          </h1>
          <p className="mt-4 text-base font-bold xl:text-[22px]">
            Давайте разберём, какие вариранты подходят лучше всего
          </p>
        </hgroup>
        <div className="z-10 flex flex-col items-center gap-6 xl:flex-row xl:justify-end">
          <Button className="bg-linear-125 from-[oklch(0.72_0.192_149.5_/_70%)] to-[oklch(0.885_0.076_151.2_/_70%)] px-7 text-base xl:px-8.5 xl:text-lg">
            Записаться на пробное занятие
          </Button>
          <Button className="bg-linear-125 from-[oklch(0.564_0.174_262.21)] to-[oklch(0.324_0.065_263.11)] px-6 text-base xl:text-lg">
            Выберите свой курс
          </Button>
        </div>
        <Image
          className="absolute right-0 bottom-0 -translate-x-6 xl:w-64 xl:-translate-x-8"
          src="/teacher.png"
          alt=""
          width={210}
          height={294}
        />
      </div>
    </Container>
  );
}

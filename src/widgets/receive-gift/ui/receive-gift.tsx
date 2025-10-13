import { Container, Title } from "@/shared/ui";
import { GiftForm } from "./gift-form";

export function ReceiveGift() {
  return (
    <Container>
      <Title
        title="Специальный подарок"
        description="У вас есть специальный код? Введите его ниже, чтобы получить эксклюзивный подарок и начать свое путешествие по изучению английского языка с бонусом!"
      />
      <section className="mx-auto max-w-[700px]">
        <GiftForm />
        <p className="mt-8 text-center text-xs text-foreground-secondary">
          <span className="font-medium">У вас еще нет кода?</span> Присоединяйтесь к нашему
          сообществу, и вы получите его в ближайшее время! Специальные коды распространяются во
          время уроков, в социальных сетях и на мероприятиях.
        </p>
      </section>
    </Container>
  );
}

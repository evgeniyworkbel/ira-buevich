import { Button, FormInput } from "@/shared/ui";

export function GiftForm() {
  return (
    <div className="mt-10 flex flex-col items-center gap-6.5 rounded-xl bg-linear-115 from-[oklch(0.536_0.187_262deg)] to-[oklch(0.344_0.112_262deg)] px-4.5 py-6 drop-shadow-2xl xl:px-6">
      <h3 className="text-xl font-bold text-foreground-surface xl:text-2xl">Получи свой подарок</h3>
      {/** @todo: добавить действие, обработку ошибок https://nextjs.org/docs/app/guides/forms */}
      <form className="flex w-full flex-col items-center gap-6">
        <FormInput
          name="secretCode"
          label="Специальное кодовое слово"
          placeholder="Введите специальный код"
        />
        {/** @todo: добавить валидацию (в шаред есть регулярка) */}
        <FormInput name="email" label="Введите свой Email" placeholder="email@example.com" />
        <Button
          className="mt-9 w-full bg-accent py-3 xl:h-13 xl:rounded-2xl xl:text-lg"
          type="submit"
        >
          Забрать подарок
        </Button>
      </form>
      <p className="rounded-xl bg-[oklch(0.968_0.007_248deg_/_50%)] px-5.5 py-2.5 text-center text-[10px] text-foreground-surface xl:px-9 xl:py-4 xl:text-xs">
        <span className="font-bold">Подсказка:</span> следите за мной в Instagram или
        присоединяйтесь к клубу общения, чтобы получить специальные коды! Новые коды регулярно
        публикуются на сайте
      </p>
    </div>
  );
}

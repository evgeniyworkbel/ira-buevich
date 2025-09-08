type TitleProps = {
  title: string;
  description: string;
};

export function Title({ title, description }: TitleProps) {
  return (
    <hgroup className="mx-auto flex flex-col items-center gap-4.5 text-center xl:max-w-[1000px]">
      <h2 className="text-[22px] font-bold xl:text-[40px]">{title}</h2>
      <p className="text-xs font-medium xl:text-lg">{description}</p>
    </hgroup>
  );
}

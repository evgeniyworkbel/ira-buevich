const lessonsNouns: Record<Intl.LDMLPluralRule, string> = {
  zero: "",
  one: "занятие",
  two: "",
  few: "занятия",
  many: "занятий",
  other: "",
};

export const getLessonsLabel = (lessonsCount: number) => {
  const pluralRules = new Intl.PluralRules("ru");
  const pluralCategory = pluralRules.select(lessonsCount);
  const noun = lessonsNouns[pluralCategory];
  return `${lessonsCount} ${noun}`;
};

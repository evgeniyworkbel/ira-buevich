import { mobilePhone } from "./constants";
import { formatPhone } from "./lib";

export const navItems = {
  courses: {
    href: "#courses",
    label: "Курсы",
    className: "",
  },
  speakingClub: {
    href: "#speaking-club",
    label: "Разговорный клуб",
    className: "",
  },
  aboutMe: {
    href: "#about-me",
    label: "Обо мне",
    className: "",
  },
  faq: {
    href: "#faq",
    label: "Вопросы и ответы",
    className: "",
  },
  contacts: {
    href: "#contacts",
    label: "Контакты",
    className: "",
  },
  mobilePhone: {
    href: `tel:${mobilePhone}`,
    label: formatPhone(mobilePhone),
    className: "ml-auto",
  },
} as const;

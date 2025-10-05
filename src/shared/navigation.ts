import { mobilePhone } from "./constants";
import { contacts } from "./contacts";
import { formatPhone } from "./lib";

export const navItems = {
  courses: {
    href: "#courses",
    label: "Курсы",
  },
  speakingClub: {
    href: "#speaking-clubs",
    label: "Разговорные клубы",
  },
  aboutMe: {
    href: "#about-me",
    label: "Обо мне",
  },
  faq: {
    href: "#faq",
    label: "Вопросы и ответы",
  },
  contacts: {
    href: "#contacts",
    label: "Контакты",
  },
  mobilePhone: {
    href: contacts.mobilePhone,
    label: formatPhone(mobilePhone),
  },
} as const;

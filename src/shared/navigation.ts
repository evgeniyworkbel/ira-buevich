import { mobilePhone } from "./constants";
import { contacts } from "./contacts";
import { formatPhone } from "./lib";

const generateNavItem = (sectionId: string, label: string) => ({
  sectionId,
  href: `#${sectionId}`,
  label,
});

export const navItems = {
  courses: generateNavItem("courses", "Курсы"),
  speakingClubs: generateNavItem("speaking-clubs", "Разговорные клубы"),
  aboutMe: generateNavItem("about-me", "Обо мне"),
  faq: generateNavItem("faq", "Вопросы и ответы"),
  contacts: generateNavItem("contacts", "Контакты"),
  mobilePhone: {
    href: contacts.mobilePhone,
    label: formatPhone(mobilePhone),
  },
} as const;

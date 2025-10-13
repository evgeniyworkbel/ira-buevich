import { contacts, developersContacts } from "@/shared/contacts";
import { navItems } from "@/shared/navigation";
import { Container } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <Container className="rounded-t-[20px] bg-background-surface py-6 text-foreground-surface">
      <footer
        id={navItems.contacts.sectionId}
        className="grid grid-cols-1 justify-items-center gap-8 text-center text-sm lg:grid-cols-5 lg:items-center lg:gap-5"
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Логотип школы английского языка, написано Lingua текстом"
            width={160}
            height={80}
          />
        </Link>
        <div>
          <p className="flex flex-col">
            <span>ИП Буевич И.Е.&nbsp;</span>
            <span>св-во о регистрации № 392022782 от 11.03.2025</span>
          </p>
        </div>
        <ul className="flex flex-col gap-2">
          <Link href={navItems.courses.href}>{navItems.courses.label}</Link>
          <Link href={navItems.speakingClubs.href}>{navItems.speakingClubs.label}</Link>
        </ul>
        <ul className="flex flex-col gap-2">
          <Link href={navItems.aboutMe.href}>{navItems.aboutMe.label}</Link>
          <Link href={navItems.faq.href}>{navItems.faq.label}</Link>
        </ul>
        <div className="flex max-w-52 flex-col items-center gap-3">
          <ul className="flex gap-[18px]">
            <li>
              <Link href={contacts.instagram} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram.svg"
                  alt="Декоративная иконка со ссылкой на инстаграмм Буевич Ирины"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            {/* <li>
              <Link href={contacts.mobilePhone} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/phone.svg"
                  alt="Декоративная иконка со ссылкой на номер мобильного телефона Буевич Ирины"
                  width={32}
                  height={32}
                />
              </Link>
            </li> */}
            <li>
              <Link href={contacts.location} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/location.svg"
                  alt="Декоративная иконка со ссылкой на карту с местонахождением офиса Буевич Ирины"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
          </ul>
          <address className="not-italic">г. Витебск, ул.Ленина 12а, офис 41/2</address>
        </div>
      </footer>
      <div className="mt-4 flex justify-between gap-3 text-[8px] xl:justify-end xl:text-xs">
        <small>© 2025 Lingua Все права защищены.</small>
        <div className="flex gap-4">
          <small>
            Developed by&nbsp;
            <Link href={developersContacts.programmer} target="_blank" rel="noopener noreferrer">
              Evgeniy S.
            </Link>
          </small>
          <small>
            Designed by&nbsp;
            <Link href={developersContacts.designer} target="_blank" rel="noopener noreferrer">
              Stanislaw O.
            </Link>
          </small>
        </div>
      </div>
    </Container>
  );
}

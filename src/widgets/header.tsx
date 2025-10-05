import { navItems } from "@/shared/navigation";
import { Container } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

// todo: сделать бургер меню на css
export function Header() {
  return (
    <Container className="bg-background-surface py-4 text-foreground-surface">
      <header className="flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="Логотип школы английского языка, написано Lingua текстом"
          width={160}
          height={80}
        />
        <nav className="hidden justify-between gap-x-14 font-semibold xl:flex">
          <Link href={navItems.courses.href}>{navItems.courses.label}</Link>
          <Link href={navItems.speakingClub.href}>{navItems.speakingClub.label}</Link>
          <Link href={navItems.aboutMe.href}>{navItems.aboutMe.label}</Link>
          <Link href={navItems.faq.href}>{navItems.faq.label}</Link>
          <Link href={navItems.contacts.href}>{navItems.contacts.label}</Link>
          {/* <Link className="ml-auto" href={navItems.mobilePhone.href}>
            {navItems.mobilePhone.label}
          </Link> */}
        </nav>
        <Image
          className="xl:hidden"
          src="/menu.svg"
          alt="Expand menu with links"
          width={32}
          height={32}
        />
      </header>
    </Container>
  );
}

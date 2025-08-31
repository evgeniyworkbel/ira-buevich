import { navItems } from "@/shared/navigation";
import { Container } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

// todo: сделать бургер меню на css
export function Header() {
  return (
    <Container className="bg-background-surface text-foreground-surface">
      <header className="flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="English school brand logo, written Lingua"
          width={160}
          height={80}
        />
        <nav className="hidden justify-between gap-x-14 font-semibold xl:flex">
          {Object.values(navItems).map((item) => (
            <Link key={item.href} className={item.className} href={item.href}>
              {item.label}
            </Link>
          ))}
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

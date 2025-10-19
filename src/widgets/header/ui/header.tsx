import { Container } from "@/shared/ui";
import Image from "next/image";
import { Navbar } from "./navbar";
import { BurgerMenu } from "./burger-menu";

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
        <Navbar className="hidden xl:flex" />
        <BurgerMenu />
      </header>
    </Container>
  );
}

import Link from "next/link";
import { cn } from "@/shared/lib";
import { navItems } from "@/shared/navigation";

type NavbarProps = {
  className?: string;
  onLinkClick?: VoidFunction;
};

export function Navbar({ className, onLinkClick }: NavbarProps) {
  return (
    <nav className={cn("flex items-center justify-between gap-14 font-semibold", className)}>
      <Link href={navItems.courses.href} onNavigate={onLinkClick}>
        {navItems.courses.label}
      </Link>
      <Link href={navItems.speakingClubs.href} onNavigate={onLinkClick}>
        {navItems.speakingClubs.label}
      </Link>
      <Link href={navItems.aboutMe.href} onNavigate={onLinkClick}>
        {navItems.aboutMe.label}
      </Link>
      <Link href={navItems.faq.href} onNavigate={onLinkClick}>
        {navItems.faq.label}
      </Link>
      <Link href={navItems.contacts.href} onNavigate={onLinkClick}>
        {navItems.contacts.label}
      </Link>
      {/* <Link className="ml-auto" href={navItems.mobilePhone.href}>
            {navItems.mobilePhone.label}
          </Link> */}
    </nav>
  );
}

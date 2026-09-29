"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@heroui/dropdown";
import { link as linkStyles } from "@heroui/theme";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import clsx from "clsx";

import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Github01Icon, Globe02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={item.href === pathname}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent className="basis-3/5 sm:basis-full" justify="end">
        <Dropdown>
          <DropdownTrigger className="cursor-pointer">
            <HugeiconsIcon icon={Globe02Icon} />
          </DropdownTrigger>
          <DropdownMenu
            onAction={(key) => {
              router.push(pathname, { locale: key.toString() });
            }}
          >
            <DropdownSection title={t("languages")}>
              <DropdownItem key={"nl"}>{t("dutch")}</DropdownItem>
              <DropdownItem key={"en"}>{t("english")}</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <NextLink href="https://github.com/DBosDev" target="_blank" rel="noopener noreferrer" className="text-default-500">
          <HugeiconsIcon icon={Github01Icon} />
        </NextLink>
      </NavbarContent>
    </HeroUINavbar>
  );
};

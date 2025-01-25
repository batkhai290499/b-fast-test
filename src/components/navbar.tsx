"use client";

import NextLink from "next/link";
import clsx from "clsx";
import {
  Button,
  Link,
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Select,
  SelectItem,
  Avatar,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  FishingIcon,
  MountainsBasic,
  CrossHair,
  BasicVectorTopRight,
} from "./icons";

import { siteConfig } from "@/config/site";

const SelectLanguageOption = () => {
  const router = useRouter();
  const [value, setValue] = useState<any>("en");

  const changeLanguage = (e: any) => {
    setValue(e.target.value);
    router.push(`/${e.target.value}`);
  };
  const CountrySupport = [
    {
      key: "en",
      name: "English",
      src: "https://flagcdn.com/gb-eng.svg",
      lang: "en",
    },
    {
      key: "fr",
      name: "France",
      src: "https://flagcdn.com/fr.svg",
      lang: "fr",
    },
  ];

  return (
    <>
      <Select
        className="max-w-[160px]"
        label="Language"
        selectedKeys={value}
        variant="bordered"
        onChange={changeLanguage}
      >
        {CountrySupport.map((country) => (
          <SelectItem
            key={country.key}
            startContent={
              <Avatar
                alt={country.name}
                className="w-6 h-6"
                src={country.src}
              />
            }
          >
            <p className="text-default-500">{country.name}</p>
          </SelectItem>
        ))}
      </Select>
      <p>{value}</p>
    </>
  );
};

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="bg-[#562C2C] backdrop-blur-[25px]"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">Logo Example</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-28">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(" hover:text-[#F2542D] transition-colors ")}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <SelectLanguageOption />
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="FishingIcon"
            href={siteConfig.links.fishingIcon}
          >
            <FishingIcon className="text-[#F0F0F0] hover:text-[#F2542D] transition-colors duration-300" />
          </Link>
          <Link
            isExternal
            aria-label="MountainsBasic"
            href={siteConfig.links.fishingIcon}
          >
            <MountainsBasic className="text-[#F0F0F0] hover:text-[#F2542D] transition-colors duration-300" />
          </Link>
          <Link
            isExternal
            aria-label="CrossHair"
            href={siteConfig.links.fishingIcon}
          >
            <CrossHair className="text-[#F0F0F0] hover:text-[#F2542D] transition-colors duration-300" />
          </Link>
          <Button className="relative overflow-hidden group w-[20px] hover:w-[200px] transition-all duration-300 ease-in-out flex items-center rounded-[33px] bg-[#F2542D] hover:bg-[#CA3E1B]">
            <span className=" translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              Réservez maintenant
            </span>
            <span className="flex-shrink-0 text-[#F0F0F0] group-hover:text-[#F2542D] transition-colors duration-300">
              <BasicVectorTopRight />
            </span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="primary" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

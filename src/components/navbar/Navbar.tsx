"use client";

import { ModeToggle } from "../provider/ModeToggle";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

import { NavLinks } from "../ui/NavLinks";
import { AccessBtn, ContactBtn } from "../mainBtns/MainButtons";

export const Navbar = () => {
  return (
    <nav className="bg-card relative after:pointer-events-none w-full">
      <div className="mx-auto max-w-7xl px-2 py-0 md:py-2 md:px-6 lg:px-8 w-full">
        <div className="relative flex h-16 items-center justify-between">
          {/* Burger mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <List className="w-6 h-6" />
                  <span className="sr-only">Open mobile menu</span>
                </Button>
              </SheetTrigger>

              {/* <- Mobile menu */}
              <SheetContent side="left" className="p-4">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation links for the mobile menu
                </SheetDescription>
                <ModeToggle />
                <ul className="flex flex-col gap-2 mt-8">
                  <div className="flex flex-row gap-2 justify-start items-center">
                    <AccessBtn />
                  </div>
                  <NavLinks isMobile />
                </ul>
              </SheetContent>
              {/* <- EndMobile menu */}
            </Sheet>
          </div>

          {/* Logo + Links desktop */}
          <div className="flex flex-1 items-center justify-center md:justify-start">
            <div className="flex shrink-0 items-center">
              <a
                className="flex flex-row md:flex-col gap-0.5 text-2xl leading-5 italic "
                href="#backToTop"
              >
                <b>FAST</b>
                <span className="font-extralight">TRACK</span>
              </a>
            </div>

            <div className="hidden md:ml-6 md:flex space-x-4">
              <NavLinks className="flex space-x-4" />
            </div>
          </div>

          {/* Right: ModeToggle  */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 space-x-2">
            <div className="flex flex-col md:flex-row-reverse gap-2 md:justify-start items-start">
              <div className="hidden md:block">
                <AccessBtn />
              </div>
              <ContactBtn />
            </div>
            <div className="hidden md:block"></div>
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

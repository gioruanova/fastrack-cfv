"use client";

import React from "react";
import { NavLinks } from "@/components/ui/NavLinks"; // Opcional, si querés reutilizar los mismos links

export const Footer = () => {
  return (
    <footer className="text-foreground pt-6 pb-28 md:pb-6 mt-8 relative z-2 ">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Derechos de autor */}
        <div className="text-sm text-center md:text-right flex flex-col md:flex-col order-3 md:order-1">
          &copy; {new Date().getFullYear()} Fast Track.{" "}
          <span>Todos los derechos reservados.</span>
        </div>

        {/* Links rápidos (opcional) */}
        <nav className="flex gap-4 text-sm text-center order-2 md:order-2">
          <NavLinks />
        </nav>

        {/* Logo o nombre de la institución */}
        <a
          className="flex flex-col gap-0.5 text-5xl text-center md:text-end leading-10  italic capitalize order-1 md:order-3"
          href="#backToTop"
        >
          <b>fast</b>
          <span className=" font-extralight">track</span>
        </a>
      </div>
    </footer>
  );
};

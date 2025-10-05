"use client";

import React from "react";
import { NavLinks } from "@/components/ui/NavLinks"; // Opcional, si querés reutilizar los mismos links

export const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-6">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo o nombre de la institución */}
        <a className="flex flex-col gap-0.5 text-2xl text-center md:text-start leading-5 italic" href="#backToTop">
          <b>FAST</b>
          <span className=" font-extralight">TRACK</span>
        </a>

        {/* Links rápidos (opcional) */}
        <nav className="flex gap-4 text-sm text-center md:text-start">
          <NavLinks />
        </nav>

        {/* Derechos de autor */}
        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} FASTTRACK. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

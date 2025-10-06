"use client";

import React from "react";
import { navLinks } from "@/data/navLinks";

type NavLinksProps = {
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
};

export const NavLinks = ({
  className = "",
  isMobile = false,
  onLinkClick,
}: NavLinksProps) => {
  return (
    <ul className={className}>
      {navLinks.map((link, idx) => (
        <li key={`${link.href}-${idx}`}>
          <a
            href={link.href}
            className={`block px-3 py-2 rounded-md font-medium text-foreground hover:bg-white/5 ${
              isMobile ? "text-base" : "text-sm"
            }`}
            onClick={onLinkClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

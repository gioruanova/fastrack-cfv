"use client";
import { Button } from "../ui/button";

interface BtnProps {
  onClick?: () => void;
}

export const AccessBtn = ({ onClick }: BtnProps) => {
  const dashboardUrl = process.env.NEXT_PUBLIC_CLIENT_DASHBOARD;

  return (
    <Button asChild variant="cta" size="lg" onClick={onClick}>
      <a href={dashboardUrl}>Ingreso Clientes</a>
    </Button>
  );
};

export const ContactBtn = ({ onClick }: BtnProps) => {
  return (
    <Button asChild variant="cta" size="lg" onClick={onClick}>
      <a href="#contacto">Contacto</a>
    </Button>
  );
};

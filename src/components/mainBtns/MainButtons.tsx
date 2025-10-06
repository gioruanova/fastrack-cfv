"use client";
import { Button } from "../ui/button";

export function AccessBtn() {
  const dashboardUrl = process.env.NEXT_PUBLIC_CLIENT_DASHBOARD;

  return (
    <Button asChild variant="cta" size="lg">
      <a href={dashboardUrl}>Ingreso Clientes</a>
    </Button>
  );
}

export function ContactBtn() {
  return (
    <Button asChild variant="cta" size="lg">
      <a href="#contacto">Contacto</a>
    </Button>
  );
}

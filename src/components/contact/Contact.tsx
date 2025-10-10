"use client";
import Script from "next/script";

import { useEffect, useState } from "react";
import { config } from "@/lib/config";
import { GlassCard, GlassCardInner } from "../containers/GlassCard";
import { ShapeLeft, ShapeRight } from "../ui/shape";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Toaster, toast } from "sonner";
import { SecondaryHeading, DefaultParagraph } from "../texts/Text";
import { DefaultCategories, Props as Category } from "@/data/categories";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const getMessagesCategories = `${config.apiUrl}/publicApi/messageCategories`;
const sendMessageUrl = `${config.apiUrl}/publicApi/messages`;

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        execute: (
          siteKey: string,
          options: { action: string }
        ) => Promise<string>;
      };
    };
  }
}

export interface Contact {
  message_email: string;
  message_phone: string;
  category_id: number;
  message_content: string;
}

export function Contact() {
  const [form, setForm] = useState<Contact>({
    message_email: "",
    message_phone: "",
    category_id: 0,
    message_content: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const res = await fetch(getMessagesCategories);
      const data = await res.json();
      setCategories(data);
    } catch (_error) {
      setCategories(DefaultCategories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    if (
      form.message_email !== "" ||
      form.message_phone !== "" ||
      form.category_id !== 0 ||
      form.message_content !== ""
    ) {
      toast.info("Formulario borrado.");
      setForm({
        message_email: "",
        message_phone: "",
        category_id: 0,
        message_content: "",
      });
    }
  };

  const updateFormField = (name: keyof Contact, value: string | number) => {
    setForm((prev) => ({
      ...prev,
      [name]: name === "category_id" ? Number(value) : value,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    updateFormField(name as keyof Contact, value);
  };

  const handleValueChange = (name: keyof Contact, value: string) => {
    updateFormField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Ejecutar reCAPTCHA para obtener token
      const token = await window.grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      // 2️⃣ Enviar token junto con el form
      const res = await fetch(sendMessageUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken: token }),
      });

      let data: { error?: string; message?: string } | null = null;
      try {
        data = await res.json();
      } catch {}

      if (!res.ok) {
        toast.error(data?.error || "Error desconocido");
        return;
      }

      toast.success(
        <div className="flex flex-col gap-2">
          <span>Su mensaje se ha enviado correctamente.</span>
          <span>Pronto nos pondremos en contacto con usted.</span>
        </div>
      );

      setForm({
        message_email: "",
        message_phone: "",
        category_id: 0,
        message_content: "",
      });
    } catch (_error) {
      toast.error(
        "No se pudo conectar con el servidor. Por favor intente más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GlassCard>
        <ShapeLeft />
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
        <div className="py-18 sm:py-20" id="contacto">
          <SecondaryHeading>Contacto</SecondaryHeading>

          <DefaultParagraph>
            Estamos disponibles para atender tus consultas, sugerencias o
            solicitudes. Completa el formulario y nuestro equipo se pondrá en
            contacto a la brevedad. Valoramos tu comunicación y trabajamos para
            ofrecer respuestas claras y efectivas.
          </DefaultParagraph>
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-lg mx-auto mt-8"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="message_email"
                  className="flex gap-0.5 mb-0.5  cursor-pointer"
                >
                  <span className="text-red-500">*</span>Correo Eelectronico:
                </label>
                <input
                  type="email"
                  id="message_email"
                  name="message_email"
                  value={form.message_email}
                  onChange={handleChange}
                  className="input border-foreground border-opacity-50 border-1 rounded-md p-2 text-foreground cursor-pointer"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message_phone"
                  className="flex gap-0.5 mb-0.5 cursor-pointer"
                >
                  Telefono de contacto:
                </label>
                <input
                  type="tel"
                  id="message_phone"
                  name="message_phone"
                  value={form.message_phone}
                  onChange={handleChange}
                  className="input border-foreground border-opacity-50 border-1 rounded-md p-2 text-foreground cursor-pointer"
                />
              </div>

              {
                <div className="flex flex-col">
                  <label htmlFor="category_id" className="flex gap-0.5 mb-0.5">
                    <span className="text-red-500">*</span>Seleccione una
                    categoria:
                  </label>
                  <Select
                    value={
                      form.category_id === 0 ? "" : form.category_id.toString()
                    }
                    onValueChange={(value) =>
                      handleValueChange("category_id", value)
                    }
                  >
                    <SelectTrigger className="input w-full min-h-[40px] border-foreground  border-1 rounded-md p-2 text-foreground cursor-pointer">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categorías</SelectLabel>

                        {categories
                          .filter((category) => category.category_status === 1)
                          .map((category) => (
                            <SelectItem
                              key={category.category_id}
                              value={category.category_id.toString()}
                            >
                              {category.category_name}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              }

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="flex gap-0.5 mb-0.5 cursor-pointer"
                >
                  <span className="text-red-500">*</span>Mensaje:
                </label>
                <textarea
                  name="message_content"
                  id="message"
                  value={form.message_content}
                  onChange={handleChange}
                  className="input border-foreground border-opacity-50 border-1 rounded-md p-2 text-foreground cursor-pointer resize-none"
                  rows={5}
                  required
                />
              </div>

              <div className="flex md:flex-row flex-col items-center justify-center gap-1">
                <Button
                  disabled={loading}
                  type="submit"
                  variant={"disrruptive"}
                  className="md:w-1/2 w-full"
                >
                  {loading ? "Enviando..." : "Enviar"}
                </Button>

                <Button
                  variant={"outline"}
                  className="md:w-1/2 w-full"
                  type="reset"
                  onClick={handleReset}
                >
                  Limpiar
                </Button>
              </div>

              {loading && (
                <div className="flex justify-center">
                  <Spinner />
                </div>
              )}
            </form>
          </>
        </div>
        <ShapeRight />
      </GlassCard>
      <Toaster richColors position="top-right" />
    </>
  );
}

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  "/assets/step-1.jpg",
  "/assets/step-2.jpg",
  "/assets/step-3.jpg",
  "/assets/step-4.jpg",
];

interface InstallInstructionsModalProps {
  onClose: () => void;
}

export const InstallInstructionsModal = ({
  onClose,
}: InstallInstructionsModalProps) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="w-[80%]">
        <DialogHeader>
          <DialogTitle>Instalar FastTrack en iOS/macOS</DialogTitle>
          <DialogClose className="cursor-pointer" />
        </DialogHeader>
        <ol className="list-decimal ml-6 mb-4">
          <li>Toca el botón Compartir 📤</li>
          <li>Selecciona Añadir a pantalla de inicio 📱</li>
          <li>Elegi Añadir a pantalla de inicio ➕</li>
          <li>
            Listo, ya podes tener tu aplicación en tu pantalla de inicio ✅
          </li>
        </ol>
        <Carousel>
          <CarouselContent>
            {images.map((src, idx) => (
              <CarouselItem key={idx}>
                <Image
                  src={src}
                  alt={`Step ${idx + 1}`}
                  width={150}
                  height={200}
                  className="rounded-lg mx-auto my-5 max-h-70 md:max-h-200 w-auto size-full object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};

"use client";
import InstallIcon from "./InstallIcon";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

// Global type para iOS
declare global {
  interface Navigator {
    standalone?: boolean; // solo iOS
  }
}

export const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const isIOSStandalone = () => navigator.standalone === true;

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      isIOSStandalone();

    if (isStandalone) return;

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault(); // evita que el prompt se muestre automáticamente
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("Install outcome:", outcome);
    setShowButton(false);
    setDeferredPrompt(null);
  };

  if (!showButton) return null;

  return <InstallIcon onClick={handleInstallClick} />;
};

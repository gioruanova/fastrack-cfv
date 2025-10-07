"use client";

import { useEffect, useState } from "react";
import InstallIcon from "./InstallIcon";
import { InstallInstructionsModal } from "./InstallInstructionsModal";
import { useSearchParams } from "next/navigation";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

// Global type para iOS
declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

export const InstallButton = () => {
  const searchParams = useSearchParams();

  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [isIOS, setIsIOS] = useState(false);
  const [isMacSafari, setIsMacSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(ua));
    setIsMacSafari(
      /macintosh/.test(ua) &&
        /safari/.test(ua) &&
        !/chrome|chromium|edg/.test(ua)
    );

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
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
  }, []);

  // --- FORZAR MODAL PARA TEST ---
  useEffect(() => {
    const forceInstall = searchParams.get("forceInstall");
    if (forceInstall === "ios") {
      setShowModal(true);
      setShowButton(false);
    }
  }, [searchParams]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Android / Windows / Chrome macOS
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log("Install outcome:", outcome);
      setShowButton(false);
      setDeferredPrompt(null);
    } else if (isIOS || isMacSafari) {
      // iOS / Safari macOS: mostrar modal
      setShowModal(true);
    }
  };

  if (!showButton && !showModal) return null;

  return (
    <>
      {showButton && <InstallIcon onClick={handleInstallClick} />}
      {showModal && (
        <InstallInstructionsModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

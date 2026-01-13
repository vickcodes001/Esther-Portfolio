"use client";

import { createContext, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import type { LenisOptions } from "@studio-freight/lenis";

// Export context so it can be used by the hook
export const LenisContext = createContext<Lenis | null>(null);

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      } satisfies LenisOptions);

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
}

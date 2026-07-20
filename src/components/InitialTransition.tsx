"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function InitialTransition() {
  const pathname = usePathname();

  useEffect(() => {
    const overlay = document.getElementById("page-transition-overlay");

    const timer = setTimeout(() => {
      overlay?.classList.remove("active");
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

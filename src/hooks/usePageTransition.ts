"use client";

import { useRouter } from "next/navigation";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function usePageTransition() {
  const router = useRouter();

  const navigate = async (href: string) => {
    const overlay = document.getElementById("page-transition-overlay");

    overlay?.classList.add("active");

    await sleep(500);

    router.push(href);
  };

  return { navigate };
}

"use client";

import { usePageTransition } from "@/hooks/usePageTransition";
import { TTransitionLink } from "@/utils/types";
import Link from "next/link";
import React from "react";

const TransitionLink = ({
  href,
  children,
  handleClose,
  className,
}: TTransitionLink) => {
  const { navigate } = usePageTransition();
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleClose();
    await navigate(href);
  };
  return (
    <Link onClick={handleClick} href={href} className={className}>
      {children}
    </Link>
  );
};
export default TransitionLink;

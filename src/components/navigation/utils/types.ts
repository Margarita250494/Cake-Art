import React from 'react'

export type NavigationType = {
  id: string;
  link?: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  image?: string
}

export type TTransitionLink = {
  children: React.ReactNode;
  href: string;
  handleClose: () => void;
  className?: string;
};
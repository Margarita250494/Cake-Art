import InitialTransition from '@/components/InitialTransition'
import Header from '@/components/navigation/Header'
import type { Metadata } from "next";
import { Cormorant_Infant } from "next/font/google";
import "./globals.css";
import React from 'react'

const cormorantSans = Cormorant_Infant({
  variable: "--font-sans",
  subsets: ["latin"]

});


export const metadata: Metadata = {
  title: "Valerii Lindstrem: Cake Art",
  description: "Valerii Lindstrem: Cake art"
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${cormorantSans.variable} antialiased flex flex-col min-h-screen`}
    >
    <div
      id="page-transition-overlay"
      className="active"
    />
    <InitialTransition />
    <Header />
    {children}
    </body>
    </html>
  );
}

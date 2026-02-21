'use client'

import MenuButton from '@/components/buttons/MenuButton'
import MainNavigation from '@/components/navigation/MainNavigation'
import TransitionLink from '@/components/navigation/TransitionLink'
import clsx from 'clsx'
import { useState } from 'react'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <header className="w-full p-4 items-center flex justify-between gap-2 z-2">
        <TransitionLink
          handleClose={() => {
          }}
          href="/"
          className="font-sans text-[16px] md:text-[18px] tracking-[1px]"
        >Valerii Lindstrem</TransitionLink>
        <MenuButton
          isClicked={isMenuOpen}
          handelClick={handleMenuClick}
        />
      </header>

      <div
        className={clsx("fixed w-full h-full duration-500 z-9999999" +
          " inset-0" +
          " bg-background", isMenuOpen ? 'scale-100 opacity-100' : 'opacity-0 scale-0 pointer-events-none')}
      >
        <MainNavigation
          handelClick={handleMenuClick}
        />
      </div>
    </>

  );
};
export default Header;

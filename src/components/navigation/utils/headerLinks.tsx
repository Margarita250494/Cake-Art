import { Email, Instagram, Telegram, Whatsapp } from '@/components/icons'
import { NavigationType } from '@/components/navigation/utils/types'

export const headerLinks: NavigationType[] = [
  {
    id: 'instagram',
    href: 'https://www.instagram.com/valerii_lindstrem?igsh=MWk2Ync2azVrd255aw==',
    icon:
      <Instagram className="w-5 h-5 duration-500 text-footer hover:text-link" />
  },
  {
    id: 'telegram',
    href: 'https://t.me/valerii_lindstrem',
    icon:
      <Telegram className="w-5 h-5 duration-500 text-footer hover:text-link" />
  },
  {
    id: 'whatsApp',
    href: 'https://wa.me/79256626074',
    icon:
      <Whatsapp className="w-5 h-5 duration-500 text-footer hover:text-link" />
  },
  {
    id: 'email',
    href: 'mailto:lindstremvr@gmail.com',
    icon: <Email className="w-5 h-5 duration-500 text-footer hover:text-link" />
  }

]
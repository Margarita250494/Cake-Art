import { NavigationType } from '@/components/navigation/utils/types'

export const mainNavigationLinks: NavigationType[] = [
  {
    id: 'home',
    link: 'Home',
    href: '/',
    description: 'Click to start at the beginning',
    image: '/background.jpg'
  },
  {
    id: 'about',
    link: 'About',
    href: '/about',
    description: 'Learn about me',
    image: '/about.png'
  },
  {
    id: 'shop',
    link: 'Shop',
    href: '/shop',
    description: 'Find here some delicious',
    image: '/cakes/3-1.jpg'
  },
  {
    id: 'services',
    link: 'Services',
    href: '/services',
    description: 'Explain what you can more order',
    image: '/services/services_3.JPG'
  }

]
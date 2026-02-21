import { Close } from '@/components/icons'
import TransitionLink from '@/components/navigation/TransitionLink'
import { headerLinks } from '@/components/navigation/utils/headerLinks'
import {
  mainNavigationLinks
} from '@/components/navigation/utils/mainNavigationLinks'
import Image from 'next/image'


const MainNavigation = ({handelClick}: {
  handelClick: () => void;
}) => {
  return (
    <nav className="p-4  w-full h-full flex flex-col ">
      <div className="w-full flex justify-end">
        <button
          type="button"
          onClick={handelClick}
          className="w-7.5 h-7.5 close-button cursor-pointer"
        >
          <Close
            className="w-7.5 h-7.5 "
          />
        </button>

      </div>
      <div className="w-full h-full flex flex-col gap-14 text-footer items-center justify-center">
        <ul className="flex flex-col text-footer justify-center gap-10">
          {mainNavigationLinks.map(({id, link, href, description, image}) => (
            <li
              key={id}
              className="text-[30px] cursor-pointer sm:text-[50px] flex items-center gap-14 border-b-[0.5px] border-gray pb-3 group duration-500"
            >
              <div className="flex flex-col w-full max-w-66 duration-500 scale-100 group-hover:scale-[1.04]">
                <TransitionLink
                  handleClose={handelClick}
                  href={href}
                >{link}</TransitionLink>
                <p className="text-[16px] sm:text-[20px]">{description}</p>
              </div>
              {image && (
                <Image
                  src={image}
                  width={200}
                  height={100}
                  alt="cake"
                  className="hidden sm:block w-50 h-25 object-cover duration-500 opacity-0 scale-0 group-hover:scale-[1.5] group-hover:opacity-100"
                />)}
            </li>

          ))}
        </ul>
        <ul className="flex gap-4 items-center">
          {headerLinks.map(({id, icon, href}) => (
            <li key={id}>
              <a href={href}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>

    </nav>

  )
};
export default MainNavigation;

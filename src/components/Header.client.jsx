import {useEffect, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {Image} from '@shopify/hydrogen';

import CartToggle from './CartToggle.client';
import {useCartUI} from './CartUIProvider.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';

import Replete_title from '../images/Replete_title.png';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

  return (
    <header className="h-20 lg:h-24" role="banner">
      <div
        className={`fixed z-20 h-20 lg:h-24 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div
          className="h-full flex lg:flex-col place-content-between"
          style={{
            paddingRight: isCartOpen ? scrollbarWidth : 0,
          }}
        >
          <div className="text-center w-full flex justify-between items-center">
            <Navigation storeName={storeName} />
            <MobileNavigation
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              <Image
                src={Replete_title}
                width={100}
                height={100}
                className="image"
              />
            </Link>
            <CartToggle
              handleClick={() => {
                if (isMobileNavOpen) setIsMobileNavOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@/components/common/Drawer';
import Search from '@/components/common/Search';
import MobileSubMenu from '@/components/navigation/MobileSubMenu';
import HamburgerMenuIcon from '@/assets/icons/hamburgerMenu.svg?react';
import WayfairTextLogo from '@/assets/icons/wayfairTextLogo.svg?react';
import Signin from '@/assets/icons/signin.svg?react';
import Cart from '@/assets/icons/cart.svg?react';

function GlobalNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function mobileSideMenuClose() {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <Drawer isOpen={isMobileMenuOpen} onClose={mobileSideMenuClose}>
        <MobileSubMenu onClose={mobileSideMenuClose} />
      </Drawer>
      <div>
        <div className="flex justify-between items-center px-6">
          <button
            className="w-10 h-10 flex justify-center items-center text-black hover:text-purple-100 desktop:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <div className="w-6 h-6 tablet:w-7.5 tablet:h-7.5">
              <HamburgerMenuIcon className="stroke-[1.5] tablet:stroke-0.5" />
            </div>
          </button>
          <div>
            <Link to="/" className="w-[145px] h-[45px] block">
              <WayfairTextLogo className="w-full h-full" />
            </Link>
          </div>

          {/* desktop search ui */}
          <div className="hidden desktop:block flex-1 m-3">
            <Search />
          </div>

          <div className="flex gap-1">
            <Link 
              to="/signin"
              className="flex justify-center items-center gap-1 text-black hover:text-purple-100"
              aria-label="Sign in to your account"
            >
              <span className="block desktop:hidden">Sign In</span>
                <div className="w-6 h-6 tablet:w-7.5 tablet:h-7.5">
                  <Signin className="stroke-[0.5]" />
                </div>
              <span className="hidden desktop:block">Sign In</span>
            </Link>
            <button 
              className="flex justify-center items-center gap-1 p-2 text-black hover:text-purple-100"
              type="button"
              aria-label="View shopping cart"
            >
              <div className="w-6 h-6 tablet:w-7.5 tablet:h-7.5">
                <Cart className="stroke-[0.5]" />
              </div>
              <span className="hidden desktop:block">Cart</span>
            </button>
          </div>
        </div>

        {/* Search input in mobile viewport */}
        <div className="flex items-center px-6 my-3 desktop:hidden">
          <Search />
        </div>
      </div>
    </>
  );
}

export default GlobalNav;

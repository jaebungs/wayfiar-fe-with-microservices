/**
 * 
 * 1.Sub menus become side drawer menu
 * 2. structure changes but have the same components as the desktop, except the hamburger menu icon
 * 3. 
 */
import SideDrawerMenu from "./SideDrawerMenu"
import HamburgerMenuIcon from "@/assets/icons/hamburgerMenu.svg?react"
import WayfairTextLogo from "@/assets/icons/wayfairTextLogo.svg?react"
import Signin from "@/assets/icons/signin.svg?react"
import Cart from "@/assets/icons/cart.svg?react"

function GlobalNav() {
  return (
    <div>
        <SideDrawerMenu />
        <div className="flex justify-between items-center">
            <button className="w-10 h-10 flex justify-center items-center text-black hover:text-purple-100">
                <div className="w-6 h-6 tablet:w-7.5 tablet:h-7.5">
                    <HamburgerMenuIcon className="stroke-[1.5] tablet:stroke-0.5" />
                </div>
            </button>
            <div>
                <a href="/" className="w-[145px] h-[45px] block">
                    <WayfairTextLogo className="w-full h-full" />
                </a>
            </div>

            <div className="flex gap-1">
                <button className=" desktop:hidden">
                    Flag
                </button>
                
                <button className="flex justify-center items-center gap-1 text-black hover:text-purple-100">
                    Sign In
                    <div className="w-6 h-6 tablet:w-7.5 tablet:h-7.5">
                        <Signin className="stroke-[0.5]"/>
                    </div>
                </button>
                <button className="flex justify-center items-center gap-1 p-2 text-black hover:text-purple-100">
                    <div className="w-6 h-6 tablet:w-7.5 tablet:h-7.5">
                        <Cart className="stroke-[0.5]"/>
                    </div>
                </button>
            </div>
        </div>

    </div>
  )
}

export default GlobalNav
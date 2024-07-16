import {BiSearch} from "react-icons/bi";
import {BiBell as Bell} from "react-icons/bi";
import {FaBars as Bars} from "react-icons/fa6";
import {useState} from "react";

const Nav = () => {
    const links = ["Home", "Genre", "Country", "Movies", "Series", "Animation"]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div id="navigation" className="h-[80px] lg:flex flex-center">
                <div className="container mx-auto">
                    <div className="navigation-container flex-center">
                        <nav className="flex-between md:flex-center gap-6">
                            <div className=" hidden left md:flex-center gap-6">
                                {
                                    links.slice(0, 3).map((item, idx) => {
                                        return (
                                            <a key={idx} href="#"
                                               className={idx === 0 ? 'nav-item active' : 'nav-item'}>
                                                {item}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            <div
                                className="flex-center px-4 py-2 rounded-[25px] bg-white w-[300px] xl:w-[416] lg:w-[350px] md:w-[100px]">
                                <input type="text" placeholder="Search Movies..."
                                       className="outline-0 border-o text-black w-full bg-transparent"/>
                                <BiSearch fill="#000" className="text-[20px] ml-[10px]"/>
                            </div>
                            <div className="hidden right md:flex-center gap-6">
                                {
                                    links.slice(3, 6).map((item, idx) => {
                                        return (
                                            <a key={idx} href="#" className="nav-item">
                                                {item}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            <a href="" className="hidden sm:flex-center nav-item">
                                Login/Signup
                                <Bell className="ml-2"/>
                            </a>
                            <div className="visible ms-12 md:hidden menu-toggler cursor-pointer ">
                                <Bars/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="opacity-0 transition-all
             mobile-nav z-[99] bg-black absolute top-[80px] right-0 h-full w-full md:hidden">
                <div className="navigation h-full flex flex-col items-center justify-center space-y-16">
                    {
                        links.map((link, idx) => (
                            <a
                                key={idx}
                                className="text-2xl"
                            >{link}
                            </a>
                        ))

                    }
                    <a href="" className="btn btn-primary hidden md:flex-center nav-item">
                        Login/Signup
                        <Bell className="ml-2"/>
                    </a>
                </div>
            </div>
        </>
    )
}


export default Nav;
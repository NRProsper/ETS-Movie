import {BiBell as Bell, BiSearch} from "react-icons/bi";
import {FaBars as Bars} from "react-icons/fa6";
import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

const Nav = () => {
    const links = ["home", "genre", "country", "movies", "series", "animation"]

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden")
        }else {
            document.body.classList.remove("overflow-hidden")
        }

    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="navigation" className={`h-[80px] lg:flex flex-center fixed w-full top-0 z-[999] transition-all duration-300 ${
                scrolled ? 'bg-black bg-opacity-70 backdrop-blur-md' : ''
            }`}>
                <div className="container mx-auto">
                    <div className="navigation-container flex-center relative z-10">
                        <nav className="flex-between md:flex-center gap-6">
                            <div className=" hidden left md:flex-center gap-6">
                                {
                                    links.slice(0, 3).map((item, idx) => {
                                        return (
                                            <NavLink key={idx}
                                                     to={item==="home"?"":item}
                                                     className={({isActive}) =>
                                                     isActive
                                                         ?'nav-item active':'nav-item'
                                            }
                                               >
                                                {item}
                                            </NavLink>
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
                                            <NavLink key={idx} to={item} className="nav-item">
                                                {item}
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                            <a href="" className="hidden sm:flex-center nav-item">
                                Login/Signup
                                <Bell className="ml-2"/>
                            </a>
                            <div onClick={() => setIsOpen(!isOpen)}  className="visible ms-12 md:hidden menu-toggler cursor-pointer ">
                                <Bars/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div id="mobile-nav" className={`transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} z-[99] bg-black absolute top-[80px] right-0 h-full w-full md:hidden`}>
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
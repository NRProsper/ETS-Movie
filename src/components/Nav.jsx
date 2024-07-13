import {BiSearch} from "react-icons/bi";
import {BiBell as Bell} from "react-icons/bi";

const Nav = () => {
    const links = ["Home", "Genre", "Country", "Movies", "Series", "Animation"]
    return (
        <div id="navigation" className="h-[80px] lg:flex flex-center">
            <div className="container mx-auto">
                <div className="navigation-container flex-center">
                    <nav className="flex-center gap-6">
                        {
                            links.slice(0, 3).map((item, idx) => {
                                return (
                                    <a key={idx} href="#" className={idx===0 ? 'nav-item active' : 'nav-item'}>
                                        {item}
                                    </a>
                                )
                            })
                        }
                        <div className="flex-center px-4 py-2 rounded-[25px] bg-white w-[300px] lg:w-[416px]">
                            <input type="text" placeholder="Search Movies..." className="outline-0 border-o text-black w-full bg-transparent"/>
                            <BiSearch fill="#000" className="text-[20px] ml-[10px]" />
                        </div>
                        {
                            links.slice(3, 6).map((item, idx) => {
                                return (
                                    <a key={idx} href="#" className="nav-item">
                                        {item}
                                    </a>
                                )
                            })
                        }
                        <a href="" className="flex-center nav-item">
                            Login/Signup
                            <Bell className="ml-2" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Nav;
import { ChevronDown, ChevronUp, List, Menu, X, MessageCircle, Shield} from "lucide-react";
import { useState } from "react";
import App from "./App";

function Navbar() {
    const [collapse, setCollapse] = useState(false)
    const [dropDown, setdropDown] = useState(false)
    const [ddActive, setddActive] = useState(null)
    const links = ["Home", "About", "Service", "Contact"]
    const dropDownLinks = ["Link", "Another link", "A third link"]
    return (
        <body className="bg-gray-100">
            <nav className="bg-gray-900 text-white w-full fixed z-50 left-0 top-0">
                <div className="px-8 py-4 flex justify-between items-center">
                    <a href={App} className="text-2xl">Logo</a>

                    {/* COllpase Btn */}
                    <button
                        className="md:hidden"
                        onClick={() => setCollapse(!collapse)}>
                        {
                            collapse ? <X /> : <Menu />
                        }
                    </button>

                    {/* Desktop Link */}
                    <ul className="hidden md:flex space-x-5 items-center justify-center">
                        {links.map((link, index) => (
                            <li><a href="" className="">{link}</a></li>
                        ))}
                        <li><a
                            onClick={() => setdropDown(!dropDown)}
                            className="inline-flex items-center">Dropdown {dropDown ? <ChevronUp size={20} className="mt-0.5" /> : <ChevronDown size={20} className="mt-0.75" />}</a>
                            {dropDown && (
                                <ul className="absolute bg-gray-200 border border-gray-400 w-fit min-w-60 rounded-xl py-2 mt-3 right-6 text-md">{dropDownLinks.map((dropDownLink, index) => (
                                    <li
                                        key={index}><a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setddActive(ddActive === index ? null : index)
                                            }}
                                            className={`top-3 text-black block px-6 py-2  ${ddActive === index ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}>{dropDownLink}</a></li>
                                ))}</ul>
                            )}
                        </li>
                    </ul>
                </div>
                {collapse && (

                    <ul className="space-y-6 p-8 py-5 text-lg md:hidden">
                        {links.map((link, index) => (
                            <li>
                                <a href="" className="text-gray-400  hover:text-white">{link}</a>
                            </li>
                        ))}
                        <div className="text-white flex justify-center gap-3 mt-5">
                            <MessageCircle />
                            <Shield />
                        </div>
                    </ul>
                )}
            </nav>
        </body>
    )
}

export default Navbar;
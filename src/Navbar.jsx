import { Menu, MessageCircle, Shield, X } from "lucide-react";
import App from "./App";
import { useState } from "react";

function Navbar() {
    const [Collapse, setCollapse] = useState(false)
    const [CollapseBtn, setCollapseBtn] = useState(false)

    return (
        <nav className="bg-black inter-400 w-full fixed z-40 top-0 left-0">
            <div className="flex justify-between items-center text-gray-300 px-10 w-full min-h-20">
                <a href={App} className="text-2xl">Gerald</a>
                <button
                    onClick={() => {
                        setCollapse(!Collapse),
                            setCollapseBtn(!CollapseBtn)
                    }}
                    className="block text-gray-300 md:hidden">
                    {CollapseBtn ? <X /> : <Menu />}
                </button>

                <ul className="hidden md:flex space-x-8">

                    <li><a href="#" className="block text-gray-300 text-lg">Home</a></li>
                    <li><a href="#" className="block text-gray-300 text-lg">About</a></li>
                    <li><a href="#" className="block text-gray-300 text-lg">Services</a></li>
                    <li><a href="#" className="block text-gray-300 text-lg">Contact</a></li>
                </ul>

            </div>
            {
                Collapse && (
                    <div className="w-full h-screen">
                        <ul className="px-6 space-y-3 pb-5 mx-36 mt-5">
                            <li><a href="#" className="block text-gray-300 text-lg border-b py-3">Home</a></li>
                            <li><a href="#" className="block text-gray-300 text-lg border-b py-3">About</a></li>
                            <li><a href="#" className="block text-gray-300 text-lg border-b py-3">Services</a></li>
                            <li><a href="#" className="block text-gray-300 text-lg border-b py-3">Contact</a></li>
                            <li><input
                                className="bg-white p-3 rounded-md w-full mt-5"
                                placeholder="Search"
                                type="text" /></li>
                            <li>
                                <div className="text-white flex justify-center gap-3 mt-5">
                                    <MessageCircle />
                                    <Shield />
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;
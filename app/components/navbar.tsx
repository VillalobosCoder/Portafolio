'use client';

import { navItemsEs } from "../constants/navbar-data";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
    const [menuDrawerIsOpen, setMenuDrawerIsOpen] = useState(false);
    const handleNavbar = () => {
        setMenuDrawerIsOpen(!menuDrawerIsOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-violet-700/80s">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItemsEs.map((item, index) => (
                            <li key={index}>
                                <a href={item.link}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleNavbar} className="text-2xl">
                            {menuDrawerIsOpen ? <FaXmark color="#000" size={20} /> : <FaBars color="#000" size={20} />}
                        </button>
                    </div>
                </div>
                {menuDrawerIsOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItemsEs.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
};

export default Navbar;
'use client';

import { navItemsEs } from "../constants/navbar-data";
import { FaBars, FaXmark, FaMoon, FaSun } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Navbar() {
    const [menuDrawerIsOpen, setMenuDrawerIsOpen] = useState(false);
    const handleNavbar = () => { setMenuDrawerIsOpen(!menuDrawerIsOpen); }
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if (!isDarkMode) {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
        }
    }, [isDarkMode]);

    const handleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
        }
    }

    useEffect(() => {
        const sections = navItemsEs.map(item => document.querySelector(item.link));
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, [navItemsEs]);

    return (
        <nav className="shadow-lg shadow-[#d6303a]/30 rounded-xl sticky top-4 z-50 py-3 backdrop-blur-lg w-[70%] max-w-lg mx-auto animate-shadow-pulse-bottom border border-[#8e1e23]/20">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <ul className="hidden lg:flex space-x-12">
                        {navItemsEs.map((item, index) => (
                            <li key={index} className={`hover:transition-all duration-500 transform ${activeSection === item.link.substring(1) ? 'scale-110' : ''} ${activeSection === item.link.substring(1) ? 'text-persona-red' : 'hover:text-persona-red'}`}>
                                <a href={item.link} className="font-semibold">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className={`cursor-pointer text-xl hover:transition-all duration-500 transform hover:scale-110 ${isDarkMode ? 'hover:text-[#ffa8a8]' : 'hover:text-[#8e1e23]'} `} onClick={handleTheme}>
                            {isDarkMode ? <FaSun className="text-[#ffa8a8]" /> : <FaMoon className="text-[#8e1e23]" />}
                        </li>
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleNavbar} className="text-2xl text-persona-red">
                            {menuDrawerIsOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
                {menuDrawerIsOpen && (
                    <div className={`fixed right-0 z-20 rounded-b-xl backdrop-blur-lg w-full p-12 flex flex-col justify-center items-center lg:hidden ${isDarkMode ? 'bg-gradient-to-b from-[#0a0a0a] to-[#8e1e23]' : 'bg-gradient-to-b from-[#fefefe] to-[#ffd3d3]'}`}>
                        <ul>
                            {navItemsEs.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.link} className={`font-semibold ${activeSection === item.link.substring(1) ? 'text-[#ffa8a8]' : 'text-white'}`}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li className="cursor-pointer text-xl justify-items-center py-4" onClick={handleTheme}>
                                {isDarkMode ? <FaSun className="text-[#ffa8a8]" /> : <FaMoon className="text-[#8e1e23]" />}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
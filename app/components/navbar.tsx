'use client';

import { navItemsEs } from "../constants/navbar-data";
import { FaBars, FaXmark, FaMoon, FaLanguage, FaSun } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/lenguage-context";

function Navbar() {
    const [menuDrawerIsOpen, setMenuDrawerIsOpen] = useState(false);
    const handleNavbar = () => { setMenuDrawerIsOpen(!menuDrawerIsOpen); }
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const { language, toggleLanguage } = useLanguage();

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
        <nav className="shadow-lg shadow-violet-300 rounded-xl sticky top-4 z-50 py-3 backdrop-blur-lg w-[70%] max-w-lg mx-auto animate-shadow-pulse-bottom">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">
                    <ul className="hidden lg:flex space-x-12">
                        {navItemsEs.map((item, index) => (
                            <li key={index} className={`hover:transition-all duration-500 transform ${activeSection === item.link.substring(1) ? 'scale-110' : ''} hover:text-violet-600`}>
                                <a href={item.link} className="font-semibold">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className={`cursor-pointer text-xl hover:transition-all duration-500 transform hover:scale-110 ${isDarkMode ? 'hover:text-yellow-200' : 'hover:text-blue-800'} `} onClick={handleTheme}>
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </li>
                        {/*<li className="cursor-pointer text-xl hover:transition-all duration-500 transform hover:scale-110 hover:text-violet-600" onClick={toggleLanguage}>
                            <FaLanguage/>
                        </li>*/}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleNavbar} className="text-2xl">
                            {menuDrawerIsOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
                {menuDrawerIsOpen && (
                    <div className={`fixed right-0 z-20 rounded-b-xl backdrop-blur-lg w-full p-12 flex flex-col justify-center items-center lg:hidden ${isDarkMode ? 'bg-gradient-to-b from-[#0a0a0a] to-[#6e3792]' : 'bg-gradient-to-b from-[#fefefe] to-[#d6ccff]'}`}>
                        <ul>
                            {navItemsEs.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))}
                            <li className="cursor-pointer text-xl justify-items-center py-4" onClick={handleTheme}>
                                {isDarkMode ? <FaSun /> : <FaMoon />}
                            </li>
                        </ul>
                        
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
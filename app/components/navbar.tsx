"use client";

import { navItemsEs } from "../constants/navbar-data";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

function Navbar() {
  const [menuDrawerIsOpen, setMenuDrawerIsOpen] = useState(false);
  const handleNavbar = () => {
    setMenuDrawerIsOpen(!menuDrawerIsOpen);
  };
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isDarkMode) {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  }, [isDarkMode]);

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
    }
  };

  useEffect(() => {
    const sections = navItemsEs.map((item) =>
      document.querySelector(item.link)
    );
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItemsEs]);

  return (
    <nav className="sticky top-4 z-50 py-3 backdrop-blur-sm w-[90%] max-w-3xl mx-auto rounded-lg shadow-sm bg-background/80 border border-[var(--border)]">
      <div className="container px-6 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="bg-white rounded-full p-1 text-base tracking-tight text-primary hidden md:block">
            <Image
              src="/Loguito.ico"
              alt="Logo"
              width={23}
              height={23}
              className="object-contain"
            />
          </div>
          <ul className="hidden md:flex space-x-8">
            {navItemsEs.map((item, index) => (
              <li
                key={index}
                className={`hover:transition-all duration-500 transform ${
                  activeSection === item.link.substring(1) ? "scale-110" : ""
                } ${
                  activeSection === item.link.substring(1)
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                <a href={item.link} className="font-semibold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="hover:text-primary transition-colors"
            onClick={handleTheme}
          >
            {isDarkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>
           <div className="md:hidden flex items-center gap-2">
            <button onClick={handleNavbar}>
              {menuDrawerIsOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuDrawerIsOpen && (
          <div className="fixed left-0 top-12 z-20 backdrop-blur-md w-full p-6 flex flex-col md:hidden bg-background rounded-md">
            <ul className="space-y-4">
              {navItemsEs.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.link.substring(1)
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

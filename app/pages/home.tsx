"use client";

import { useEffect, useState } from "react";
import { contactData } from "../constants/contact-data";
import { File } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const openPdf = () => {
    window.open("./docs/CV.pdf", "_blank");
  };

  useEffect(() => {
    setIsLightTheme(document.documentElement.classList.contains("light-theme"));
    const observer = new MutationObserver(() => {
      setIsLightTheme(
        document.documentElement.classList.contains("light-theme")
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen mt-6"
      data-aos="fade-up"
      id="aboutme"
    >
      <div className="w-full lg:max-w-4xl text-center px-4">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Alejandro <span className="text-primary">Villalobos</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground font-light">
            Ingeniero de Software / Desarrollador FullStack
          </p>
        </div>

        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg leading-relaxed">
            Ingeniero en sistemas computacionales especializado en{" "}
            <span className="text-foreground font-semibold">ingeniería de software</span>, con más de dos años de experiencia en{" "}
            <span className="text-primary font-semibold">desarrollo fullstack</span>.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {contactData.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              className="bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 px-5 transition-all duration-300 rounded-lg font-medium text-sm flex items-center gap-2 hover:shadow-md hover:scale-110"
            >
              <contact.icon size={20} />
              <span>{contact.title}</span>
            </a>
          ))}
          <button
            onClick={openPdf}
            className="bg-muted hover:bg-muted/80 text-foreground py-2.5 px-5 transition-all duration-300 rounded-lg font-medium text-sm flex items-center gap-2 hover:shadow-md hover:scale-110"
          >
            <File size={20} />
            <span>CV</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

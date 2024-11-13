'use client'

import { useEffect, useState } from "react";
import { contactData } from "../constants/contact-data";
import { FaFileImport } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../context/lenguage-context";

function Home() {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const { translations } = useLanguage();

    const openPdf = () => {
        window.open('/docs/CV.pdf', '_blank');
    }

    useEffect(() => {
        setIsLightTheme(document.documentElement.classList.contains('light-theme'));
        const observer = new MutationObserver(() => { setIsLightTheme(document.documentElement.classList.contains('light-theme')); });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        AOS.init({duration: 500});
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen mt-6" data-aos="fade-up" id="aboutme">
            <div className="w-full lg:max-w-4xl text-center">
                <div className="inline-block">
                    <h1
                        className="text-4xl sm:text-6xl lg:text-7xl tracking-wide bg-gradient-to-r from-[#7953cd] to-[#c89eea] text-transparent bg-clip-text p-2 whitespace-nowrap overflow-hidden titleShine"
                    >
                        Alejandro Villalobos
                    </h1>
                </div>

                <p className="my-5 text-center">
                    {translations.description}
                </p>
                <div className="flex flex-wrap justify-center my-10">
                    {contactData.map((contact, index) => (
                        <a key={index} href={contact.link} className={`bg-gradient-to-r ${isLightTheme ? 'from-[#b997cf] to-[#ddc8ee] hover:from-[#c8abdb] hover:to-[#e3cef3]' : 'from-[#6e3792] to-[#c89eea] hover:from-[#8844b6] hover:to-[#d5b8ec]'}  py-1 px-4 mx-3 rounded-full flex justify-center items-center gap-2 mt-5 md:mt-0`}>
                            <contact.icon size={20} />
                            <p className="text-clip">{contact.title}</p>
                        </a>
                    ))}
                    <a href={''} onClick={openPdf} className={`bg-gradient-to-r ${isLightTheme ? 'from-[#b997cf] to-[#ddc8ee] hover:from-[#c8abdb] hover:to-[#e3cef3]' : 'from-[#6e3792] to-[#c89eea] hover:from-[#8844b6] hover:to-[#d5b8ec]'}  py-1 px-4 mx-3 rounded-full flex justify-center items-center gap-2 mt-5 md:mt-0`}>
                        <FaFileImport size={20} />
                        <p className="text-clip">CV</p>
                    </a>
                </div>
            </div>
        </div>
    );

};

export default Home;
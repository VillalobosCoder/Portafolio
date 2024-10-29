'use client'

import Image from "next/image";
import { projectsData } from "../constants/projects-data";
import { FaGithub, FaLink, FaScrewdriverWrench } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {

    useEffect(() => {
        AOS.init({duration: 500});
      }, []);
      
    return (
        <div className="lg:px-0 mt-12 lg:mt-40" id="projects">
            <div className="flex justify-center items-center">
                <FaScrewdriverWrench className="text-3xl text-center mr-3" />
                <h2 className="text-3xl text-center font-bold">Proyectos</h2>
            </div>

            <div className="flex flex-col items-center mt-12 ">
                {projectsData.map((item, index) => (
                    <div key={index} className="w-full max-w-4xl mb-5 p-5 rounded-lg hover:animate-shadow-fix transition-all"  data-aos="fade-up">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start">
                            <Image src={item.image} alt={item.title} width={400} height={300} className="rounded-lg w-full lg:w-1/2 mb-4 lg:mb-0" />
                            <div className="lg:ml-8 w-full lg:w-1/2 text-center lg:text-left">
                                <div className="flex justify-between">
                                    <h5 className="text-xl font-semibold">{item.title}</h5>
                                    <div className="flex gap-5 mr-2">
                                        <a href={item.linkGit}><FaGithub className="text-2xl cursor-pointer hover:transition-all duration-500 transform hover:scale-110" /></a>
                                        {item.dev ? <a href={item.likDep}><FaLink className="text-2xl cursor-pointer hover:transition-all duration-500 transform hover:scale-110" /></a> : null}
                                    </div>
                                </div>
                                <p className="mt-2 text-start">{item.description}</p>
                                <ul className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                                    {item.tecs.map((tec, index) => (
                                        <li key={index} className={`flex items-center gap-2 px-2 py-1 rounded-full ${tec.classL} text-white text-xs`}>
                                            <span className="text-lg">{tec.icon({})}</span>
                                            <span>{tec.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Projects;
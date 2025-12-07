"use client";

import Image from "next/image";
import { projectsData } from "../constants/projects-data";
import { useEffect } from "react";
import { Link, Github, Pickaxe } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="lg:px-0 mt-12 lg:mt-40" id="projects">
      <div className="flex justify-center items-center">
        <Pickaxe className="text-3xl text-center mr-3" />
        <h2 className="text-3xl text-center font-bold">Proyectos</h2>
      </div>

      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col items-center w-full">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-3xl"
              data-aos="fade-up"
            >
              <div className="mb-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-md transform transition-all duration-700 overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full lg:w-1/2 mb-4 lg:mb-0"
                  />
                  <div className="p-6 lg:w-3/5 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="flex gap-5 mr-2">
                        <a href={item.linkGit} className="transition-colors">
                          <Github className="text-2xl cursor-pointer hover:transition-all hover:text-primary duration-500 transform hover:scale-110" />
                        </a>
                        {item.dev ? (
                          <a href={item.likDep} className="transition-colors">
                            <Link className="text-2xl cursor-pointer hover:transition-all hover:text-primary duration-500 transform hover:scale-110" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-2 text-start text-muted-foreground">{item.description}</p>
                    <ul className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                      {item.tecs.map((tec, index) => (
                        <li
                          key={index}
                          className={`flex items-center gap-2 px-2 py-1 rounded ${tec.classL} text-white text-xs`}
                        >
                          <span className="text-lg">{tec.icon({})}</span>
                          <span>{tec.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

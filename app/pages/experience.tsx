"use client";
import { experienceData } from "../constants/experience-data";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="mt-20 lg:px-0" id="experience">
      <div className="flex justify-center items-center">
        <GraduationCap className="text-3xl text-center mr-3" />
        <h2 className="text-3xl text-center font-bold">Experiencia</h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="pt-8 flex flex-col items-center w-full">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-3xl mb-6"
              data-aos="fade-up"
            >
              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-md">
                <div className="flex items-center">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mr-5"
                  />
                  <div className="mt-1 mb-2 text-lg font-semibold">
                    <ul>
                      <li className="text-md hover:transition-all duration-500 transform hover:scale-105">
                        <a href={item.link}>{item.title}</a>
                      </li>
                      <li>
                        <p className="text-primary font-bold text-sm">
                          {item.position}
                        </p>
                        <div className="mb-3 text-sm">
                          <p className="text-md text-muted-foreground text-sm">
                            {item.date}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ml-20">
                  <p className="text-md text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

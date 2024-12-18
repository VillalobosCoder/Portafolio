"use client"
import { FaBuilding } from "react-icons/fa6";
import { experienceData } from "../constants/experience-data";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Experience() {
  
  useEffect(() => {
    AOS.init({duration: 500});
  }, []);

  return (
    <div className="mt-20 lg:px-0" id="experience">
      <div className="flex justify-center items-center">
        <FaBuilding className="text-3xl text-center mr-3" />
        <h2 className="text-3xl text-center font-bold">Experiencia</h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="pt-12 flex flex-col items-center mt-1">
          {experienceData.map((item, index) => (
            <div key={index} className="w-full max-w-4xl mb-5" data-aos="fade-up">
              <div>
                <div className="flex items-center">
                  <Image src={item.logo} alt={item.title} width={60} height={60} className="mr-5" />
                  <h5 className="mt-1 mb-2 text-lg font-semibold">
                    <ul>
                      <li className="text-md hover:transition-all duration-500 transform hover:scale-105">
                        <a href={item.link}>{item.title}</a>
                      </li>
                    </ul>
                  </h5>
                </div>
                <div className="ml-20">
                  <div className="mb-3">
                    <p className="text-md font-bold">{item.position}</p>
                    <p className="text-md">{item.date}</p>
                  </div>
                  <p className="text-md">{item.description}</p>
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
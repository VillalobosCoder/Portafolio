import Expressjs from "../assets/icons/Express";
import Java from "../assets/icons/Java";
import JavaScript from "../assets/icons/JavaScript";
import MongoDB from "../assets/icons/MongoDB";
import React from "../assets/icons/Reactl";
import MicrosoftSQLServer from "../assets/icons/SqlServer";
import TailwindCSS from "../assets/icons/Tailwind";
import TypeScript from "../assets/icons/TypeScript";
import Vite from "../assets/icons/Vite";
import CompiladorImage from "../assets/projects/Compilador.png";
import VrWondersTeamImage from "../assets/projects/VrWonders.png";
import ChatApp from "../assets/projects/ChatApp.png"

const TAGS = {
  Java: { name: "Java", classL: "bg-orange-900", icon: Java },
  React: { name: "React", classL: "bg-sky-900", icon: React },
  Vite: { name: "Vite", classL: "bg-violet-950", icon: Vite },
  MongoDB: { name: "MongoDB", classL: "bg-green-900", icon: MongoDB },
  Express: { name: "Expressjs", classL: "bg-gray-600", icon: Expressjs },
  SQLServer: {name: "SQL Server", classL: "bg-gray-500", icon: MicrosoftSQLServer},
  Tailwind: {name: "TailwindCSS", classL: "bg-sky-900", icon: TailwindCSS},
  JavaScript: {name: "JavaScript", classL: "bg-yellow-800", icon: JavaScript},
  TypeScript: {name: "TypeScript", classL: "bg-sky-900", icon: TypeScript},
};

export const projectsData = [
  {
    title: "Compilador",
    description: "Este proyecto es una implementación parcial de un compilador desarrollado como parte de un proyecto escolar. El objetivo principal es profundizar en la lógica de programación utilizando el lenguaje Java, y abordar algunas de las etapas fundamentales de un compilador: Analizador Léxico, Analizador Sintáctico, Analizador Semántico y Generador de Código Intermedio.",
    image: CompiladorImage,
    linkGit: "https://github.com/VillalobosCoder/Compilador",
    likDep: "",
    dev: false,
    tecs: [TAGS.Java],

  },
  {
    title: "VrWondersTeam",
    description: "Este proyecto es una landing page como parte de un proyecto escolar para una feria de ingenierias, la cual se realizo para promocionar y dar mas informacion de nuestro proyecto llamado VrWonders.",
    image: VrWondersTeamImage,
    linkGit: "https://github.com/VillalobosCoder/VrWondersTeam",
    likDep: "https://vrwondersteam.onrender.com/",
    dev: true,
    tecs: [TAGS.React, TAGS.Vite, TAGS.TypeScript, TAGS.Tailwind],
  },
  {
    title: "ChatApp",
    description: "Este proyecto escolar es una aplicación de chat en tiempo real, desarrollada con React, Express, Socket.io y MongoDB. La aplicación permite a los usuarios registrarse, iniciar sesión y chatear con en tiempo real.",
    image: ChatApp,
    linkGit: "https://github.com/VillalobosCoder/Proyecto-chat",
    likDep: "",
    dev: false,
    tecs: [TAGS.React, TAGS.Express, TAGS.MongoDB, TAGS.JavaScript, TAGS.Tailwind],
  },
];

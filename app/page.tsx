"use client"

import Navbar from "./components/navbar";
import Experience from "./pages/experience";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Home />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

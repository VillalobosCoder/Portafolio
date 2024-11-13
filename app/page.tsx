"use client"

import Navbar from "./components/navbar";
import { LanguageProvider } from "./context/lenguage-context";
import Experience from "./pages/experience";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";

export default function Page() {
  return (
    <div>
      <LanguageProvider>
        <Navbar />
        <div>
          <Home />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </LanguageProvider>
    </div>
  );
}

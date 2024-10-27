import Navbar from "./components/navbar";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Projects from "./pages/projects";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

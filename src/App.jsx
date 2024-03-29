import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

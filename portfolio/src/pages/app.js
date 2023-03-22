import React from "react"
import { About } from "./components/about"
import { Navbar } from "./components/navbar"
import { Projects } from "./components/projects"
import { Footer } from "./components/footer"
import './app.css';

export default function App() {
  return (
    <div>
    <Navbar />
    <About />
    <Projects />
    <Footer />
    </div>
  );
}

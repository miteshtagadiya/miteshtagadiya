import React from "react";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";

function Main() {
  return (
    <div className="mt-20 space-y-32" id="main-section">
      <Projects />
      <Skills />
      <Testimonials />
    </div>
  );
}

export default Main;

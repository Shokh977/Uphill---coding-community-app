import React from "react";
import Hero from "../components/Hero";
import JsInterective from "../components/JsForHome/JsInterective";
import Todo from "../components/todo/ToDo";
import PremiumTemplates from "../components/premium/PremiumTemplates";
import Testimonials from "../components/premium/Testimonials";
import SkillsSection from "../components/premium/SkillsSection";
import InteractiveCardGallery from "../components/premium/InteractiveCardGallery";
import Interactive3DProjects from "../components/premium/Interactive3DProjects";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <InteractiveCardGallery />
      <SkillsSection />
      <Interactive3DProjects />
      <PremiumTemplates />
      <JsInterective />
      <Testimonials />
      <Todo />
    </div>
  );
}

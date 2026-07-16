import { CTA } from "@/sections/CTA";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Story } from "@/sections/Story";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <CTA />
    </>
  );
}

import React from "react";
import Hero from "./src/components/Hero";
import TechStack from "./src/components/TechStack";
import Projects from "./src/components/Projects";
import Experience from "./src/components/Experience";
import Footer from "./src/components/Footer";
import Cursor from "./src/components/ui/Cursor";
import Grain from "./src/components/ui/Grain";

// Data
import profileData from "./config/profile.json";
import stackData from "./config/stack.json";
import projectsData from "./config/projects.json";
import experienceData from "./config/experience.json";
import { Profile, StackItem, Project, ExperienceItem } from "./types";
import NewTechStack from "./src/components/NewTechStack";
import ScrollProgress from "./src/components/ScrollProgress";
import Blogs from "./src/components/Blogs";

const App: React.FC = () => {
  // Casting json data to types
  const profile = profileData as Profile;
  const stack = stackData as StackItem[];
  const projects = projectsData as Project[];
  const experience = experienceData as ExperienceItem[];

  return (
    <main className="bg-background min-h-screen text-zinc-100 selection:bg-primary selection:text-black">
      <Cursor />
      <ScrollProgress />
      <Grain />

      <Hero profile={profile} />
      <NewTechStack stack={stack} />
      <Projects projects={projects} />
      <Blogs />
      <Experience experience={experience} />
      <Footer profile={profile} />
    </main>
  );
};

export default App;

import React from "react";
import { Project } from "../../types";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="py-16 md:py-32 px-6 lg:px-12 bg-background border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 border-b border-zinc-800 pb-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Selected <br /> Works
          </h2>
          <span className="text-zinc-500 font-mono text-sm mt-4 md:mt-0">
            03 // PROJ_LOGS
          </span>
        </div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <span className="text-primary font-mono text-xs uppercase tracking-[0.2em]">
                    0{index + 1} // Engineering
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="font-sans text-zinc-400 leading-relaxed text-lg max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium group"
                  >
                    Live Demo{" "}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-medium"
                  >
                    Source Code <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full group">
                <div
                  className="relative w-full aspect-video shadow-2xl border border-zinc-800 overflow-hidden"
                  style={{
                    backgroundColor: "#0d0d0f",
                    backgroundImage:
                      "radial-gradient(circle, #27272a 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                >
                  {/* Overlay for inactive state */}
                  <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:opacity-0" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 filter grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/40 z-20" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-primary/40 z-20" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-primary/40 z-20" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-primary/40 z-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

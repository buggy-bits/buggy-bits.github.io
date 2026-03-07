import React from "react";
import { ExperienceItem } from "../../types";
import blogs from "../../config/blogs";
interface ExperienceProps {
  experience: ExperienceItem[];
}

const sectionCode = blogs.length === 0 ? "04 // EXP_DATA" : "05 // EXP_DATA";
const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  if (!experience || experience.length === 0) {
    return (
      <section className="py-24 px-6 bg-background border-t border-zinc-900 text-center">
        <h3 className="font-display text-2xl text-zinc-500">Open to Work</h3>
      </section>
    );
  }

  return (
    <section
      className="py-32 px-6 lg:px-12 bg-background border-t border-zinc-900"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-800 pb-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            History <br /> Log
          </h2>
          <span className="text-zinc-500 font-mono text-sm mt-4 md:mt-0">
            {sectionCode}
          </span>
        </div>

        <div className="relative border-l border-zinc-800 ml-3 space-y-16">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] bg-background border border-zinc-600 group-hover:border-primary group-hover:bg-primary transition-colors duration-300 rotate-45" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="font-display text-2xl text-zinc-100 group-hover:text-primary transition-colors duration-300">
                  {item.role}
                </h3>
                <span className="font-mono text-zinc-500 text-sm mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>

              <div className="text-lg text-zinc-300 font-medium mb-4">
                {item.company}
              </div>

              <p className="text-zinc-400 font-sans leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

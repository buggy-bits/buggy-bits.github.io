import React from "react";
import { StackItem } from "../../types";

type TechItem = StackItem;

interface NewTechStackProps {
  stack: StackItem[];
}

const TechGroup: React.FC<{ title: string; items: TechItem[] }> = ({
  title,
  items,
}) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="text-sm font-heading font-bold text-zinc-500 uppercase tracking-widest mb-6 border-l-2 border-accent pl-3">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-surface border border-white/5 px-4 py-2 hover:border-accent/50 transition-colors duration-300 "
          >
            <span className="font-body text-zinc-300 group-hover:text-white text-sm">
              {item.name}
            </span>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#111] border border-zinc-800 text-xs text-zinc-400 text-center rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-50 shadow-xl">
              {item.description}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#111]" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const NewTechStack: React.FC<NewTechStackProps> = ({ stack }) => {
  const core = stack.filter((t) => t.category === "core");
  const languages = stack.filter((t) => t.category === "language");
  const tools = stack.filter((t) => t.category === "tool");

  return (
    <section
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative"
      id="tech-stack"
    >
      <span className="text-zinc-500 font-mono text-sm hidden md:block absolute top-10 right-6 lg:right-0">
        02 // STACK_INIT
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-heading font-bold text-white">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-zinc-500 text-sm font-body max-w-xs">
            A curated selection of the technologies and tools that power my
            projects.
          </p>
        </div>

        <div className="lg:col-span-3">
          <TechGroup title="Core Architecture" items={core} />
          <TechGroup title="Languages" items={languages} />
          <TechGroup title="Tools & Infra" items={tools} />
        </div>
      </div>
    </section>
  );
};

export default NewTechStack;

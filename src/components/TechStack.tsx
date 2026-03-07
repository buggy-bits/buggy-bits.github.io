import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StackItem } from "../../types";
import { CornerBorder } from "./ui/CornerBorder";

interface TechStackProps {
  stack: StackItem[];
}

const TechStack: React.FC<TechStackProps> = ({ stack }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Separate creative items to show they are part of the grid but styled differently if needed
  // For now, we mix them but the data structure supports separation.

  return (
    <section className="py-24 px-6 lg:px-12 bg-background relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-800 pb-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Technical <br /> Arsenal
          </h2>
          <span className="text-zinc-500 font-mono text-sm mt-4 md:mt-0">
            02 // STACK_INIT
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="relative group h-32"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Phantom Border Background */}
              <div className="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/20 transition-colors duration-300" />

              <CornerBorder className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative h-full flex flex-col items-center justify-center p-4 border border-zinc-900 group-hover:border-zinc-700 transition-colors duration-300">
                <span
                  className={`font-sans font-medium text-lg ${
                    item.priority === "primary"
                      ? "text-zinc-100"
                      : "text-zinc-400"
                  } group-hover:text-primary transition-colors`}
                >
                  {item.name}
                </span>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-zinc-900 border border-zinc-700 px-3 py-2 whitespace-nowrap z-20 pointer-events-none"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-primary font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-[10px] text-zinc-400">
                          {item.role}
                        </span>
                      </div>
                      {/* Triangle pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-zinc-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

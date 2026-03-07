import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { Profile } from "../../types";
import CONFIG from "../../config/profile.json";

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12 pt-20 pb-10 md:pt-10 md:pb-0">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start gap-8">
          <motion.p
            className="text-accent text-sm md:text-base font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {profile.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-8xl leading-[0.9] tracking-tight text-white mb-6">
              Engineering <br />
              <span className="text-zinc-500">Systems.</span> <br />
              Designing <br />
              <span className="text-zinc-500">Experiences.</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-lg mb-4 leading-relaxed">
              {profile.tagline} Bringing a unique hybrid approach that merges
              robust engineering with creative problem-solving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-0"
          >
            <a
              href="#projects"
              className="
    bg-accent text-black font-bold font-body
    px-4 py-2 text-sm gap-1.5
    md:px-5 md:py-2.5 md:text-base md:gap-2
    lg:px-6 lg:py-3 lg:text-lg
    rounded-none
    hover:bg-white transition-colors duration-300
    flex items-center group
  "
            >
              View Projects
              <ArrowUpRight
                className="
    w-4 h-4
    md:w-5 md:h-5
    transition-transform
    group-hover:translate-x-1 group-hover:-translate-y-1
  "
              />
            </a>

            <a
              href={CONFIG.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="
    border border-zinc-700 text-text font-medium font-body
    px-4 py-2 text-sm gap-1.5
    md:px-5 md:py-2.5 md:text-base md:gap-2
    lg:px-6 lg:py-3 lg:text-lg
    rounded-none
    hover:border-accent hover:text-accent
    transition-colors duration-300
    flex items-center
  "
            >
              Resume
              <FileText className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Blended Image */}
        <div className="order-1 lg:order-2 relative w-full h-[35vh] md:h-[50vh] lg:h-[80vh] group">
          {/* The Image Container */}
          <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0">
            <img
              src="/assets/vector_potrait2C.png"
              alt="Portrait"
              className="w-full h-full object-cover object-center"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 50%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Corner accents for the viewfinder look */}
          <div className="absolute inset-0 border border-zinc-800/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

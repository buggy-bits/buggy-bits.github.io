import React from "react";
import { Profile } from "../../types";

interface FooterProps {
  profile: Profile;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-black text-center">
      <div className="flex flex-col items-center gap-6">
        <h2 className="font-display text-2xl font-bold text-zinc-700 tracking-tighter uppercase">
          {profile.name}
        </h2>

        <div className="flex gap-8">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-primary text-sm uppercase tracking-wider transition-colors"
          >
            Github
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-primary text-sm uppercase tracking-wider transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-500 hover:text-primary text-sm uppercase tracking-wider transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-zinc-700 font-mono text-xs mt-8 ">
          © {year} {profile.name}. Built with precision. Designed with purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

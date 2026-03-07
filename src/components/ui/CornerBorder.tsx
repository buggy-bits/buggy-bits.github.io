import React from 'react';

export const CornerBorder: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute pointer-events-none w-full h-full top-0 left-0 ${className}`}>
    {/* Top Left */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-500/50" />
    {/* Top Right */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-500/50" />
    {/* Bottom Left */}
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-500/50" />
    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-500/50" />
  </div>
);
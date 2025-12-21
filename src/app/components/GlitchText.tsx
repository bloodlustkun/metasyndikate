import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export function GlitchText({ children, className = '', as: Component = 'h1' }: GlitchTextProps) {
  const [glitched, setGlitched] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitched(true);
      setTimeout(() => setGlitched(false), 100);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Component className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      
      {glitched && (
        <>
          <span
            className="absolute top-0 left-0 text-secondary opacity-70"
            style={{ transform: 'translate(-2px, 2px)' }}
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 text-accent opacity-70"
            style={{ transform: 'translate(2px, -2px)' }}
          >
            {children}
          </span>
        </>
      )}
    </Component>
  );
}

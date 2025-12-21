import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {/* Main reticle */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`relative transition-transform duration-200 ${isPointer ? 'scale-150' : 'scale-100'}`}>
          {/* Center dot */}
          <div className="absolute w-1 h-1 bg-primary -translate-x-1/2 -translate-y-1/2" />
          
          {/* Crosshair lines */}
          <div className="absolute w-8 h-[1px] bg-primary -translate-x-1/2 -translate-y-1/2 left-0" />
          <div className="absolute w-[1px] h-8 bg-primary -translate-x-1/2 -translate-y-1/2 top-0" />
          
          {/* Corner brackets */}
          <div className="absolute -left-4 -top-4 w-3 h-3 border-l border-t border-secondary" />
          <div className="absolute -right-4 -top-4 w-3 h-3 border-r border-t border-secondary" />
          <div className="absolute -left-4 -bottom-4 w-3 h-3 border-l border-b border-secondary" />
          <div className="absolute -right-4 -bottom-4 w-3 h-3 border-r border-b border-secondary" />
        </div>
      </div>

      {/* Trail particles */}
      <div
        className="fixed pointer-events-none z-[9998] w-2 h-2 bg-accent/30 blur-sm"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s ease-out',
        }}
      />
    </>
  );
}

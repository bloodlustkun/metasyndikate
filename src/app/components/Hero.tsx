// Removed motion and animation for static hero
import { GlitchText } from './GlitchText';
import { Terminal, Zap } from 'lucide-react';
const logo = '/logo.png'; // Use public directory for static assets in Vite

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-2 border-primary">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Logo - static, larger, crisp, no shadow */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="Metasyndikate Studios" 
            className="w-48 h-48 max-w-xs object-contain rounded-none" 
            style={{ imageRendering: 'auto', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            draggable={false}
          />
        </div>

          {/* Status line */}
          <div className="font-mono mb-4 flex items-center gap-4 justify-center">
            <span className="text-secondary text-sm">// METASYNDIKATE.OS</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary animate-pulse" />
              <span className="text-xs text-muted-foreground">OPERATIONAL</span>
            </div>
          </div>

          {/* Main title */}
          <GlitchText className="mb-6 text-center">
            METASYNDIKATE STUDIOS®
          </GlitchText>

          {/* Subtitle */}
          <h2 className="text-secondary mb-8 text-center">
            // WITHEREDRAXIA NODE /// BLOODLUST PROTOCOL
          </h2>

          {/* Manifesto */}
          <p className="max-w-3xl mx-auto text-center text-lg text-foreground/80 mb-4 font-mono">
            Non-profit ideology-driven creative syndicate.<br/>
            Operating system for ideas. One vision. Zero dilution.
          </p>
          <p className="max-w-2xl mx-auto text-center text-sm text-muted-foreground mb-12 font-mono">
            "Built not to scale fast — but to last quietly."
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 justify-center">
            <a
              href="#operations"
              className="group relative px-8 py-4 bg-primary border-2 border-primary overflow-hidden block"
            >
              <span className="relative z-10 flex items-center gap-2 font-mono">
                <Terminal className="w-5 h-5" />
                <span className="group-hover:hidden">IDLE</span>
                <span className="hidden group-hover:inline">ARMED</span>
              </span>
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#m-os"
              className="group relative px-8 py-4 border-2 border-accent overflow-hidden block"
            >
              <span className="relative z-10 flex items-center gap-2 font-mono text-accent group-hover:text-background">
                <Zap className="w-5 h-5" />
                VIEW M-OS
              </span>
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        {/* End of content */}
      </div>

      {/* Corner UI elements */}
      <div className="absolute top-8 left-8 font-mono text-xs text-muted-foreground">
        <div>FOUNDER: AKSH THAKUR</div>
        <div>ALIAS: BLOODLUST</div>
        <div>NODE: WITHEREDRAXIA</div>
      </div>

      <div className="absolute bottom-8 right-8 font-mono text-xs text-muted-foreground text-right">
        <div>UPTIME: 99.98%</div>
        <div>STATUS: NON-PROFIT</div>
        <div>© METASYNDIKATE™</div>
      </div>
    </section>
  );
}
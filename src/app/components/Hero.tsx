import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { GlitchText } from './GlitchText';
import { Terminal, Zap } from 'lucide-react';
// import logo from 'https://drive.google.com/file/d/1u9IjvtHyGtFrabzZAoYbDlnrFlDPCpJT/view?usp=drive_link';
const logo = '/logo.png'; // Use public directory for static assets in Vite

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-2 border-primary">
      {/* Parallax layers */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ff003310_1px,transparent_1px),linear-gradient(to_bottom,#ff003310_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-secondary"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-accent"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <img src={logo} alt="Metasyndikate Studios" className="w-32 h-32 drop-shadow-[0_0_20px_rgba(255,0,51,0.5)]" />
          </motion.div>

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
            <motion.a
              href="#operations"
              className="group relative px-8 py-4 bg-primary border-2 border-primary overflow-hidden block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 font-mono">
                <Terminal className="w-5 h-5" />
                <span className="group-hover:hidden">IDLE</span>
                <span className="hidden group-hover:inline">ARMED</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-secondary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#m-os"
              className="group relative px-8 py-4 border-2 border-accent overflow-hidden block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 font-mono text-accent group-hover:text-background">
                <Zap className="w-5 h-5" />
                VIEW M-OS
              </span>
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>
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
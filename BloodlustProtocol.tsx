import { motion } from 'motion/react';
import { Brain, Code, Layers, Lock } from 'lucide-react';
const logo = '/logo.png';

const osPillars = [
  { icon: Brain, label: 'PHILOSOPHY', value: 'WitheredRaxia', desc: 'Existential realism. Creation > consumption.' },
  { icon: Code, label: 'CREATIVE', value: 'UI/UX/Media', desc: 'Design systems. Film. Brand identities.' },
  { icon: Layers, label: 'EXECUTION', value: 'Tech/Deploy', desc: 'Websites. SMMA. Real-world ops.' },
  { icon: Lock, label: 'FUNDING', value: 'Non-Profit', desc: 'Ethical client work. Patron-backed.' },
];

export function BloodlustProtocol() {
  return (
    <section id="m-os" className="relative py-32 px-6 border-b-2 border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Logo with glitch */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary overflow-hidden flex items-center justify-center">
              {/* Logo */}
              <motion.img 
                src={logo} 
                alt="Metasyndikate" 
                className="w-2/3 h-2/3 object-contain z-10"
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(255,0,51,0.5))',
                    'drop-shadow(0 0 40px rgba(255,0,51,0.8))',
                    'drop-shadow(0 0 20px rgba(255,0,51,0.5))',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Scan lines */}
              <motion.div
                className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,0,51,0.05)_50%)] bg-[length:100%_4px]"
                animate={{ y: [0, 8] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-secondary" />
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-secondary" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-secondary" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-secondary" />
            </div>

            {/* Info overlay */}
            <div className="absolute -bottom-4 -right-4 bg-background border-2 border-accent px-4 py-2 font-mono text-xs">
              METASYNDIKATE.OS™
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-secondary text-sm mb-4">// 02_OPERATING_SYSTEM</div>
            <h2 className="mb-8">METASYNDIKATE OS</h2>

            <div className="space-y-6 mb-12">
              <p className="text-foreground/80">
                A non-profit, ideology-driven creative syndicate operating under the{' '}
                <span className="text-primary">WitheredRaxia</span> philosophy.
              </p>
              <p className="text-foreground/80 font-mono text-sm">
                <span className="text-secondary">Core Principle:</span><br/>
                One Vision · Many Hands · Zero Dilution
              </p>
              <p className="text-foreground/80">
                Centralizing vision, ownership, and direction under one mind. Operating outside 
                traditional corporate capitalism. Creating culture, media, design, tech, and philosophy 
                while funding real-world impact through <span className="text-accent">DevBhoomi Wings</span>.
              </p>
              <p className="text-muted-foreground text-sm italic">
                "This is not a startup. It is an operating system for ideas."
              </p>
            </div>

            {/* OS Pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {osPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-card border border-primary p-6 hover:border-accent transition-colors"
                  >
                    <Icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
                    <div className="font-mono text-xs text-muted-foreground mb-1">
                      {pillar.label}
                    </div>
                    <div className="text-lg text-secondary mb-2">
                      {pillar.value}
                    </div>
                    <div className="text-xs text-foreground/60">
                      {pillar.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* bloodlust Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 border-t-2 border-primary pt-12"
        >
          <div className="font-mono text-secondary text-sm mb-4">// 03_Creator </div>
          <h3 className="text-4xl mb-6">BLOODLUST PROTOCOL</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <div className="font-mono text-xs text-muted-foreground mb-1">IDENTITY</div>
                <div className="text-xl text-foreground">Aksh Thakur</div>
                <div className="text-sm text-secondary">aka Bloodlust</div>
              </div>
              
              <div className="border-l-2 border-accent pl-4">
                <div className="font-mono text-xs text-muted-foreground mb-1">ROLE</div>
                <div className="text-sm text-foreground">
                  bloodlust · CEO · Chief Architect · Sole Proprietor
                </div>
              </div>
              
              <div className="border-l-2 border-secondary pl-4">
                <div className="font-mono text-xs text-muted-foreground mb-1">AUTHORITY</div>
                <div className="text-sm text-foreground">
                  Absolute · Vision Lock · 100% Ownership
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-foreground/80 text-sm">
                All intellectual property, assets, domains, content, and philosophy 
                belong exclusively to <span className="text-primary">Aksh Thakur</span>.
              </p>
              <p className="text-foreground/80 text-sm">
                No equity. No shares. No dilution. Ever.
              </p>
              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>// witheredraxia.xyz</div>
                <div>// devbhoomiwings.com</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
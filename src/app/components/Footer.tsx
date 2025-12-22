import { Github, Mail } from 'lucide-react';
import { motion } from 'motion/react';
const logo = '/logo.png';

export function Footer() {
  return (
    <footer className="relative bg-card border-t-4 border-primary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Brutalist info slab */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Metasyndikate Studios Logo" className="w-12 h-12" loading="lazy" decoding="async" />
              <h3 className="text-primary">METASYNDIKATE™</h3>
            </div>
            <p className="text-sm text-foreground/70 font-mono mb-3">
              Non-profit ideology-driven creative syndicate. Operating system for ideas.
            </p>
            <p className="text-xs text-accent font-mono mb-3">
              We only hire 1 person per year. If you’re the one, you’ll know.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} Metasyndikate Studios®<br/>
              All rights reserved. Aksh Thakur.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="mb-4 text-secondary">DOMAINS</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a
                  href="https://www.witheredraxia.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  &gt; witheredraxia.xyz
                </a>
              </li>
              <li>
                <a
                  href="https://www.devbhoomiwings.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  &gt; devbhoomiwings.com
                </a>
              </li>
              <li className="text-muted-foreground">
                &gt; metasyndikate.com (SOON)
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="mb-4 text-secondary">NODE STATUS</h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary animate-pulse" />
                <span className="text-foreground/70">OPERATIONAL</span>
              </div>
              <div className="text-xs text-muted-foreground">
                WITHEREDRAXIA NODE
              </div>
              <div className="text-xs text-muted-foreground">
                UPTIME: 99.98%
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t-2 border-primary/30">
          <div className="text-center font-mono text-xs text-muted-foreground mb-4">
            FOUNDER & CEO: AKSH THAKUR (BLOODLUST) · 100% SOLE PROPRIETORSHIP
          </div>
          <div className="text-center text-xs text-muted-foreground">
            "Built not to scale fast — but to last quietly."
          </div>
        </div>

        {/* System info */}
        <div className="mt-8 p-4 bg-muted border-l-4 border-accent font-mono text-xs text-muted-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>NODE: WITHEREDRAXIA</div>
            <div>VERSION: M-OS.1.0</div>
            <div>BUILD: {new Date().getFullYear()}.12.21</div>
            <div>STATUS: OPERATIONAL</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
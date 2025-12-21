import { motion } from 'motion/react';
import { useState } from 'react';
import { Code2, Users, Globe, Palette } from 'lucide-react';

interface Operation {
  codename: string;
  description: string;
  stack: string[];
  outcome: string;
  status: 'COMPLETED' | 'ACTIVE' | 'CLASSIFIED';
  icon: typeof Code2;
}

const operations: Operation[] = [
  {
    codename: 'WITHEREDRAXIA',
    description: 'Philosophy core and ideology engine. Existential realism framework. Anti-hype, anti-fake productivity. Creation over consumption. Silence, precision, restraint.',
    stack: ['Philosophy', 'Essays', 'Archives', 'Manifestos'],
    outcome: 'Personal intellectual legacy established',
    status: 'ACTIVE',
    icon: Globe,
  },
  {
    codename: 'DEVBHOOMI_WINGS',
    description: 'Ethical execution arm. Family/community-rooted. Revenue & impact hybrid. SMMA operations, tech builds, real-world deployments. Funding source for creative projects.',
    stack: ['SMMA', 'Web Dev', 'UI/UX', 'Client Work'],
    outcome: 'Sustainable non-profit funding achieved',
    status: 'ACTIVE',
    icon: Users,
  },
  {
    codename: 'DESIGN_SYSTEMS',
    description: 'Cultural creation layer. UI/UX design systems, brand identities, film & visuals, philosophy essays. Neo-brutalist and cyberpunk aesthetics. Where culture is created.',
    stack: ['Figma', 'React', 'TailwindCSS', 'Motion'],
    outcome: 'Cohesive visual language deployed',
    status: 'COMPLETED',
    icon: Palette,
  },
  {
    codename: 'METASYNDIKATE_OS',
    description: 'Operating system for ideas. Centralized vision, ownership, direction under one mind. Non-profit collective. Contributors, not employees. Built to last quietly.',
    stack: ['Governance', 'IP Rights', 'Non-Profit', 'Philosophy'],
    outcome: 'Zero dilution. Absolute authority.',
    status: 'ACTIVE',
    icon: Code2,
  },
];

export function OperationsLog() {
  return (
    <section id="operations" className="relative py-32 px-6 border-b-2 border-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-secondary text-sm mb-4">// 01_OPERATIONS_LOG</div>
          <h2 className="mb-4">ACTIVE PROJECTS</h2>
          <div className="w-32 h-1 bg-primary" />
        </motion.div>

        {/* Operations grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {operations.map((op, index) => (
            <OperationCard key={op.codename} operation={op} index={index} />
          ))}
        </div>

        {/* Domains section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t-2 border-primary pt-12"
        >
          <div className="font-mono text-secondary text-sm mb-4">// OWNED_DOMAINS</div>
          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="https://www.witheredraxia.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-2 border-primary p-6 hover:border-accent transition-colors"
            >
              <div className="font-mono text-xs text-muted-foreground mb-2">PHILOSOPHY</div>
              <div className="text-lg text-foreground group-hover:text-accent transition-colors">
                witheredraxia.xyz
              </div>
            </a>
            <a 
              href="https://www.devbhoomiwings.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-2 border-primary p-6 hover:border-accent transition-colors"
            >
              <div className="font-mono text-xs text-muted-foreground mb-2">EXECUTION</div>
              <div className="text-lg text-foreground group-hover:text-accent transition-colors">
                devbhoomiwings.com
              </div>
            </a>
            <div className="border-2 border-secondary p-6">
              <div className="font-mono text-xs text-muted-foreground mb-2">SYNDICATE</div>
              <div className="text-lg text-secondary">
                metasyndikate.com
              </div>
              <div className="text-xs text-muted-foreground mt-1">COMING SOON</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OperationCard({ operation, index }: { operation: Operation; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = operation.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Access granted animation */}
      <motion.div
        className="absolute -top-6 left-0 font-mono text-xs text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        &gt; ACCESS GRANTED
      </motion.div>

      <div className="relative bg-card border-2 border-primary p-8 overflow-hidden h-full">
        {/* RGB shift on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
          animate={{
            x: isHovered ? [0, 2, -2, 0] : 0,
            y: isHovered ? [0, -2, 2, 0] : 0,
          }}
          transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0 }}
        />

        <div className="relative z-10">
          {/* Status badge */}
          <div className="flex items-center justify-between mb-4">
            <div className={`px-3 py-1 border font-mono text-xs ${
              operation.status === 'COMPLETED' ? 'border-secondary text-secondary' :
              operation.status === 'ACTIVE' ? 'border-accent text-accent' :
              'border-primary text-primary'
            }`}>
              {operation.status}
            </div>
            <Icon className="w-8 h-8 text-primary" />
          </div>

          {/* Codename */}
          <h3 className="mb-4 group-hover:text-secondary transition-colors">
            {operation.codename}
          </h3>

          {/* Description */}
          <p className="text-sm text-foreground/70 mb-6">
            {operation.description}
          </p>

          {/* Stack */}
          <div className="mb-6">
            <div className="font-mono text-xs text-muted-foreground mb-2">STACK:</div>
            <div className="flex flex-wrap gap-2">
              {operation.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted font-mono text-xs border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="font-mono text-sm">
            <span className="text-accent">OUTCOME:</span>{' '}
            <span className="text-foreground/80">{operation.outcome}</span>
          </div>
        </div>

        {/* Hover border effect */}
        <motion.div
          className="absolute inset-0 border-2 border-accent opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

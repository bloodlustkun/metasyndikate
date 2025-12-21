import { CustomCursor } from './components/CustomCursor';
import { NetworkBackground } from './components/NetworkBackground';
import { Hero } from './components/Hero';
import { OperationsLog } from './components/OperationsLog';
import { BloodlustProtocol } from './components/BloodlustProtocol';
import { ContractTerminal } from './components/ContractTerminal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Animated network background */}
      <NetworkBackground />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <OperationsLog />
        <BloodlustProtocol />
        <ContractTerminal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}


import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { NetworkBackground } from './components/NetworkBackground';
import { Hero } from './components/Hero';
import { OperationsLog } from './components/OperationsLog';
import { BloodlustProtocol } from './components/BloodlustProtocol';
import { ContractTerminal } from './components/ContractTerminal';
import { Footer } from './components/Footer';
import { CookieNdaModal } from './CookieNdaModal';

export default function App() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccepted(localStorage.getItem('cookieNdaAccepted') === 'true');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieNdaAccepted', 'true');
    setAccepted(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {!accepted && <CookieNdaModal onAccept={handleAccept} />}
      {accepted && (
        <>
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
        </>
      )}
    </div>
  );
}

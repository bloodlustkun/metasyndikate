import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContractTerminal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-secondary text-sm mb-4">// 04_CONTACT_TERMINAL</div>
          <h2 className="mb-4">INITIATE CONTRACT</h2>
          <p className="text-foreground/70 mb-8 font-mono text-sm">
            For collaborations, contributor applications, or inquiries about Metasyndikate Studios operations.
          </p>

          {/* Terminal window */}
          <div className="bg-card border-2 border-primary">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b-2 border-primary bg-muted">
              <div className="flex items-center gap-2 font-mono text-xs">
                <div className="w-3 h-3 bg-primary" />
                <div className="w-3 h-3 bg-secondary" />
                <div className="w-3 h-3 bg-accent" />
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                SECURE_CHANNEL.EXE
              </div>
            </div>

            {/* Terminal body */}
            <div className="p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label className="block mb-2 text-secondary font-mono">
                      &gt; CALLSIGN_
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-input-background border-2 border-primary px-4 py-3 text-foreground focus:border-accent outline-none transition-colors font-mono"
                      placeholder="Enter identification..."
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block mb-2 text-secondary font-mono">
                      &gt; SECURE_CHANNEL_
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-input-background border-2 border-primary px-4 py-3 text-foreground focus:border-accent outline-none transition-colors font-mono"
                      placeholder="encrypted@channel.net"
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block mb-2 text-secondary font-mono">
                      &gt; TRANSMISSION_
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-input-background border-2 border-primary px-4 py-3 text-foreground focus:border-accent outline-none transition-colors min-h-[150px] resize-none font-mono"
                      placeholder="Enter message payload..."
                      required
                    />
                  </div>

                  {/* Disclaimer */}
                  <div className="text-xs text-muted-foreground font-mono border-l-2 border-accent pl-4">
                    NOTE: Metasyndikate Studios is a non-profit. All contributors sign agreements with no ownership claims.
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    className="group relative w-full bg-primary border-2 border-primary px-8 py-4 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 font-mono">
                      <Send className="w-5 h-5" />
                      TRANSMIT
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-secondary mb-4">TRANSMISSION SUCCESSFUL</h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    Message received by WITHEREDRAXIA node. Response protocol initiated.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Terminal footer */}
            <div className="px-6 py-3 border-t-2 border-primary bg-muted font-mono text-xs text-muted-foreground">
              ENCRYPTION: AES-256 | STATUS: SECURED | OWNER: AKSH THAKUR
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './components/ui/dialog';
import { Button } from './components/ui/button';

export function CookieNdaModal({ onAccept }: { onAccept: () => void }) {
  const [checked, setChecked] = useState(false);
  return (
    <Dialog open>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Welcome to Metasyndikate Studios</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p>
            This website uses cookies to enhance your experience. By continuing, you agree to our use of cookies.
          </p>
          <p>
            <strong>Non-Disclosure Agreement (NDA)</strong><br />
            By accessing this website, you agree to the following NDA under the name of <b>Aksh Thakur</b>:
          </p>
          <ul className="list-disc pl-5">
            <li>You will not disclose, share, or reproduce any proprietary information, content, or intellectual property found on this site without explicit written consent from Aksh Thakur.</li>
            <li>Violation of this agreement may result in legal action.</li>
          </ul>
          <label className="flex items-center gap-2 mt-4">
            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
            I accept the use of cookies and agree to the NDA under the name of Aksh Thakur.
          </label>
        </div>
        <DialogFooter>
          <Button disabled={!checked} onClick={onAccept} className="w-full">Enter Site</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

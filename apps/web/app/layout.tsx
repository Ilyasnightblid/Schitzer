import type { ReactNode } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <header className="border-b border-slate-200">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <Link className="text-lg font-semibold" href="/">
                Schitzer
              </Link>
              <nav className="flex items-center gap-2">
                <Button variant="outline">Login</Button>
                <Button>Register</Button>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

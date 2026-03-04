import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16">
      <h1 className="text-4xl font-bold">Schitzer</h1>
      <p className="text-slate-600">A clean baseline for the Schitzer web app.</p>
      <div className="flex gap-2">
        <Button variant="outline">Login</Button>
        <Button>Register</Button>
      </div>
    </main>
  );
}

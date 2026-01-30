import Link from 'next/link';
import { FallingAppleLogo } from '@/components/icons/falling-apple-logo';
import { Button } from '@/components/ui/button';

export function Header() {
  const navItems = [
    { name: 'Batches', href: '#batches' },
    { name: 'Notes', href: '#notes' },
    { name: 'AI Test', href: '#ai-test' },
    { name: 'Focus', href: '#focus' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold text-foreground">
          Falling Apple Academy
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="rounded-full px-6">
          Login
        </Button>
      </div>
    </header>
  );
}

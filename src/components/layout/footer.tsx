import Link from 'next/link';
import { FallingAppleLogo } from '@/components/icons/falling-apple-logo';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-sm">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <Link href="/" className="text-foreground font-semibold text-lg">
            Falling Apple Academy
          </Link>
          <p className="text-muted-foreground">
            Revolutionizing physics education with concept-first methodology.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><Link href="#batches" className="text-muted-foreground hover:text-foreground">Micro-Batches</Link></li>
            <li><Link href="#ai-test" className="text-muted-foreground hover:text-foreground">AI Test Series</Link></li>
            <li><Link href="#focus" className="text-muted-foreground hover:text-foreground">Focus Sessions</Link></li>
            <li><Link href="#notes" className="text-muted-foreground hover:text-foreground">Digital Notes</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Login</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Track Progress</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">My Library</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Settings</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Refund Policy</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-border pt-8 px-4 flex justify-between items-center text-muted-foreground text-xs">
        <p>&copy; {new Date().getFullYear()} Falling Apple Academy. All rights reserved.</p>
        <p>Physics by Swarupanand.</p>
      </div>
    </footer>
  );
}

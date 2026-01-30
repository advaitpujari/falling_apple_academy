import Link from 'next/link';
import { FallingAppleLogo } from '@/components/icons/falling-apple-logo';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-sm">
        <div className="col-span-2 md:col-span-1">
          <FallingAppleLogo className="h-8 w-8 text-muted-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><Link href="#batches" className="text-muted-foreground hover:text-foreground">Batches</Link></li>
            <li><Link href="#ai-test" className="text-muted-foreground hover:text-foreground">Test Series</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Login</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Progress</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-border pt-8 px-4 text-center text-muted-foreground text-xs">
        <p>Physics by Swarupanand.</p>
      </div>
    </footer>
  );
}

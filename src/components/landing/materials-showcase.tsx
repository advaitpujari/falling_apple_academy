import { FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function MaterialsShowcase() {
  return (
    <section id="notes" className="py-24 sm:py-32 bg-gray-50 text-black">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-64 md:h-96">
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -rotate-12 w-32 h-40 md:w-40 md:h-52 bg-white rounded-2xl shadow-lg flex items-center justify-center border">
            <FileText className="w-16 h-16 text-gray-400" />
          </div>
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 w-32 h-40 md:w-40 md:h-52 bg-white rounded-2xl shadow-2xl flex items-center justify-center border">
             <FileText className="w-16 h-16 text-primary" />
          </div>
          <div className="absolute top-0 right-1/4 transform translate-x-1/2 rotate-12 w-32 h-40 md:w-40 md:h-52 bg-white rounded-2xl shadow-lg flex items-center justify-center border">
             <FileText className="w-16 h-16 text-gray-400" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Paper. Perfected.</h2>
          <p className="text-lg text-gray-600 mb-8">
            Notes designed to boost marks, not weight.
          </p>
          <Button asChild variant="link" className="text-lg text-primary p-0 h-auto">
            <Link href="#">View Sample PDF &gt;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

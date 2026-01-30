import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';

const BentoCard = ({ className, children, id }: { className?: string; children: React.ReactNode, id?: string }) => (
  <Card id={id} className={`bg-card/50 backdrop-blur-sm border-white/10 rounded-[30px] overflow-hidden transition-all duration-300 hover:border-primary/50 ${className}`}>
    {children}
  </Card>
);

const LivePulse = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="absolute h-6 w-6 rounded-full bg-green-500/50" />
    <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse" />
  </div>
);

export function BentoGridSection() {
  const microBatchImage = getPlaceholderImage('bento-micro-batch');
  const materialsImage = getPlaceholderImage('bento-materials');

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          <BentoCard className="md:col-span-3 group">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold">The Micro-Batch</CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative h-[300px]">
              {microBatchImage && (
                <Image
                  src={microBatchImage.imageUrl}
                  alt={microBatchImage.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={microBatchImage.imageHint}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-lg font-semibold">Magnetism.</p>
                <p className="text-muted-foreground">Master one topic at a time. 3-week sprints.</p>
              </div>
            </CardContent>
          </BentoCard>

          <BentoCard id="ai-test" className="md:col-span-2 group">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold">AI Test Series</CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative h-[300px]">
                <Image
                  src="https://jee-data.s3.ap-south-1.amazonaws.com/falling_apple_academy_website/test_series_image.png"
                  alt="AI Test Series"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-lg font-semibold">Smart Testing.</p>
                <p className="text-muted-foreground">AI that finds your weak spots before the exam does.</p>
              </div>
            </CardContent>
          </BentoCard>

          <BentoCard id="focus" className="md:col-span-2">
             <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold">Focus Sessions</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 flex flex-col items-center justify-center h-[200px]">
              <LivePulse />
               <div className="mt-4 text-center">
                 <p className="font-semibold">Weekly Focus.</p>
                 <p className="text-muted-foreground">Sunday. 10 AM. Pure problem solving.</p>
               </div>
            </CardContent>
          </BentoCard>

          <BentoCard className="md:col-span-3 group">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold">The Materials</CardTitle>
            </CardHeader>
             <CardContent className="p-0 relative h-[300px]">
              {materialsImage && (
                <Image
                  src={materialsImage.imageUrl}
                  alt={materialsImage.description}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={materialsImage.imageHint}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-lg font-semibold">Invaluable Notes.</p>
                 <p className="text-muted-foreground">Curated questions. High-yield PDFs.</p>
              </div>
            </CardContent>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}

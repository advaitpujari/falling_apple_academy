'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getPlaceholderImage } from '@/lib/placeholder-images';

const topics = [
  {
    name: 'Optics',
    visualId: 'carousel-optics',
    color: 'hsl(207, 90%, 67%)', // Blue
  },
  {
    name: 'Mechanics',
    visualId: 'carousel-mechanics',
    color: 'hsl(30, 80%, 60%)', // Orange-ish
  },
  {
    name: 'Thermodynamics',
    visualId: 'carousel-thermodynamics',
    color: 'hsl(0, 80%, 60%)', // Red-ish
  },
  {
    name: 'Electromagnetism',
    visualId: 'bento-micro-batch', // Re-use
    color: 'hsl(262, 52%, 50%)', // Purple
  },
];

export function MicroBatchSelector() {
  const [activeColor, setActiveColor] = useState(topics[0].color);

  const TopicCard = ({ topic }: { topic: (typeof topics)[0] }) => {
    const visual = getPlaceholderImage(topic.visualId);
    return (
      <Card
        className="rounded-[30px] overflow-hidden cursor-pointer border-white/10 transition-all hover:border-primary/50"
        onClick={() => setActiveColor(topic.color)}
      >
        <CardContent className="p-0 relative aspect-[4/3]">
          {visual && (
            <Image
              src={visual.imageUrl}
              alt={visual.description}
              fill
              className="object-cover"
              data-ai-hint={visual.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/40 flex items-end justify-start">
            <h3 className="text-2xl font-bold p-6 text-white">{topic.name}</h3>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="batches" className="py-24 sm:py-32 transition-colors duration-500" style={{ backgroundColor: activeColor + '1A' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Pick your battle.
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {topics.map((topic, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TopicCard topic={topic} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

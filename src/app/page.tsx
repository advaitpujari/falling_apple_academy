import { HeroSection } from '@/components/landing/hero-section';
import { BentoGridSection } from '@/components/landing/bento-grid-section';
import { MicroBatchSelector } from '@/components/landing/micro-batch-selector';
import { MaterialsShowcase } from '@/components/landing/materials-showcase';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGridSection />
      <MicroBatchSelector />
      <MaterialsShowcase />
    </>
  );
}

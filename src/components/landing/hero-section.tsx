'use client';

import { useRef, useEffect, useState } from 'react';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const [videoDuration, setVideoDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const posterImage = getPlaceholderImage('hero-background');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleMetadata = () => {
      setVideoDuration(video.duration);
      video.currentTime = 0;
    };
    
    video.addEventListener('loadedmetadata', handleMetadata);
    video.addEventListener('canplay', handleCanPlay);

    if (video.readyState >= 1) {
      handleMetadata();
    }
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    const handleScroll = () => {
      const section = sectionRef.current;
      const textContainer = textContainerRef.current;
      if (!section || !video || !textContainer || videoDuration === 0) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      if (scrollableHeight <= 0) return;

      let progress = -top / scrollableHeight;
      progress = Math.max(0, Math.min(1, progress));

      video.currentTime = progress * videoDuration;

      const textProgress = Math.min(1, progress / 0.5);
      const translateY = 100 * (1 - textProgress);
      const opacity = textProgress;
      
      if (textContainer) {
        textContainer.style.transform = `translateY(${translateY}%)`;
        textContainer.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (video) {
        video.removeEventListener('loadedmetadata', handleMetadata);
        video.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, [videoDuration]);

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="https://jee-data.s3.ap-south-1.amazonaws.com/The_scene_opens_1080p_202601301515.mp4"
          muted
          playsInline
          preload="metadata"
          poster={posterImage?.imageUrl}
          type="video/mp4"
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div 
          ref={textContainerRef}
          className="relative z-10 text-center text-white px-4"
          style={{ transform: 'translateY(100%)', opacity: 0 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            Physics, uncomplicated.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Have your Newton moment.
          </p>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        src="https://jee-data.s3.ap-south-1.amazonaws.com/The_scene_opens_1080p_202601301515-ezgif.com-cut.webp"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
          Physics, uncomplicated.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Have your Newton moment.
        </p>
      </div>
    </section>
  );
}

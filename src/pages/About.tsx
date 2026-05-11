export default function About() {
  return (
    <div className="animate-in fade-in duration-1000">
      <h1 className="text-[26px] font-light tracking-[0.05em] text-gray-400 mb-10">
        INTERIOR & FURNITURE DESIGN
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-16">
        {/* Left: Main Image */}
        <div className="w-full lg:w-2/3">
          <img 
            src="https://images.unsplash.com/photo-1629654157748-0388d74542bb?auto=format&fit=crop&q=80&w=1600&grayscale=true" 
            alt="Pippa Morray in her workshop" 
            className="w-full h-auto aspect-[4/3] object-cover" 
          />
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/3 pt-2">
          <h2 className="text-[20px] font-light tracking-[0.1em] text-gray-800 mb-6">
            ABOUT
          </h2>
          
          <div className="space-y-6 text-[14px] leading-[1.8] font-light text-gray-600">
            <p>
              Born and raised in and around London, Pippa Morray studied Interior Architecture at Chelsea School of Art, and gained her Masters in Design Products at the Royal College of Art. She took her design background to the forests of Northern England's Lake District, where she honed her craft shadowing master woodworkers.
            </p>
            <p>
              What was meant to be a two-week trip, ended up being three years as she fell in love with traditional and naturally sustainable crafts — right down to knowing a tree's history and using only local timber from windblown and dead trees, or trees felled for a good reason. There, she learned how to fell trees, mill them, season the wood, and work it with hand tools.
            </p>
            <p>
              In 2024, Pippa settled in Mexico City, where she works out a woodworking studio southeast of the city's historic center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

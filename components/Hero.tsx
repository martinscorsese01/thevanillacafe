import Image from 'next/image'

/**
 * Hero Section Component
 * Full-width hero with warm gradient overlay and call-to-action buttons
 */
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image - Café with burgundy car */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cafe-car-hero.png"
          alt="The Vanilla Pod Café exterior with vintage burgundy car"
          fill
          className="object-cover"
          priority
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif text-cream mb-4 drop-shadow-lg">
          The Vanilla Pod
        </h1>
        <p className="text-xl md:text-2xl text-cream mb-8 font-light tracking-wide">
          Café Patisserie · Hot & Cold Food
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="px-8 py-3 bg-burgundy text-cream rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="View our menu"
          >
            View Menu
          </a>
          <a
            href="#visit"
            className="px-8 py-3 border-2 border-cream text-cream rounded-full font-medium hover:bg-cream hover:text-burgundy transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Find our location"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-cream"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}


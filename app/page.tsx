import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import MenuCards from '@/components/MenuCards'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navigation />
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Section id="about" backgroundColor="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-warm">
            <Image
              src="/cafe-exterior.png"
              alt="The Vanilla Pod Café exterior with warm cream facade"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-charcoal leading-relaxed">
              <p>
                Nestled in the heart of the neighbourhood, The Vanilla Pod has been serving
                the community with passion and care since we first opened our doors. We believe
                that great food and great coffee bring people together, creating moments of
                connection and joy.
              </p>
              <p>
                Our patisserie showcases the finest artisan pastries, baked fresh daily with
                traditional techniques and the finest ingredients. From our signature brunch
                plates to our carefully crafted coffee, every detail matters.
              </p>
              <p>
                We're more than just a café—we're a gathering place where friends meet,
                families celebrate, and neighbours become friends.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-gold text-xl font-serif text-burgundy italic">
              "Your neighbourhood spot for good coffee, good food and good company."
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Menu Highlights Section */}
      <Section id="menu" backgroundColor="tan">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">
            Menu Highlights
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Discover our carefully curated selection of brunch classics, artisan pastries,
            and specialty beverages.
          </p>
        </div>
        <MenuCards />
      </Section>

      {/* Food Gallery Section */}
      <Section id="gallery" backgroundColor="cream">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">
            Food Gallery
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            A taste of what awaits you at The Vanilla Pod.
          </p>
        </div>
        <Gallery />
      </Section>

      {/* Visit Us Section */}
      <Section id="visit" backgroundColor="burgundy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-8">
              Visit Us
            </h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-serif text-gold mb-2">Opening Hours</h3>
                <div className="text-cream space-y-1">
                  <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 7:00 PM</p>
                  <p>Sunday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif text-gold mb-2">Contact</h3>
                <div className="text-cream space-y-1">
                  <p>17 White Hart St</p>
                  <p>High Wycombe HP11 2HL</p>
                  <p>Phone: 01494 531510</p>
                  <p>Email: hello@vanillapod.com</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/The+Vanilla+Pod+Cafe+Patisserie/@51.6298244,-0.7548095,17z/data=!3m1!4b1!4m6!3m5!1s0x487661d0c1bb658d:0x7684e500be463ec0!8m2!3d51.6298211!4d-0.7522292!16s%2Fg%2F11f4m4xf2f?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-cream text-burgundy rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-warm"
            >
              Get Directions
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-warm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.8893146539545!2d-0.7548095!3d51.6298244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487661d0c1bb658d%3A0x7684e500be463ec0!2sThe%20Vanilla%20Pod%20Cafe%20Patisserie!5e0!3m2!1sen!2suk!4v1701900000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="The Vanilla Pod location on Google Maps"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" backgroundColor="cream">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-4">
            What Our Guests Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The best brunch spot in town! The avocado toast is perfection, and the coffee is always spot-on.",
              author: "Sarah M.",
            },
            {
              quote: "A cosy haven with the most delicious pastries. The Vanilla Pod feels like home.",
              author: "James T.",
            },
            {
              quote: "Every visit is a treat. The warm atmosphere and incredible food keep us coming back.",
              author: "Emma L.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-tan p-8 rounded-2xl shadow-soft relative"
            >
              {/* Quote Icon */}
              <div className="text-gold text-4xl mb-4 opacity-50">"</div>
              <p className="text-charcoal leading-relaxed mb-4 italic">
                {testimonial.quote}
              </p>
              <p className="text-burgundy font-serif font-semibold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  )
}


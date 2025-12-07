import Image from 'next/image'

/**
 * Menu Highlights Component
 * Four featured cards showcasing different menu categories
 */
interface MenuItem {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

const menuItems: MenuItem[] = [
  {
    title: 'Brunch',
    description: 'Fresh, hearty brunch classics served all day',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    imageAlt: 'Avocado toast with soft-boiled eggs on rustic wooden table',
  },
  {
    title: 'Patisserie',
    description: 'Artisan cakes and pastries baked daily',
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    imageAlt: 'Artisan cake slices on white plate with warm lighting',
  },
  {
    title: 'Hot Food',
    description: 'Comforting hot meals made with care',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    imageAlt: 'Full English breakfast on white plate',
  },
  {
    title: 'Drinks',
    description: 'Specialty coffee and refreshing beverages',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    imageAlt: 'Latte art coffee in ceramic cup',
  },
]

export default function MenuCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2"
        >
          {/* Food Image */}
          <div className="relative h-64 w-full">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-2xl font-serif text-burgundy mb-2">
              {item.title}
            </h3>
            <p className="text-charcoal text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}






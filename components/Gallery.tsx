import Image from 'next/image'

/**
 * Food Gallery Component
 * Grid of food images with hover zoom effect
 */
interface GalleryImage {
  url: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    alt: 'Avocado toast with soft-boiled eggs, pine nuts, and black pepper',
  },
  {
    url: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&q=80',
    alt: 'Pancakes with fresh berries and maple syrup',
  },
  {
    url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    alt: 'Artisan chocolate cake slice on white plate',
  },
  {
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    alt: 'Full English breakfast with eggs, bacon, and toast',
  },
  {
    url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    alt: 'Latte art coffee in ceramic cup',
  },
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    alt: 'Fresh croissants and pastries on wooden board',
  },
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="relative h-80 w-full rounded-xl overflow-hidden shadow-soft group cursor-pointer"
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  )
}






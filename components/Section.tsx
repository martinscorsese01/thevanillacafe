import { ReactNode } from 'react'

/**
 * Reusable Section Component
 * Provides consistent spacing and background options
 */
interface SectionProps {
  children: ReactNode
  id?: string
  backgroundColor?: 'cream' | 'tan' | 'burgundy' | 'white'
  className?: string
}

export default function Section({
  children,
  id,
  backgroundColor = 'cream',
  className = '',
}: SectionProps) {
  const bgClasses = {
    cream: 'bg-cream',
    tan: 'bg-tan',
    burgundy: 'bg-burgundy text-cream',
    white: 'bg-white',
  }

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[backgroundColor]} ${className}`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  )
}






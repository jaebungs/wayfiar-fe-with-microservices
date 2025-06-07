import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AnchorProps {
  variant?: 'white' | 'purple'
  to: string
  children: string | ReactNode
  size?: '500' | '1000' | '2000' | '3000' | '4000' | '5000' | '6000' | '7000'
  className?: string
}

function Anchor({ variant = 'white', to, children, size = '1000', className = '' }: AnchorProps) {
  const baseStyles = 'transition-all duration-200'
  
  const variantStyles = {
    white: 'text-wayfair-white hover:text-wayfair-white hover:underline',
    purple: 'text-wayfair-dark hover:text-wayfair-purple hover:underline'
  }

  return (
    <Link 
      to={to} 
      className={`${baseStyles} text-${size} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

export default Anchor

  
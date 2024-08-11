'use client'

import React from 'react'
import {ProductCard} from './product-card'

interface Props {
  setTargetCategory: (value: string) => void
  title: string
  items: any[]
  className?: string
}

export const ProductsGroup: React.FC<Props> = ({title, items, setTargetCategory}) => {
  const targetRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTargetCategory(targetRef.current?.textContent || '')
        } else {
          console.log('observer off')
        }
      })
    })
    const currentTarget = targetRef.current
    if (currentTarget) observer.observe(currentTarget)
    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, setTargetCategory])

  return (
    <>
      <h2 ref={targetRef} className='font-bold text-[32px]'>
        {title}
      </h2>

      <ul className='grid grid-cols-3 gap-[50px]'>
        {items.map((item, i) => (
          <li key={`${i}${item.name}`}>
            <ProductCard
              id={item.id}
              name={item.name}
              price={item.price[0]}
              count={item.count}
              imageUrl={item.imageUrl}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

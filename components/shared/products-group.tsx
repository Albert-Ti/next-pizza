'use client'

import React from 'react'
import {ProductCard} from './product-card'
import {observer} from '@/lib/utils'
import {useCategoriesStore} from '../store/categories'

interface Props {
  title: string
  items: any[]
  className?: string
}

export const ProductsGroup: React.FC<Props> = ({title, items}) => {
  const targetRef = React.useRef(null)
  const setCategoryName = useCategoriesStore(state => state.updateCategoryName)

  React.useEffect(() => {
    const cleanup = observer(targetRef.current!, setCategoryName)
    return cleanup
  }, [targetRef, setCategoryName])

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

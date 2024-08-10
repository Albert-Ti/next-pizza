import React from 'react'
import {ProductCard} from './product-card'
import {Title} from './title'

interface Props {
  title: string
  items: any[]
  className?: string
}

export const ProductsGroup: React.FC<Props> = ({title, items, className}) => {
  return (
    <>
      <Title className='font-bold' size='lg' text={title} />

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

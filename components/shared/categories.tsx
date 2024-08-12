import {cn} from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import {useCategoriesStore} from '../store/categories'

type Props = {
  className?: string
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты', 'Десерты']

export const Categories: React.FC<Props> = ({className}) => {
  const categoryName = useCategoriesStore(state => state.categoryName)

  return (
    <ul className={cn('inline-flex gap-1 p-1 bg-gray-50 rounded-2xl', className)}>
      {cats.map((cat, i) => (
        <li
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryName === cat && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          key={i}
        >
          <Link className='font-normal' href='#'>
            {cat}
          </Link>
        </li>
      ))}
    </ul>
  )
}

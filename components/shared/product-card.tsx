import {Plus} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {Button} from '../ui'
import {Title} from './title'

export type ProductProps = {
  id: number
  name: string
  price: number
  count: number
  imageUrl: string
  className?: string
}

export const ProductCard: React.FC<ProductProps> = ({id, name, count, imageUrl, price, className}) => {
  return (
    <figure className={className}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
        </div>
      </Link>

      <figcaption>
        <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
        <p className='text-sm text-gray-400'>
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>
      </figcaption>

      <div className='flex justify-between items-center mt-4'>
        <span className='text-[20px]'>
          от <b>{price} ₽</b>
        </span>

        <Button variant='secondary'>
          <Plus className='mr-1' size={20} />
          Добавить
        </Button>
      </div>
    </figure>
  )
}

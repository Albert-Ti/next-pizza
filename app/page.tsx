'use client'

import {Container, Filters, ProductsGroup, TopBar} from '@/components/shared'
import {Title} from '@/components/shared/title'
import React from 'react'

export default function Home() {
  const [targetCategory, setTargetCategory] = React.useState('')

  return (
    <>
      <Container className='mt-10'>
        <Title className='font-extrabold' size='lg' text={'Все пиццы'} />
      </Container>

      <TopBar targetCategory={targetCategory} />

      <Container className='mt-10'>
        <div className='flex gap-[80px]'>
          {/* фильтрация */}
          <Filters />

          {/* Список товаров */}
          <div className='flex flex-1 flex-col gap-16'>
            <ProductsGroup
              setTargetCategory={setTargetCategory}
              title='Пиццы'
              items={[
                {
                  id: 1,
                  name: 'Сырная',
                  price: ['550'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Сырная',
                  price: ['550'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Сырная',
                  price: ['550'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Сырная',
                  price: ['550'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp',
                  count: 0,
                },
              ]}
            />

            <ProductsGroup
              setTargetCategory={setTargetCategory}
              title='Закуски'
              items={[
                {
                  id: 1,
                  name: 'Дэнвич ветчина и сыр',
                  price: ['279'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Дэнвич ветчина и сыр',
                  price: ['279'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Дэнвич ветчина и сыр',
                  price: ['279'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Дэнвич ветчина и сыр',
                  price: ['279'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.avif',
                  count: 0,
                },
              ]}
            />

            <ProductsGroup
              setTargetCategory={setTargetCategory}
              title='Напитки'
              items={[
                {
                  id: 1,
                  name: 'Какао',
                  price: ['129'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE79702DC5EA0EBF92E2483DB89B11.avif',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Какао',
                  price: ['129'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE79702DC5EA0EBF92E2483DB89B11.avif',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Какао',
                  price: ['129'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE79702DC5EA0EBF92E2483DB89B11.avif',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Какао',
                  price: ['129'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE79702DC5EA0EBF92E2483DB89B11.avif',
                  count: 0,
                },
                {
                  id: 1,
                  name: 'Какао',
                  price: ['129'],
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE79702DC5EA0EBF92E2483DB89B11.avif',
                  count: 0,
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

import React from 'react'
import {Title} from './title'
import {FilterCheckbox} from './filter-checkbox'
import {Input} from '../ui'
import {RangeSlider} from './range-slider'
import {FilterIngredients} from './filter-ingredients'

const ingredients = [
  {
    text: 'Сырный соус',
    value: '3',
  },
  {
    text: 'Моццарелла',
    value: '4',
  },
  {
    text: 'Чеснок',
    value: '5',
  },
  {
    text: 'Солённые огурчики',
    value: '6',
  },
  {
    text: 'Красный лук',
    value: '7',
  },
  {
    text: 'Томаты',
    value: '8',
  },
]

export const Filters: React.FC = () => {
  return (
    <div>
      <Title className='mb-5 font-bold' text='Фильтрация' size='sm' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' min={100} max={1000} defaultValue={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <FilterIngredients title='Ингредиенты' items={ingredients} defaultItems={ingredients} />
    </div>
  )
}

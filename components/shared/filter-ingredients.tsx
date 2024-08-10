'use client'

import React from 'react'
import {Button, Input} from '../ui'
import {FilterCheckbox, FilterCheckboxProps} from './filter-checkbox'
import {Title} from './title'

type Props = {
  title: string
  items: FilterCheckboxProps[]
  defaultItems?: FilterCheckboxProps[]
  limit?: number
  searchInputPlaceholder?: string
  className?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
}

export const FilterIngredients: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 4,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,
}) => {
  const [showAllIngredients, setShowAllIngredients] = React.useState<number>(limit)
  const [searchIngredients, setSearchIngredients] = React.useState<string>('')

  const handleSearchIngredients = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIngredients(e.target.value)
  }

  const filtered = items.filter(item =>
    item.text.toLowerCase().includes(searchIngredients.toLowerCase())
  )

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-3">
        <Title className="font-bold" size="xs" text={title} />
        {items.length > showAllIngredients ? (
          <Button
            variant="ghost"
            className="text-primary cursor-pointer"
            onClick={() => setShowAllIngredients(items.length)}
          >
            показать все +{items.slice(4).length}
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="text-primary cursor-pointer"
            onClick={() => setShowAllIngredients(limit)}
          >
            скрыть
          </Button>
        )}
      </div>

      {items.length === showAllIngredients && (
        <div className="mb-5">
          <Input
            className="bg-gray-50 border-none"
            onChange={handleSearchIngredients}
            placeholder={searchInputPlaceholder}
          />
        </div>
      )}

      <ul className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {filtered.slice(0, showAllIngredients).map((item, i) => (
          <li key={`${i}${item.text}`}>
            <FilterCheckbox
              text={item.text}
              value={item.value}
              onCheckedChange={e => console.log(e)}
              checked={false}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

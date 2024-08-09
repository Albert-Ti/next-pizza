import {cn} from '@/lib/utils'
import {ArrowUpDown} from 'lucide-react'
import React from 'react'

export const SortPopup: React.FC = () => {
  return (
    <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer')}>
      <ArrowUpDown size={16} />
      <span>Сортировка:</span>
      <span className='text-primary'>По популярности</span>
    </div>
  )
}

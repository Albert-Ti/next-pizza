import React from 'react'
import {Categories} from './categories'
import {Container} from './container'
import {SortPopup} from './sort-popup'

type Props = {
  targetCategory: string
}

export const TopBar: React.FC<Props> = ({targetCategory}) => {
  return (
    <>
      <div className='sticky top-0 py-3 shadow-black/5 z-10 opacity-[0.95]'>
        <Container>
          <nav className='flex justify-between'>
            <Categories targetCategory={targetCategory} />
            <SortPopup />
          </nav>
        </Container>
      </div>
    </>
  )
}

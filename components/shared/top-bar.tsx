import React from 'react'
import {Categories} from './categories'
import {Container} from './container'
import {SortPopup} from './sort-popup'

export const TopBar: React.FC = () => {
  return (
    <>
      <div className='sticky top-0 py-3 shadow-black/5 z-10'>
        <Container>
          <nav className='flex justify-between'>
            <Categories />
            <SortPopup />
          </nav>
        </Container>
      </div>
    </>
  )
}

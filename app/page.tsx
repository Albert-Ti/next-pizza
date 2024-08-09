import {Categories, Container, SortPopup} from '@/components/shared'
import {Title} from '@/components/shared/title'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title className='font-extrabold' size='lg' text={'Все пиццы'} />

        <nav>
          <Categories />
          <SortPopup />
        </nav>
      </Container>
    </>
  )
}

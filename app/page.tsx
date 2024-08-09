import {Container, TopBar} from '@/components/shared'
import {Title} from '@/components/shared/title'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title className='font-extrabold' size='lg' text={'Все пиццы'} />
      </Container>

      <TopBar />

      <div className='h-[3000px]'></div>
    </>
  )
}

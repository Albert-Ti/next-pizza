import {Container, Filters, TopBar} from '@/components/shared'
import {Title} from '@/components/shared/title'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title className='font-extrabold' size='lg' text={'Все пиццы'} />
      </Container>

      <TopBar />

      <Container className='mt-10'>
        <div className='flex gap-[60px]'>
          {/* фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  )
}

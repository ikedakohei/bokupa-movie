import { Container } from '@/components/Container'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white lg:py-5">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div
          style={{ fontFamily: 'Nico Moji' }}
          className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap py-4 text-xl text-gray-900 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:py-0"
        >
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>Our House Party</p>
          </div>
        </div>
      </Container>
    </header>
  )
}

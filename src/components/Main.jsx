import { Container } from '@/components/Container'
import { Outline } from '@/components/Outline'
import Image from 'next/future/image'
import titleImage from '@/images/bhp_title.webp'
import mainImage from '@/images/main.webp'

export function Main() {
  return (
    <div className="relative">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <Image className="mx-auto" src={titleImage} alt="" />
          <Image className="mx-auto pb-10" src={mainImage} alt="" />
          <Outline />
        </div>
      </Container>
    </div>
  )
}

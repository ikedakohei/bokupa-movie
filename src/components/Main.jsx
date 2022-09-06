import { Container } from '@/components/Container'
import { Outline } from '@/components/Outline'
import Image from 'next/future/image'
import titleImage from '@/images/bhp_title.png'
import mainImage from '@/images/main.jpg'

export function Main() {
  return (
    <div className="relative pb-24">
      <div className="bg-white-50 absolute inset-x-0 -top-48 -bottom-14 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
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

import Image from 'next/future/image'
import { Container } from '@/components/Container'
import titleImage from '@/images/bhp_title.webp'

export function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <Container className="flex flex-col items-center justify-center md:flex-row">
        <Image
          loading={'eager'}
          src={titleImage}
          alt=""
          className="h-12 w-auto text-slate-900"
        />
        <p className="mt-6 font-sans text-xs text-slate-500 md:mt-0 md:ml-8">
          Copyright &copy; 野辺組
        </p>
      </Container>
    </footer>
  )
}

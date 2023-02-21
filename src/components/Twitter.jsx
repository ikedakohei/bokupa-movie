import { Container } from '@/components/Container'

export function Twitter() {
  return (
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <div
          id="twitter"
          className="space-y-6 pt-20 font-sans text-lg tracking-tight text-gray-900 md:pt-32"
        >
          <a className="twitter-timeline" data-lang="ja" data-theme="light" href="https://twitter.com/BokupaM?ref_src=twsrc%5Etfw" />
        </div>
      </div>
    </Container>
  )
}

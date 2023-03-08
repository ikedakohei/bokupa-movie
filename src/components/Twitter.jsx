import { Container } from '@/components/Container'

export function Twitter() {
  return (
    <Container className="relative">
      <div className="flex justify-center">
        <h2 className="mt-20 font-kaisei text-4xl tracking-tighter text-gray-900 md:mt-32">
          SNS
        </h2>
      </div>
      <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl lg:px-12">
        <div
          id="twitter"
          className="space-y-6 font-sans text-lg tracking-tight text-gray-900"
        >
          <a
            className="twitter-timeline"
            data-lang="ja"
            data-theme="light"
            href="https://twitter.com/BokupaM?ref_src=twsrc%5Etfw"
          />
        </div>
      </div>
    </Container>
  )
}

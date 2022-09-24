import Head from 'next/head'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>映画 『ボクらのホームパーティー』 公式サイト | 劇場情報</title>
      </Head>
      <div>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-grow">
            <Container className="relative">
              <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
                <div
                  id="outline"
                  className="space-y-6 pt-20 font-sans text-lg tracking-tight text-gray-900 md:pt-32"
                >
                  <div className="flex justify-center">
                    <h2 className="mb-4 px-2 pb-2 font-kaisei text-3xl tracking-tighter text-gray-900 sm:text-4xl">
                      劇場情報
                    </h2>
                  </div>
                  <p className="text-center text-2xl">作成中...</p>
                </div>
              </div>
            </Container>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

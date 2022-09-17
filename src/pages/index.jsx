import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'

export default function Home() {
  return (
    <>
      <Head>
        <title>映画『ボクらのホームパーティー』公式サイト</title>
        <meta name="description" content="ボクらのホームパーティー" />
      </Head>
      <Header />
      <main>
        <Main />
        <Casts />
        <Staffs />
      </main>
      <Footer />
    </>
  )
}

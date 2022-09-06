import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
// import { Newsletter } from '@/components/Newsletter'
// import { Schedule } from '@/components/Schedule'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'
// import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>ボクらのホームパーティー</title>
        <meta name="description" content="ボクらのホームパーティー" />
      </Head>
      <Header />
      <main>
        <Main />
        <Casts />
        <Staffs />
        {/* <Schedule /> */}
        {/* <Sponsors /> */}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}

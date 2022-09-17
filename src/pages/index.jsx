import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Loader } from '@/components/Loader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    setTimeout(() => {setIsLoading(false)}, 2000);
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
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
    </div>
  );
}

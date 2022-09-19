import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Loader } from '@/components/Loader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();
  const castsRef = useRef(null);

  useEffect (() => {
    setTimeout(() => {
      setIsLoading(false);

      if (router.asPath === '#casts') {
        castsRef?.current?.scrollIntoView();
      }

    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>映画『ボクらのホームパーティー』公式サイト</title>
        <meta name="description" content="ボクらのホームパーティー" />
      </Head>
      <div>
        {isLoading && <Loader />}
        <Header />
        <main>
          <Main />
          <div ref={castsRef} />
          <Casts />
          <Staffs />
        </main>
        <Footer />
      </div>
    </>
  );
}

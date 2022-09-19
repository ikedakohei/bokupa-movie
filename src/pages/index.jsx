import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import Head from 'next/head'
import { Loader } from '@/components/Loader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    setTimeout(() => {
      setIsLoading(false);
      const hashContent = router.asPath.split('#')[1] ?? '';

      if (hashContent !== '' && router.isReady) {
        router.push({ pathname: router.pathname, hash: hashContent });
      }
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

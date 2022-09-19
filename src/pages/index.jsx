import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import { Loader } from '@/components/Loader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Outline } from '@/components/Outline'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter();
  const outlineRef = useRef(null);
  const castsRef = useRef(null);
  const staffsRef = useRef(null);

  useEffect (() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useLayoutEffect(() => {
      if (isLoading === false) {
        if (router.asPath === '/#outline') {
          outlineRef?.current?.scrollIntoView();
        } else if (router.asPath === '/#casts') {
          castsRef?.current?.scrollIntoView();
        } else if (router.asPath === '/#staffs') {
          staffsRef?.current?.scrollIntoView();
        }
      }
  }, [isLoading, router.asPath]);

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
          <div ref={outlineRef} />
          <Outline />
          <div ref={castsRef} />
          <Casts />
          <div ref={staffsRef} />
          <Staffs />
        </main>
        <Footer />
      </div>
    </>
  );
}

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Loader } from '@/components/Loader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Outline } from '@/components/Outline'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'

import ogpImage from '@/images/bhp_title.webp'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()
  const mainRef = useRef(null)
  const outlineRef = useRef(null)
  const castsRef = useRef(null)
  const staffsRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  useLayoutEffect(() => {
    if (isLoading === true) return

    if (router.asPath === '/') {
      mainRef?.current?.scrollIntoView()
    } else if (router.asPath === '/#outline') {
      outlineRef?.current?.scrollIntoView()
    } else if (router.asPath === '/#casts') {
      castsRef?.current?.scrollIntoView()
    } else if (router.asPath === '/#staffs') {
      staffsRef?.current?.scrollIntoView()
    }
  }, [isLoading, router.asPath])

  return (
    <>
      <Head>
        <title>映画 『ボクらのホームパーティー』 公式サイト</title>
        <meta name="description" content="ボクらのホームパーティー" />
        <meta property="og:url" content="https://bokupa-movie.com" />
        <meta
          property="og:title"
          content="映画 『ボクらのホームパーティー』 公式サイト"
        />
        <meta
          property="og:site_name"
          content="映画 『ボクらのホームパーティー』 公式サイト"
        />
        <meta
          property="og:description"
          content="川野邉修一監督自身の経験を基に、とあることから集まる7人のゲイ(男性同性愛者)によるホームパーティーを舞台とし、それぞれの生活や葛藤、また、友人・恋人・家族などの多様な人間模様を描いていく。"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.gyazo.com/8d70e304e4716c8fba20e0412aff0cec.jpg"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="256" />
      </Head>
      <div>
        {isLoading && <Loader />}
        <div ref={mainRef} />
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
  )
}

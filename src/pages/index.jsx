import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Loader } from '@/components/Loader'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { DirectorMessage } from '@/components/DirectorMessage'
import { Outline } from '@/components/Outline'
import { Staffs } from '@/components/Staffs'
import { Casts } from '@/components/Casts'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()
  const mainRef = useRef(null)
  const outlineRef = useRef(null)
  const castsRef = useRef(null)
  const staffsRef = useRef(null)

  useEffect(() => {
    document.querySelector('body').classList.add('overflow-hidden')

    if (!isLoading) {
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  }, [isLoading])

  useEffect(() => {
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
      </Head>
      <div>
        {isLoading && <Loader />}
        <div ref={mainRef} />
        <Header />
        <main>
          <Main setIsLoading={setIsLoading} />
          <DirectorMessage />
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

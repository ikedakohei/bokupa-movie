import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/future/image'
import titleImage from '@/images/bhp_title.webp'
import mainImage from '@/images/main.webp'
import foodsImage from '@/images/foods.webp'

export const Main = ({ setIsLoading }) => {
  const [titleImageLoadingComplete, setTitleImageLoadingComplete] =
    useState(false)
  const [mainImageLoadingComplete, setMainImageLoadingComplete] =
    useState(false)
  const [foodsImageLoadingComplete, setFoodsImageLoadingComplete] =
    useState(false)

  useEffect(() => {
    if (
      titleImageLoadingComplete &&
      mainImageLoadingComplete &&
      foodsImageLoadingComplete
    ) {
      setIsLoading(false)
    }
  }, [
    foodsImageLoadingComplete,
    mainImageLoadingComplete,
    setIsLoading,
    titleImageLoadingComplete,
  ])

  return (
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <Image
          onLoadingComplete={() => {
            setTitleImageLoadingComplete(true)
          }}
          loading={'eager'}
          className="mx-auto py-5"
          src={titleImage}
          alt=""
        />
        <div className="pb-6 text-center font-kaisei text-2xl leading-8">
          <h2>
            2023年3月18日(土)より
            <br />
            シネマスコーレ(名古屋)
            <br />
            にて上映決定！
          </h2>
        </div>
        <Image
          onLoadingComplete={() => {
            setMainImageLoadingComplete(true)
          }}
          loading={'eager'}
          className="mx-auto mb-2"
          src={mainImage}
          alt=""
        />
        <div className="mx-auto max-w-xs text-center font-sans sm:max-w-xl">
          <p>川野邉修一 監督作品</p>
          <div className="my-2">
            <div className="mr-2 inline-block">橋詰高志</div>
            <div className="mr-2 inline-block">景山慶一</div>
            <div className="mr-2 inline-block">松本亮</div>
            <div className="mr-2 inline-block">横路博</div>
            <div className="mr-2 inline-block">卯ノ原圭吾</div>
            <div className="mr-2 inline-block">窪田翔</div>
            <div className="inline-block">井之浦亮介</div>
          </div>
          <div className="my-2 mx-auto text-xs sm:text-sm">
            <div className="mr-2 inline-block">古矢航之介</div>
            <div className="mr-2 inline-block">ふぁそら</div>
            <div className="mr-2 inline-block">がいママ</div>
            <div className="mr-2 inline-block">坪井東</div>
            <div className="mr-2 inline-block">ヒノ影アラン</div>
            <div className="mr-2 inline-block">江南知幸</div>
            <div className="mr-2 inline-block">宮寺貴也</div>
            <div className="mr-2 inline-block">成瀬清春</div>
            <div className="mr-2 inline-block">飯川瑠夏</div>
            <div className="mr-2 inline-block">見里瑞穂</div>
            <div className="mr-2 inline-block">鈴木拓磨</div>
            <div className="mr-2 inline-block">阪東ゆう</div>
            <div className="mr-2 inline-block">井上蓮</div>
            <div className="mr-2 inline-block">藤松祥子</div>
            <div className="inline-block">永里健太郎</div>
          </div>
          <div className="mx-auto mt-2 text-xs sm:hidden">
            <div>撮影: 猪本雅三 / 撮影助手(照明): 新里勝也</div>
            <div>録音: 安光雪江 / 編集・演出助手: 野坂拓彰</div>
            <div>制作: 村田潤 / 整音: 東凌太郎</div>
            <div>音楽: 礒﨑祥吾 / スチール: Sai</div>
            <div>衣装: 福原佐和子 / メイク: 東村忠明</div>
            <div>タイトルモーション: 藤林久哉</div>
            <div>タイトルデザイン: obktc</div>
            <div>劇中曲: DJ SHINKAWA、御中レコード</div>
          </div>
          <div className="mx-auto mt-2 hidden text-sm sm:block">
            <div>
              撮影: 猪本雅三 / 撮影助手(照明): 新里勝也 / 録音: 安光雪江
            </div>
            <div>
              編集・演出助手: 野坂拓彰 / 制作: 村田潤 / 整音: 東凌太郎 / 音楽:
              礒﨑祥吾
            </div>
            <div>スチール: Sai / 衣装: 福原佐和子 / メイク: 東村忠明</div>
            <div>タイトルモーション: 藤林久哉 / タイトルデザイン: obktc</div>
            <div>劇中曲: DJ SHINKAWA、御中レコード</div>
          </div>
        </div>
        <Image
          onLoadingComplete={() => {
            setFoodsImageLoadingComplete(true)
          }}
          loading={'eager'}
          className="mx-auto mt-0 mb-2 pt-0"
          src={foodsImage}
          alt=""
        />
        <div className="gap mx-4 mt-10 grid grid-cols-3 justify-center gap-x-2 gap-y-2 font-kaisei lg:hidden">
          <Link
            href="https://bokupa-movie-news.tumblr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-cyan-500 p-2 text-center text-xs text-white hover:bg-cyan-700 sm:text-base"
          >
            NEWS
          </Link>
          <Link
            href="/#outline"
            className="rounded bg-cyan-500 p-2 text-center text-xs text-white hover:bg-cyan-700 sm:text-base"
          >
            あらすじ
          </Link>
          <Link
            href="/#casts"
            className="rounded bg-cyan-500 p-2 text-center text-xs text-white hover:bg-cyan-700 sm:text-base"
          >
            キャスト
          </Link>
          <Link
            href="/#staffs"
            className="rounded bg-cyan-500 p-2 text-center text-xs text-white hover:bg-cyan-700 sm:text-base"
          >
            スタッフ
          </Link>
          <Link
            href="/theaters"
            className="rounded bg-cyan-500 p-2 text-center text-xs text-white hover:bg-cyan-700 sm:text-base"
          >
            劇場情報
          </Link>
          <Link
            href="/campaigns"
            className="rounded bg-cyan-500 p-2 text-center text-xs text-white hover:bg-cyan-700 sm:text-base"
          >
            キャンペーン
          </Link>
        </div>
        <div className="pt-20 md:pt-32">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/w9G1VMNBGAA"
            title="ボクらのホームパーティー"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  )
}

import { Container } from '@/components/Container'
import { Outline } from '@/components/Outline'
import Image from 'next/future/image'
import titleImage from '@/images/bhp_title.webp'
import mainImage from '@/images/main.webp'
import foodsImage from '@/images/foods.webp'

export function Main() {
  return (
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <Image className="mx-auto" src={titleImage} alt="" />
        <div className="pb-6 text-center font-kaisei text-2xl leading-8">
          <h2>
            K{"'"}s cinema新宿にて
            <br />
            2022年11月19日（土）
            <br />
            より劇場公開
          </h2>
        </div>
        <Image className="mx-auto mb-2" src={mainImage} alt="" />
        <div className="mx-auto max-w-xs text-center font-sans">
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
          <div className="my-2 mx-auto text-xs">
            <div className="mr-2 inline-block">古矢航之介</div>
            <div className="mr-2 inline-block">宮崎勇希</div>
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
          <div className="mx-auto mt-2 text-xs">
            <div>撮影: 猪本雅三 / 撮影助手(照明): 新里勝也</div>
            <div>録音: 安光雪江 / 編集・演出助手: 野坂拓彰</div>
            <div>制作: 村田潤 / 整音: 東凌太郎</div>
            <div>音楽: 礒﨑祥吾 / スチール: Sai</div>
            <div>衣装: 福原佐和子 / メイク: 東村忠明</div>
            <div>タイトルモーション: 藤林久哉</div>
            <div>タイトルデザイン: obktc</div>
            <div>劇中曲: DJ SHINKAWA、御中レコード</div>
          </div>
        </div>
        <Image className="mx-auto mt-0 mb-2 pt-0" src={foodsImage} alt="" />
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

import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import tomoyaImage from '@/images/casts/tomoya.webp'
import shoichiImage from '@/images/casts/shoichi.webp'
import masashiImage from '@/images/casts/masashi.webp'
import naokiImage from '@/images/casts/naoki.webp'
import akitoImage from '@/images/casts/akito.webp'
import yasushiImage from '@/images/casts/yasushi.webp'
import kenichiImage from '@/images/casts/kenichi.webp'

const casts = [
  {
    name: '橋詰 高志',
    role: '智也 役',
    description: (
      <>
        <p className="mb-1">1994年1月2日、福井県出身。</p>
        <p>
          劇団青年座研究所（41期）を卒業し、舞台を中心に活動。
          過去の出演作は、世田谷シルク『青い鳥』（2019/演出
          堀川炎）、『発見』（2020/ 作・演出
          藤井治香）、『東京ディグ/ライズ2』（2020/演出・振付
          北尾亘）、劇団ワンツーワークスの『ジレンマジレンマ』（2021/作・演出
          古城十忍）。 劇団道学先生の「おとうふ」（2021 / 作 中島淳彦、演出
          青山勝）の出演を控える。 本作が映画初出演となる。
        </p>
      </>
    ),
    image: tomoyaImage,
  },
  {
    name: '井之浦 亮介',
    role: '将一 役',
    description: (
      <>
        <p className="mb-1">1988年8月25日、群馬県出身。</p>
        <p>
          映像を中心に活動。
          過去の出演作は、『続・悪い女はよく眠る』（2017/作・演出
          萩庭貞明）、『太った指』（2018/瀬川哲郎監督）、『脚本が書けない』（2019/佐藤賢国監督）、『2020年
          東京。12人の役者たち』『パレット』（2020/松本動監督）、『佐々木、イン、マイマイン』（2020/内山拓也監督）に出演。
        </p>
      </>
    ),
    image: shoichiImage,
  },
  {
    name: '卯ノ原 圭吾',
    role: '正志 役',
    description: (
      <>
        <p className="mb-1">1993年6月9日、東京都出身。</p>
        <p>
          エコーズ所属。また別に所属しているインベストアクターズ集団『ワークデザインスタジオ』では数多くの映画にメイン出演をしている。
          明治大学シェイクスピアプロジェクト『ヘンリー四世』（2013/演出
          新井ひかる）のオーディションにより、初舞台にして主役であるハル王子役に抜擢。
          以降、ドラマや舞台、CMで幅広く活動を続けている。
          代表作として、『仮面ライダーエグゼイド』（2017）、『ドクターXシーズン6』（2019）、『Blue』（2021/
          吉田恵輔監督）などがある。
        </p>
      </>
    ),
    image: masashiImage,
  },
  {
    name: '窪田 翔',
    role: '直樹 役',
    description: (
      <>
        <p className="mb-1">1993年1月11日、和歌山県出身。</p>
        <p>
          NSC38期卒業後、役者に転身。以後、舞台・映画を中心に活動。
          2020年は6本の自主映画に出演し短編映画「帰る」（監督
          徐イヴァン）では主演を務める。
          また、伝説のロックバンドアナーキーの自伝的物語『GOLDFISH』（2023年公開予定/監督
          藤沼伸一）にも出演。
        </p>
      </>
    ),
    image: naokiImage,
  },
  {
    name: '景山 慶一',
    role: '彰人 役',
    description: (
      <>
        <p className="mb-1">1987年8月5日、兵庫県神戸市出身。</p>
        <p>
          フリーランスで映像、舞台を中心に活動。
          『僕だってヒーローになりたかった』（2017/ 作・演出
          鈴木おさむ）、『平成物語』（2018/松本花奈監督）、BMWショートフィルム『青い手』（2019/中山
          有監督）、『根矢涼香、映画監督になる。』（2020/上村奈帆監督）、川島あいMV『Home』（2020）、LONGMAN
          MV『Hello
          Youth』（2021）、音楽ドラマ『TORCH」（2021/留置太輔監督）などに出演。
        </p>
      </>
    ),
    image: akitoImage,
  },
  {
    name: '松本 亮',
    role: '靖 役',
    description: (
      <>
        <p className="mb-1">1987年1月8日、神奈川県横浜市出身。</p>
        <p>
          劇団扉座に所属し2016年に退団するまで劇団員としてほぼ全ての劇団公演に出演。
          KAKUTA『ひとよ（再演）』（2015年/作・演出
          桑原裕子）、ロロ『父母姉僕弟君』（2017年/作・演出
          三浦直之）、劇団桟敷童子『獣唄』（2019年/作 サジキドウジ、演出
          東憲司）、ONEOR8『グレーのこと』（2017年・2021年/ 作・演出
          田村孝裕）、iaku『逢いにいくの、雨だけど』（2018年・2021年/作・演出
          横山拓也）など数多くの劇団公演や、TBS『俺節』（2019年/作・演出
          福原充則）等のプロデュース公演にも出演。
          映像作品では映画『ダンスウィズミー』（2019年/監督
          矢口史靖）、『窮鼠はチーズの夢を見る』（2020年/監督 行定
          勲）、大河ドラマ『青天を衝け』、TX『珈琲いかがでしょう』に出演。
          ほかにも、映画『辰巳』（監督 小路紘史）の公開も控えている。
        </p>
      </>
    ),
    image: yasushiImage,
  },
  {
    name: '横路 博',
    role: '健一 役',
    description: (
      <>
        <p className="mb-1">1989年2月25日、広島県尾道市出身。</p>
        <p>
          モデル・俳優として映画やCM、舞台に出演。
          大手飲料メーカーや大手製薬会社の広告等に多数出演し、テレビ東京土曜ドラマ9「サイレント・ヴォイスSeason2」（2020）、また、八王子shortfilm映画祭観客賞受賞の『ハチワン結婚相談所』（2020/こだかさり監督）にも出演。
        </p>
      </>
    ),
    image: kenichiImage,
  },
]

export function Casts() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <section
        id="casts"
        aria-labelledby="casts-title"
        className="py-20 sm:py-32"
      >
        <Container className="relative">
          <div className="mx-auto">
            <h2
              id="casts-title"
              className="font-serif mb-14 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl"
            >
              キャスト
            </h2>
          </div>
          <div className="font-sans grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 [&:not(:focus-visible)]:focus:outline-none">
            {casts.map((cast, castIndex) => (
              <div key={castIndex}>
                <div className="group relative mx-auto h-[20rem] transform overflow-hidden rounded-4xl md:w-80">
                  <div
                    className={clsx(
                      'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border xl:right-6',
                      [
                        'border-blue-300',
                        'border-indigo-300',
                        'border-sky-300',
                      ][castIndex % 3]
                    )}
                  />
                  <div className="absolute inset-0 bg-indigo-50">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={cast.image}
                      alt=""
                      priority
                      sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <h3 className="mt-8 text-center text-xl font-bold tracking-tight text-slate-900">
                  {cast.name}
                </h3>
                <p className="mt-1 text-center text-base tracking-tight text-slate-500">
                  {cast.role}
                </p>
                <div className="mt-1 text-lg tracking-tight text-slate-900">
                  {cast.description}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

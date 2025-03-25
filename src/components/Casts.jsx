import { useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { CastsAndStaffsModal } from '@/components/CastsAndStaffsModal'

import tomoyaImage from '@/images/casts/tomoya.webp'
import shoichiImage from '@/images/casts/shoichi.webp'
import masashiImage from '@/images/casts/masashi.webp'
import naokiImage from '@/images/casts/naoki.webp'
import akitoImage from '@/images/casts/akito.webp'
import yasushiImage from '@/images/casts/yasushi.webp'
import kenichiImage from '@/images/casts/kenichi.webp'

import cast01Image from '@/images/casts/01_cast.webp'
import cast02Image from '@/images/casts/02_cast.webp'
import cast03Image from '@/images/casts/03_cast.webp'
import cast04Image from '@/images/casts/04_cast.webp'
import cast05Image from '@/images/casts/05_cast.webp'
import cast06Image from '@/images/casts/06_cast.webp'
import cast07Image from '@/images/casts/07_cast.webp'
import cast08Image from '@/images/casts/08_cast.webp'
import cast09Image from '@/images/casts/09_cast.webp'
import cast10Image from '@/images/casts/10_cast.webp'
import cast11Image from '@/images/casts/11_cast.webp'

const casts = [
  {
    name: '橋詰 高志',
    role: '智也 役',
    description: (
      <>
        <p className="mb-1">1994年1月2日、福井県出身。</p>
        <p>
          劇団青年座研究所（41期）を卒業し、舞台を中心に活動。
          過去の出演作は、世田谷シルク『青い鳥 』（2019/演出
          堀川炎）、『発見』（2020/ 作・演出
          藤井治香）、『東京ディグ/ライズ2』（2020/演出 ・振付
          北尾亘）、劇団ワンツーワークス『恐怖がやってくる』（2021/作・演出
          古城十忍）、劇団道 学先生『おとうふ』（2021 / 作 中島淳彦、演出
          青山勝）など。 本作が映画初出演となる。
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
          過去の出演作は、『続・悪い女はよく眠る』、（2017/作・演出
          萩庭貞明）、『2020年 東京。
          12人の役者たち』『パレット』（2020/松本動監督）、『佐々木、イン、マイマ
          イン』（2020/内山拓也監督）に出演。
        </p>
        <p>
          近年では映像作家として活動を開始し、積極的に短編映画を制作、公開を行う。
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
          明治大学シェイクスピアプロジェクト「ヘンリー四世」主役ハル王子役で初舞台を踏む。
          『就活家族〜きっと、うまくいく〜』（17/EX）にてドラマデビュー。
        </p>
        <p>
          『仮面ライダーエグゼイド』（17/EX）『ドクターX
          〜外科医・大門未知子〜』（19,21/EX）では2
          シーズンに渡ってレギュラー出演した。最近では『六本木クラス』（22/EX）にも出演。
          映画では、石巻の震災を舞台にした『3653の旅』（22/野本梢監督）が池袋シネマロサにて2週間
          上映。4つの短編を同時上映した『Hakushi
          project』（22/野本梢監督、土屋哲彦監
          督、加藤大志監督、浅沼直也監督）がK{"'"}s
          cinemaにて2022/10/01から2週間上映され、4作品のうち3作品（『you』『再演
          』『いろとりどりの』）にメインで出演した。
        </p>
        <p>
          プロデュースと主演を務めた映画『できたのできたの』（22/小嶋貴之監督）ではsilicon
          beach film
          festivalでノミネートされ、アメリカのチャイニーズシアターで上演を果たす。
          『チャロの囀り』（22/末吉ノブ監督）では、海外の映画祭で既に10冠以上受賞していて、主演男
          優賞も3冠受賞している。『ゴールド』（知多良監督）では500人以上の応募者の中からオーディ
          ションで選ばれ、撮影に向けてのクラウドファンディングを行なっている。​​
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

const subCasts = [
  {
    name: '古矢 航之介',
    description: (
      <>
        <p className="mb-1">1994年12月29日生まれ、静岡県出身。</p>
        <p>
          出演作『春みたいだ』（2017/シガヤダイスケ監督）が国内外数多くの映画祭で上映され、その反響から役者の道に入る。
          近年は、映像作品を中心にメジャー、インディーズ問わず活動を続ける。
          本作が川野邉監督作品初参加。
        </p>
      </>
    ),
    image: cast01Image,
  },
  {
    name: 'ふぁそら',
    description: (
      <>
        <p className="mb-1">1995年1月14日生まれ、福岡県朝倉市出身。</p>
        <p>
          2011年から音楽活動を始める。
          『ポシュレデパート深夜店』（2011/オープニングテーマ）、『ゲーマーズTV夜遊び三姉妹』（2012/エンディングテーマ）。
          ライブをメインに活動するが2015年に活動休止。
          2018年に自主映画に出演したのをきっかけに複数の作品に出演する。
          2022年9月から男女混合4人組バンド「liLsheeps（リルシープス）」のヴォーカルとして活動を始動した。
        </p>
      </>
    ),
    image: cast11Image,
  },
  {
    name: '外 能久',
    description: (
      <>
        <p className="mb-1">
          俳優として、テレビ・CM・舞台などを中心に活躍。
          代表作に、映画『37second』、『えちてつ物語』、テレビ東京『歴史ミステリーロマン･戦国』、舞台『男たちのバラードMEN&amp;MAN』、雑
          誌『モーターファン』など。
        </p>
      </>
    ),
    image: cast02Image,
  },
  {
    name: 'ヒノ影アラン',
    description: (
      <>
        <p className="mb-1">1996年10月31日生まれ、北海道出身。</p>
        <p>
          ワードシーカー・演出家。2018年に「創作ユニットヤマアラシ」を立ち上げ演劇作品の発表などを行う。
          アーティストの個展に詩を提供するなど、言葉に関する仕事を生業とする。
          役者として映画に出演するのは、今回が初。
        </p>
      </>
    ),
    image: cast03Image,
  },
  {
    name: '江南 知幸',
    description: (
      <>
        <p className="mb-1">1981年生まれ。京都出身。</p>
        <p>
          音楽の専門学校に進学し、学内グランプリを獲得するも卒業後はそのまま就職。
          IT企業に約10年勤めた後、俳優に転向。
          座右の銘は『言わんほうがええ事は、言わんほうがええ』。
          飄々としたキャラクターで、劇団未成年にて活躍中。
        </p>
      </>
    ),
    image: cast04Image,
  },
  {
    name: '宮寺 貴也',
    description: (
      <>
        <p className="mb-1">
          俳優。高校卒業後、塩屋俊アクターズクリニックにて、塩屋メゾットを数年学び、原作物舞台でデビュー。
          ストレートプレイ、コント、広告、映像等。
          確かな経験を元に硬軟問わない、幅広い役柄を演じ分けられる事が特徴。
          近年は映画を中心に活動。
        </p>
      </>
    ),
    image: cast05Image,
  },
  {
    name: '飯川 瑠夏',
    description: (
      <>
        <p className="mb-1">1997年8月21日、北海道出身。</p>
        <p>
          文学座附属演劇研究所卒業。
          所内の舞台、文学座アトリエの会での出演を経験。
        </p>
      </>
    ),
    image: cast06Image,
  },
  {
    name: '見里 瑞穂',
    description: (
      <>
        <p className="mb-1">
          東京都出身。青山学院大学在学中から演技を始める。
          初主演作『したさきのさき』が、ぴあフィルムフェスティバル2015にて、4冠を達成。
          また、話題となった『PUI PUI モルカー』の実写パートに出演。
          現在TV放送中の『PUI PUI モルカー DRIVING SCHOOL』、2022年11月4日公開の尾崎将也監督『炎上シンデレラ』に出演中。
        </p>
      </>
    ),
    image: cast07Image,
  },
  {
    name: '鈴木 拓磨',
    description: (
      <>
        <p className="mb-1">1986年7月9日、埼玉県出身。</p>
        <p>
          自主映画を中心に役者として活動している中で、違う立場からの映画制作に興味を持ち、これまで自身でも監督として、『おもいとらわれ』（2017）『ウラアカ』（2017）と2本制作した。
        </p>
      </>
    ),
    image: cast08Image,
  },
  {
    name: '藤松 祥子',
    description: (
      <>
        <p className="mb-1">1993年生まれ、東京都出身。</p>
        <p>
          2015年に劇団青年団入団。
          2018年、舞台『愛犬ポリーの死、そして家族の話』（作・演出 根本宗子）では本番直前に主演の代役に抜擢され注目を集める。
          近年の出演作に【舞台】『夜は短し歩けよ乙女』（2021/脚本・演出 上田誠）、『昼下がりの思春期たちは漂う狼のようだ』（2021/作・演出 蓬莱竜太）、『もっとも大いなる愛へ』（2020/作・演出 根本宗子）【映画】『ホムンクルス』（2021/清水崇監督）【ドラマ】『青天を衝け』、『ここは今から倫理です。』（2021/NHK）などがある。
        </p>
      </>
    ),
    image: cast09Image,
  },
  {
    name: '永里 健太朗',
    description: (
      <>
        <p className="mb-1">1993年生まれ、東京都出身。</p>
        <p>
          18歳で鹿児島から上京。演劇ユニット『47ENGINE』で役者として活動しながら月一短編演劇イベントにて脚本、演出も多数手掛ける。
          舞台、映画、ドラマ、CM等多方面で活動し2019年には脚本、演出、出演で初長編舞台を公演。
          2020年からはiPhoneで撮影した短編映画等も製作している。
        </p>
      </>
    ),
    image: cast10Image,
  },
]

export function Casts() {
  const [openCastsAndStaffsModal, setOpenCastsAndStaffsModal] = useState(false)
  const [person, setPerson] = useState({})

  return (
    <div className="relative">
      <section
        id="casts"
        aria-labelledby="casts-title"
        className="pt-20 sm:pt-32"
      >
        <Container className="relative">
          <div className="mx-auto">
            <div className="flex justify-center">
              <h2
                id="casts-title"
                className="mb-12 border-l-2 border-yellow-300 px-2 pb-2 font-serif text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl"
              >
                キャスト
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-5 gap-x-5 font-sans md:grid-cols-4">
            {casts.map((cast, castIndex) => (
              <div key={castIndex} className="font-sans">
                <Image
                  className="inset-0 mx-auto w-full cursor-pointer  rounded-4xl object-cover sm:w-2/3"
                  src={cast.image}
                  alt=""
                  priority
                  sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  onClick={() => {
                    setPerson(cast)
                    setOpenCastsAndStaffsModal(true)
                  }}
                />
                <div className="mt-2 text-center">{cast.name}</div>
                <div className="text-center text-xs text-gray-500 sm:text-sm">
                  {cast.role}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-3 gap-y-5 gap-x-5 font-sans md:grid-cols-5">
            {subCasts.map((cast, castIndex) => (
              <div key={castIndex} className="font-sans">
                <Image
                  className="inset-0 mx-auto w-full cursor-pointer rounded-2xl object-cover sm:w-2/3"
                  src={cast.image}
                  alt=""
                  priority
                  sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  onClick={() => {
                    setPerson(cast)
                    setOpenCastsAndStaffsModal(true)
                  }}
                />
                <div className="mt-2 text-center text-xs sm:text-sm">
                  {cast.name}
                </div>
              </div>
            ))}
          </div>
        </Container>
        <CastsAndStaffsModal
          openCastsAndStaffsModal={openCastsAndStaffsModal}
          setOpenCastsAndStaffsModal={setOpenCastsAndStaffsModal}
          person={person}
        />
      </section>
    </div>
  )
}

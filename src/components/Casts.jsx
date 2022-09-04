import { useId } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'

const casts = [
  {
    name: '川野邉 修一',
    role: '監督',
    description: (
      <>
        <p className="mb-1">1991年5月7日、東京都江戸川区出身。</p>
        <p>
          大学の映画サークルに所属しながら、映画美学校初等科フィクションコースを卒業。
          大学卒業後は都内で会社員として勤務を続ける傍ら自主映画を製作。
          監督作品に「オフライン」（2014）、「凪」（2017）第一回渋谷TANPEN映画祭脚本賞助演女優賞・21st
          CHOFU SHORT FILMグランプリ・SKIPシティ国際映画祭入選。
          また、2014年の調布映画祭グランプリ作品の『泥人』（2013）では主演を務めた。
        </p>
      </>
    ),
    image: stevenMchailImage,
  },
  {
    name: '猪本 雅三',
    role: '撮影監督（カメラマン）',
    description: (
      <>
        <p className="mb-1">1959年8月9日、大阪府出身。</p>
        <p className="mb-1">
          日本映画撮影監督協会（J.S.C.）所属。横浜放送映画専門学院（現日本映画大学）卒業後、円谷プロダクション、にっかつ撮影所で多数の作品で経験を積む。撮影監督を努めた『M/OTHER』（1999/諏訪敦彦）は、カンヌ国際映画祭国際批評家連盟賞を受賞し、国内でも三浦賞（第43回日本映画撮影監督協会新人賞）を受賞。近年だと、『his』（2020/今泉力哉監督）『喜劇
          愛妻物語』（2020/足立紳）の撮影を担当。
        </p>
        <p className="mb-1 mt-5 font-semibold">主な撮影作品</p>
        <ul className="list-none pl-1 text-base">
          <li className="mb-3">
            2000年 『独立少年合唱団』
            第50回ベルリン国際映画祭:アルフレード・バウアー賞 （緒方明監督）
          </li>
          <li className="mb-3">
            2001年 『独立少年合唱団』 第22回ヨコハマ映画祭:撮影賞
          </li>
          <li className="mb-3">
            2001年 『火垂』 ブエノスアイレス国際映画祭:最優秀撮影監督賞
            （河瀬直美監督）
          </li>
          <li className="mb-3">
            2009年 『TOKYO!』 第61回カンヌ国際映画祭:「ある視点」部門出品
            （ミシェル・ゴンドリー監督）
          </li>
          <li className="mb-3">
            2011年 『街灯りの向こうに』 ひろしま映像展:撮影賞 （山本亜希監督）
          </li>
        </ul>
      </>
    ),
    image: jaquelinIschImage,
  },
  {
    name: '川野邉 修一',
    role: '監督',
    description: (
      <>
        <p className="mb-1">1991年5月7日、東京都江戸川区出身。</p>
        <p>
          大学の映画サークルに所属しながら、映画美学校初等科フィクションコースを卒業。
          大学卒業後は都内で会社員として勤務を続ける傍ら自主映画を製作。
          監督作品に「オフライン」（2014）、「凪」（2017）第一回渋谷TANPEN映画祭脚本賞助演女優賞・21st
          CHOFU SHORT FILMグランプリ・SKIPシティ国際映画祭入選。
          また、2014年の調布映画祭グランプリ作品の『泥人』（2013）では主演を務めた。
        </p>
      </>
    ),
    image: stevenMchailImage,
  },
  {
    name: '猪本 雅三',
    role: '撮影監督（カメラマン）',
    description: (
      <>
        <p className="mb-1">1959年8月9日、大阪府出身。</p>
        <p className="mb-1">
          日本映画撮影監督協会（J.S.C.）所属。横浜放送映画専門学院（現日本映画大学）卒業後、円谷プロダクション、にっかつ撮影所で多数の作品で経験を積む。撮影監督を努めた『M/OTHER』（1999/諏訪敦彦）は、カンヌ国際映画祭国際批評家連盟賞を受賞し、国内でも三浦賞（第43回日本映画撮影監督協会新人賞）を受賞。近年だと、『his』（2020/今泉力哉監督）『喜劇
          愛妻物語』（2020/足立紳）の撮影を担当。
        </p>
        <p className="mb-1 mt-5 font-semibold">主な撮影作品</p>
        <ul className="list-none pl-1 text-base">
          <li className="mb-3">
            2000年 『独立少年合唱団』
            第50回ベルリン国際映画祭:アルフレード・バウアー賞 （緒方明監督）
          </li>
          <li className="mb-3">
            2001年 『独立少年合唱団』 第22回ヨコハマ映画祭:撮影賞
          </li>
          <li className="mb-3">
            2001年 『火垂』 ブエノスアイレス国際映画祭:最優秀撮影監督賞
            （河瀬直美監督）
          </li>
          <li className="mb-3">
            2009年 『TOKYO!』 第61回カンヌ国際映画祭:「ある視点」部門出品
            （ミシェル・ゴンドリー監督）
          </li>
          <li className="mb-3">
            2011年 『街灯りの向こうに』 ひろしま映像展:撮影賞 （山本亜希監督）
          </li>
        </ul>
      </>
    ),
    image: jaquelinIschImage,
  },
  {
    name: '川野邉 修一',
    role: '監督',
    description: (
      <>
        <p className="mb-1">1991年5月7日、東京都江戸川区出身。</p>
        <p>
          大学の映画サークルに所属しながら、映画美学校初等科フィクションコースを卒業。
          大学卒業後は都内で会社員として勤務を続ける傍ら自主映画を製作。
          監督作品に「オフライン」（2014）、「凪」（2017）第一回渋谷TANPEN映画祭脚本賞助演女優賞・21st
          CHOFU SHORT FILMグランプリ・SKIPシティ国際映画祭入選。
          また、2014年の調布映画祭グランプリ作品の『泥人』（2013）では主演を務めた。
        </p>
      </>
    ),
    image: stevenMchailImage,
  },
  {
    name: '猪本 雅三',
    role: '撮影監督（カメラマン）',
    description: (
      <>
        <p className="mb-1">1959年8月9日、大阪府出身。</p>
        <p className="mb-1">
          日本映画撮影監督協会（J.S.C.）所属。横浜放送映画専門学院（現日本映画大学）卒業後、円谷プロダクション、にっかつ撮影所で多数の作品で経験を積む。撮影監督を努めた『M/OTHER』（1999/諏訪敦彦）は、カンヌ国際映画祭国際批評家連盟賞を受賞し、国内でも三浦賞（第43回日本映画撮影監督協会新人賞）を受賞。近年だと、『his』（2020/今泉力哉監督）『喜劇
          愛妻物語』（2020/足立紳）の撮影を担当。
        </p>
        <p className="mb-1 mt-5 font-semibold">主な撮影作品</p>
        <ul className="list-none pl-1 text-base">
          <li className="mb-3">
            2000年 『独立少年合唱団』
            第50回ベルリン国際映画祭:アルフレード・バウアー賞 （緒方明監督）
          </li>
          <li className="mb-3">
            2001年 『独立少年合唱団』 第22回ヨコハマ映画祭:撮影賞
          </li>
          <li className="mb-3">
            2001年 『火垂』 ブエノスアイレス国際映画祭:最優秀撮影監督賞
            （河瀬直美監督）
          </li>
          <li className="mb-3">
            2009年 『TOKYO!』 第61回カンヌ国際映画祭:「ある視点」部門出品
            （ミシェル・ゴンドリー監督）
          </li>
          <li className="mb-3">
            2011年 『街灯りの向こうに』 ひろしま映像展:撮影賞 （山本亜希監督）
          </li>
        </ul>
      </>
    ),
    image: jaquelinIschImage,
  },
  {
    name: '川野邉 修一',
    role: '監督',
    description: (
      <>
        <p className="mb-1">1991年5月7日、東京都江戸川区出身。</p>
        <p>
          大学の映画サークルに所属しながら、映画美学校初等科フィクションコースを卒業。
          大学卒業後は都内で会社員として勤務を続ける傍ら自主映画を製作。
          監督作品に「オフライン」（2014）、「凪」（2017）第一回渋谷TANPEN映画祭脚本賞助演女優賞・21st
          CHOFU SHORT FILMグランプリ・SKIPシティ国際映画祭入選。
          また、2014年の調布映画祭グランプリ作品の『泥人』（2013）では主演を務めた。
        </p>
      </>
    ),
    image: stevenMchailImage,
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Casts() {
  let id = useId()

  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-0 -bottom-14 overflow-hidden bg-indigo-50">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <section
        id="casts"
        aria-labelledby="casts-title"
        className="py-20 sm:py-32"
      >
        <ImageClipPaths id={id} />
        <Container className="relative">
          <div className="mx-auto">
            <h2
              id="casts-title"
              style={{ fontFamily: 'Nico Moji' }}
              className="mb-10 text-center font-display text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl"
            >
              キャスト
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 [&:not(:focus-visible)]:focus:outline-none">
            {casts.map((staff, staffIndex) => (
              <div key={staffIndex}>
                <div className="group relative h-[20rem] transform overflow-hidden rounded-4xl">
                  <div
                    className={clsx(
                      'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                      [
                        'border-blue-300',
                        'border-indigo-300',
                        'border-sky-300',
                      ][staffIndex % 3]
                    )}
                  />
                  <div
                    className="absolute inset-0 bg-indigo-50"
                    style={{ clipPath: `url(#${id}-${staffIndex % 3})` }}
                  >
                    <Image
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      src={staff.image}
                      alt=""
                      priority
                      sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                  {staff.name}
                </h3>
                <p className="mt-1 text-base tracking-tight text-slate-500">
                  {staff.role}
                </p>
                <div className="mt-1 text-lg tracking-tight text-slate-900">
                  {staff.description}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

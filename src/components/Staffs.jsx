import { useState } from 'react'
import Image from 'next/future/image'

import { Container } from '@/components/Container'
import { CastsAndStaffsModal } from '@/components/CastsAndStaffsModal'

import inomotoMasamiImage from '@/images/staffs/inomoto-masami.webp'
import kawanobeShuichiImage from '@/images/staffs/kawanobe-shuichi.webp'

const staffs = [
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
    image: kawanobeShuichiImage,
  },
  {
    name: '猪本 雅三',
    role: '撮影監督(カメラマン)',
    description: (
      <>
        <p className="mb-1">1959年8月9日、大阪府出身。</p>
        <p className="mb-1">
          日本映画撮影監督協会（J.S.C.）所属。横浜放送映画専門学院（現日本映画大学）卒業後、円谷プロダクション、にっかつ撮影所で多数の作品で経験を積む。撮影監督を努めた『M/OTHER』（1999/諏訪敦彦）は、カンヌ国際映画祭国際批評家連盟賞を受賞し、国内でも三浦賞（第43回日本映画撮影監督協会新人賞）を受賞。近年だと、『his』（2020/今泉力哉監督）『喜劇
          愛妻物語』（2020/足立紳）の撮影を担当。
        </p>
        <p className="mb-1 mt-5 font-semibold">主な撮影作品</p>
        <ul className="list-none pl-1 text-xs">
          <li className="mb-2">
            2000年 『独立少年合唱団』
            第50回ベルリン国際映画祭:アルフレード・バウアー賞 （緒方明監督）
          </li>
          <li className="mb-2">
            2001年 『独立少年合唱団』 第22回ヨコハマ映画祭: 撮影賞
          </li>
          <li className="mb-2">
            2001年 『火垂』 ブエノスアイレス国際映画祭: 最優秀撮影監督賞
            （河瀬直美監督）
          </li>
          <li className="mb-2">
            2009年 『TOKYO!』 第61回カンヌ国際映画祭: 「ある視点」部門出品
            （ミシェル・ゴンドリー監督）
          </li>
          <li>
            2011年 『街灯りの向こうに』 ひろしま映像展: 撮影賞 （山本亜希監督）
          </li>
        </ul>
      </>
    ),
    image: inomotoMasamiImage,
  },
]

export function Staffs() {
  const [openCastsAndStaffsModal, setOpenCastsAndStaffsModal] = useState(false)
  const [person, setPerson] = useState({})

  return (
    <section
      id="staffs"
      aria-labelledby="staffs-title"
      className="pt-20 sm:pt-32"
    >
      <Container>
        <div className="mx-auto">
          <div className="flex justify-center">
            <h2
              id="staffs-title"
              className="mb-12 border-l-2 border-yellow-300 px-2 pb-2 font-serif text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl"
            >
              スタッフ
            </h2>
          </div>
        </div>
        <div className="mx-auto mb-16 grid grid-cols-2 gap-x-5 font-sans md:w-1/2">
          {staffs.map((staff, staffIndex) => (
            <div key={staffIndex} className="font-sans">
              <Image
                className="inset-0 h-full w-full cursor-pointer rounded-4xl object-cover"
                src={staff.image}
                alt=""
                priority
                sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                onClick={() => {
                  setPerson(staff)
                  setOpenCastsAndStaffsModal(true)
                }}
              />
              <div className="mt-2 text-center">{staff.name}</div>
              <div className="text-center text-xs text-gray-500 sm:text-sm">
                {staff.role}
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
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'

const theaters = [
  {
    place: '愛知',
    name: '刈谷日劇',
    link: 'https://kariyanichigeki.com/',
    date: '2023年6月23日(金)～6月29日(木)',
    time: (
      <>
        <div>上映時間調整中</div>
        <div className="mt-4 text-xs text-gray-600">
          舞台挨拶・トークイベントを実施予定
        </div>
      </>
    ),
  },
  {
    place: '青森',
    name: '八戸ポータルミュージアム はっち',
    link: 'https://hacchi.jp/access/',
    date: '2023年7月17日(月・祝)',
    time: (
      <div className="mt-4 whitespace-normal text-xs text-gray-600">
        一日限定上映。川野邉監督過去作品『凪』や関連作『泥人』『ぼっち』なども上映予定。詳細なスケジュールは改めて告知致します。トークイベントも実施予定。
      </div>
    ),
  },
  {
    place: '東京',
    name: "K's cinema新宿",
    link: 'https://www.ks-cinema.com',
    date: (
      <span>
        <span className="line-through decoration-gray-600">
          2022年11月19日(土)〜12月2日(金)
        </span>
        <br />
        <span className="line-through">2023年1月7日(土)〜1月13日(金)</span>
      </span>
    ),
    time: '上映終了',
  },
  {
    place: '大阪',
    name: 'シアターセブン',
    link: 'https://www.theater-seven.com',
    date: (
      <span className="line-through decoration-gray-600">
        2023年1月21日(土)〜1月27日(金)
      </span>
    ),
    time: '上映終了',
  },
  {
    place: '名古屋',
    name: 'シネマスコーレ',
    link: 'http://www.cinemaskhole.co.jp/cinema/html',
    date: (
      <span className="line-through decoration-gray-600">
        2023年3月18日(土)〜3月24日(金)
      </span>
    ),
    time: '上映終了',
  },
  {
    place: '京都',
    name: '出町座',
    link: 'https://demachiza.com/',
    date: (
      <span className="line-through decoration-gray-600">
        2023年5月19日(金)～5月25日(木)
      </span>
    ),
    time: '上映終了',
  },
]

export default function Theaters() {
  return (
    <>
      <Head>
        <title>映画 『ボクらのホームパーティー』 公式サイト | 劇場情報</title>
      </Head>
      <div>
        <Header />
        <main>
          <Container className="relative">
            <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
              <div
                id="outline"
                className="space-y-6 pt-4 font-sans text-lg tracking-tight text-gray-900 md:pt-8"
              >
                <div className="flex justify-center">
                  <h2 className="mb-4 pb-2 font-kaisei text-3xl tracking-tighter text-gray-900 sm:text-4xl">
                    劇場情報
                  </h2>
                </div>
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded">
                          <table className="min-w-full divide-y divide-gray-500 font-sans">
                            <thead className="bg-neutral-500">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-white sm:pl-6"
                                >
                                  地域
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-normal text-white"
                                >
                                  劇場名
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-400 bg-white">
                              {theaters.map((theater) => (
                                <tr key={theater.name}>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                                    {theater.place}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                    <Link
                                      href={theater.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="underline"
                                    >
                                      {theater.name}
                                    </Link>
                                    <br />
                                    {theater.date}
                                    {theater.time !== undefined && (
                                      <>
                                        <br />
                                        {theater.time}
                                      </>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Header } from '@/components/Header'

const shops = [
  // {
  //   place: '東京・新宿二丁目',
  //   name: 'テスト',
  //   link: '#',
  //   date: '11/19（土）～',
  //   note: 'ゲイオンリー',
  // },
]

export default function Campaigns() {
  return (
    <>
      <Head>
        <title>
          映画 『ボクらのホームパーティー』 公式サイト | キャンペーン
        </title>
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
                    キャンペーン
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
                                  店名
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-400 bg-white">
                              {shops.length !== 0 ? shops.map((shop) => (
                                <tr key={shop.name}>
                                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6">
                                    {shop.place}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                    <Link
                                      href={shop.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="underline"
                                    >
                                      {shop.name}
                                    </Link>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                    {shop.note}
                                  </td>
                                </tr>
                              )) : (
                                <tr>
                                  <td colSpan={2} className="py-3 text-center">準備中...</td>
                                </tr>
                              )}
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

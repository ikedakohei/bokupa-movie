import { Container } from '@/components/Container'
import Image from 'next/future/image'
import mainImage from '@/images/main.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1
            style={{ fontFamily: 'Nico Moji' }}
            className="text-center font-display text-5xl font-bold tracking-tighter text-gray-900 sm:text-7xl"
          >
            ボクらの
            <br />
            ホームパーティー
          </h1>

          <Image className="mx-auto my-10" src={mainImage} alt="" />
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-gray-900">
            <h2
              style={{ fontFamily: 'Nico Moji' }}
              className="text-center font-display text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl"
            >
              あらすじ
            </h2>
            <p>
              東京の片隅でホームパーティーが開かれた。 そこに集まった7人のゲイ。
              主催者カップルの彰人と靖、大学生の智也、ゲイバーの店子・将一、ゲイクラブの店員・直樹とその友達の正志、そして、写真家の健一。
              パーティーは楽しく盛り上がる中、閉じ込められていた悩みや感情が少しずつ明らかになっていく...。
            </p>
          </div>
          <iframe
            className="my-10 aspect-video w-full"
            src="https://www.youtube.com/embed/w9G1VMNBGAA"
            title="ボクらのホームパーティー"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-gray-900">
            <p className="mb-5">
              監督自身の実体験やゲイバーでのリサーチを基にストーリーが作られた本作。
            </p>
            <p className="mb-5">
              川野邉監督による前作の短編映画『凪』（2017）では、SKIPシティ国際Dシネマ映画祭入選、21st
              CHOFU SHORT FILM COMPETITIONグランプリを受賞。
            </p>
            <p className="mb-5">
              長編映画に初めて挑戦した今作では、カンヌ国際映画祭国際批評家連盟賞受賞作『M/OTHER』（1999年
              / 諏訪敦彦監督）や『his』（2020年 /
              今泉力哉監督）の撮影監督を務め、国内でも三浦賞など多数受賞する猪本雅三氏を撮影監督に迎え、人情の機微を繊細に映し出します。
            </p>
            <p>
              メインキャストにはオーディションに参加した総勢100名の俳優からメインキャスト7人を選出。舞台や映画、ドラマ、モデルなど、幅広いフィールドで活躍する俳優陣が、年齢も性格も見た目もバラバラな個性豊かなキャラクターを演じます。
              ゲイを演じる7人の、”喜怒哀楽”だけでは表せない複雑かつ繊細な気持ちを表現する演技にもぜひご注目ください。
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

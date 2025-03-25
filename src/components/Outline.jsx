import { Container } from '@/components/Container'
import Image from 'next/image'
import outline1Image from '@/images/outline1.webp'
import outline2Image from '@/images/outline2.webp'
import outline3Image from '@/images/outline3.webp'
import outline4Image from '@/images/outline4.webp'
import outline5Image from '@/images/outline5.webp'

export function Outline() {
  return (
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <div
          id="outline"
          className="space-y-6 pt-20 font-sans text-lg tracking-tight text-gray-900 md:pt-32"
        >
          <div className="flex justify-center">
            <h2 className="mb-4 border-l-2 border-yellow-300 px-2 pb-2 font-serif text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
              あらすじ
            </h2>
          </div>
          <div className="text-center font-kaisei text-2xl">
            あなたはボクの友達、
            <br />
            恋人、家族... それとも？
          </div>
          <Image
            className="mx-auto mt-0 mb-2 pt-0"
            src={outline1Image}
            alt=""
          />
          <p className="mb-5">
            都内の大学に通う『智也』は、好意を抱いていた友人の幸平に「好きな人がいる」と告白される。
            その時の出来事を相談したい一心で、新宿二丁目にやってくるものの、なかなか一歩を踏み出せないでいる智也。
            そんな姿を見兼ねたゲイバーの店子『将一』は彼を自分の店に招待する。
          </p>
          <Image
            className="mx-auto mt-0 mb-2 pt-0"
            src={outline2Image}
            alt=""
          />
          <p className="mb-5">
            その一方で、別れた恋人との傷心を忘れ去るようにゲイクラブで飲み明かす『正志』。
            クラブの店員『直樹』に悩みを打ち明け二人は親密になるが、お互いに関係をはっきりさせることができずにいた。
          </p>
          <Image
            className="mx-auto mt-0 mb-2 pt-0"
            src={outline3Image}
            alt=""
          />
          <p className="mb-5">
            翌朝、いつもと同じように会社で勤務する『彰人』。
            乗り気でない会社の飲み会も終えて家に着くが、同棲しているパートナー『靖』はまだ帰ってきていない。
            浮気を知りながらも、そのことを話せずに、ホームパーティーの準備を勝手に進める彰人。
            また、靖もそんな自暴自棄に振る舞う彰人とどう向き合えばいいのかわからずにいた。
          </p>
          <Image
            className="mx-auto mt-0 mb-2 pt-0"
            src={outline4Image}
            alt=""
          />
          <p className="mb-5">
            ホームパーティーに、智也も急遽参加することになり、彰人の家に招かれる一同。
            美味しいご飯やお酒で楽しい時間が続く中、しばらくして靖の友人で写真家の『健一』がパーティーにやってくる。
            アーティストという肩書やルックスで健一は注目を集める中、彰人だけ別の感情を抱いていた。
          </p>
          <Image
            className="mx-auto mt-0 mb-2 pt-0"
            src={outline5Image}
            alt=""
          />
          <p>
            夜が更けていき、酔いも進む中、楽しいパーティーは少しずつ形を歪めて、心に閉じ込めていた各々の思惑や感情が溢れ出していく...。
          </p>
        </div>
      </div>
    </Container>
  )
}

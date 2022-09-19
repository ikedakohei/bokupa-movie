import { Container } from '@/components/Container'

export function Outline() {
  return (
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <div
          id="outline"
          className="font-sans space-y-6 pt-20 text-lg tracking-tight text-gray-900 md:pt-32"
        >
          <div className="flex justify-center">
            <h2
              className="border-l-2 px-2 pb-2 border-yellow-300 mb-4 font-serif text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl"
            >
              あらすじ
            </h2>
          </div>
          <p className="mb-5">
            都内の大学に通う『智也』は、好意を抱いていた友人の幸平に「好きな人がいる」と告白される。
            その時の出来事を相談したい一心で、新宿二丁目にやってくるものの、なかなか一歩を踏み出せないでいる智也。
            そんな姿を見兼ねたゲイバーの店子『将一』は彼を自分の店に招待する。
          </p>
          <p className="mb-5">
            その一方で、別れた恋人との傷心を忘れ去るようにゲイクラブで飲み明かす『正志』。
            クラブの店員『直樹』に悩みを打ち明け二人は親密になるが、お互いに関係をはっきりさせることができずにいた。
          </p>
          <p className="mb-5">
            翌朝、いつもと同じように会社で勤務する『彰人』。
            乗り気でない会社の飲み会も終えて家に着くが、同棲しているパートナー『靖』はまだ帰ってきていない。
            浮気を知りながらも、そのことを話せずに、ホームパーティーの準備を勝手に進める彰人。
            また、靖もそんな自暴自棄に振る舞う彰人とどう向き合えばいいのかわからずにいた。
          </p>
          <p className="mb-5">
            ホームパーティーに、智也も急遽参加することになり、彰人の家に招かれる一同。
            美味しいご飯やお酒で楽しい時間が続く中、しばらくして靖の友人で写真家の『健一』がパーティにーやってくる。
            アーティストという肩書やルックスで健一は注目を集める中、彰人だけ別の感情を抱いていた。
          </p>
          <p>
            夜が更けていき、酔いも進む中、楽しいパーティは少しずつ形を歪めて、心に閉じ込めていた各々の思惑や感情が溢れ出していく...。
          </p>
        </div>
      </div>
    </Container>
  )
}

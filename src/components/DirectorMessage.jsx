import { Container } from '@/components/Container'

export function DirectorMessage() {
  return (
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <div
          id="director_message"
          className="space-y-6 pt-20 font-sans text-lg tracking-tight text-gray-900 md:pt-32"
        >
          <div className="flex justify-center">
            <h2 className="mb-4 font-kaisei text-3xl tracking-tighter text-gray-900">
              監督コメント
            </h2>
          </div>
          <p className="mb-5">
            ボクは同性愛者です。 世間一般でいうゲイです。
            そのことを隠すつもりはないのですが、公表しなければいけない理由もありません。
            ただ、映画を制作していく過程において、自分のセクシャリティが表現に影響を及ぼしていると思うことが多々ありました。
            それは演出するときに、シナリオを書くときに、映画祭で観客の感想をいただいたときに、多くの場面で感じるようになりました。
          </p>
          <p className="mb-5">
            果たして自分の考えや気持ちをきちんと相手に伝えられているだろうか。
            自分が隠してきたこと、曖昧にしていることと向き合って映画制作を行う必要があるのではないかと考えるようになり、この題材を選びました。
            特に、ゲイだからといって何か劇的なドラマが日常にあるわけではなく、普段の生き様も描いていきたいです。
            また、ゲイの人だけでなく、性別や年齢、国内外問わず多くの人に観てもらいたいです。
          </p>
          <p>
            ホームパーティー上で飛び交う彼らの目線の中に、どういった思惑・感情があるか、観客も一体となり、みんなで探っていけたら嬉しいです。
          </p>
        </div>
      </div>
    </Container>
  )
}

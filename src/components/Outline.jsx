export function Outline() {
  return (
    <>
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
      <div className="mt-6 space-y-6 font-sans text-lg tracking-tight text-gray-900">
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
    </>
  )
}

import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-white antialiased" lang="ja">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#555555" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content="ボクらのホームパーティー" />
        <meta property="og:url" content="https://bokupa-movie.com" />
        <meta
          property="og:title"
          content="映画 『ボクらのホームパーティー』 公式サイト"
        />
        <meta
          property="og:site_name"
          content="映画 『ボクらのホームパーティー』 公式サイト"
        />
        <meta
          property="og:description"
          content="川野邉修一監督自身の経験を基に、とあることから集まる7人のゲイ(男性同性愛者)によるホームパーティーを舞台とし、それぞれの生活や葛藤、また、友人・恋人・家族などの多様な人間模様を描いていく。"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.gyazo.com/8d70e304e4716c8fba20e0412aff0cec.jpg"
        />
        <meta property="og:image:width" content="1147" />
        <meta property="og:image:height" content="640" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="bokupa-movie.com" />
        <meta
          name="twitter:title"
          content="映画 『ボクらのホームパーティー』 公式サイト"
        />
        <meta
          name="twitter:description"
          content="川野邉修一監督自身の経験を基に、とあることから集まる7人のゲイ(男性同性愛者)によるホームパーティーを舞台とし、それぞれの生活や葛藤、また、友人・恋人・家族などの多様な人間模様を描いていく。"
        />
        <meta
          name="twitter:image"
          content="https://i.gyazo.com/8d70e304e4716c8fba20e0412aff0cec.jpg"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&family=Kaisei+Opti:wght@400;500;700&display=auto"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

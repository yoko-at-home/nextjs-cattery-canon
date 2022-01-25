import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja">
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" crossOrigin="use-credentials" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#cf980a" />
        {/* インデックス 登録のリクエスト処理 */}
        <meta name="google-site-verification" content="b8bHgMnOcmFYxe-Nz8dhHx0AKW5h8BgWvAWKWreYUbQ" />
        <meta name="msapplication-TileColor" content="#cf980a" />
        <meta name="theme-color" content="#f7ecd2" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="antialiased text-black bg-white">
        <Main />
        <div id="root"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;

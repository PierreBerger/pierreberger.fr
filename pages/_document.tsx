import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon/favicon.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="favicon/favicon-32.png" type="image/png" />
        <link rel="icon" sizes="64x64" href="favicon/favicon-64.png" type="image/png" />
        <link rel="icon" sizes="96x96" href="favicon/favicon-96.png" type="image/png" />
        <link rel="shortcut icon" href="favicon/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
        <link rel="icon" sizes="196x196" href="favicon/favicon-196.png" type="image/png" />
        <meta name="msapplication-TileImage" content="favicon-144.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

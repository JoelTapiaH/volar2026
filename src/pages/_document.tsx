import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>VOLAR</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body style={{ overflowY: 'hidden' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

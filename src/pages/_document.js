import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-180192746-5"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-180192746-5');
              `,
            }}
          />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0a518f" />
          <meta
            name="description"
            content="Tendencias educativas hacia el futuro digital de la educación universitaria"
          />
          <meta
            property="og:description"
            content="Tendencias educativas hacia el futuro digital de la educación universitaria"
          />
          <meta
            property="og:image"
            content="https://imagenes.softaki.com/app/Minedu/conectados-wsp.jpg"
          />
          <meta property="og:title" content="I Congreso Conectados" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <title>I Congreso Conectados</title>
          <link
            as="font"
            rel="preload"
            type="font/ttf"
            crossOrigin=""
            href="/fonts/Gothan-Book.ttf"
          />
          <link
            as="font"
            rel="preload"
            type="font/ttf"
            crossOrigin=""
            href="/fonts/Montserrat-Bold.ttf"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

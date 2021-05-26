import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
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

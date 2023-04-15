import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='no-scrollbar'>
      <Head />
      <body className='h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

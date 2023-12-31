import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Head> */}
      <script id="datalayer-config-data" type="application/json"
        dangerouslySetInnerHTML={
          { __html: JSON.stringify(
            {
              "jupyterServerHttpUrl": "https://oss.datalayer.tech/api/jupyter",
              "jupyterServerWsUrl": "wss://oss.datalayer.tech/api/jupyter",
              "jupyterToken": "60c1661cc408f978c309d04157af55c9588ff9557c9380e4fb50785750703da6"
            }

          ) }

        } 

      />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.4/require.min.js"></script>
      {/* </Head> */}
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import { title, desc } from '../site.conifg.json'

const Layout = ({
    children,
    home
  } : {
    children: React.ReactNode,
    home?: boolean
  }) => {
  return (
    <div className="min-h-screen min-w-min max-w-full bg-gray-100">
    {/* // <div className="min-h-screen min-w-min text-sm md:text-base"> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={desc}
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center pt-6 mb-10 splatfont mx-auto w-4/5 md:w-1/2">
        {home ? (
          <div className="md:text-4xl sm:text-3xl text-xl font-extrabold my-4 text-gray-900">{title}</div>
        ) : (
          <div className="md:text-4xl sm:text-3xl text-xl font-extrabold my-4">
            <Link href="/">
              <a className="text-current hover:no-underline text-gray-900">{title}</a>
            </Link>
          </div>
        )}
        <h2 className="text-gray-700 text-base break-words max-w-xs md:max-w-md text-center">{desc}</h2>
      </header>
      <main className="pb-10 mx-auto">{children}</main>
    </div>
  )
}

export default Layout
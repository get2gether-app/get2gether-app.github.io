import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Together - Discover Love, Your Way</title>
        <meta name="description" content="Get Together - Discover Love, Your Way" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Get Together - Discover Love, Your Way" />
        <meta property="og:description" content="Get Together - Discover Love, Your Way" />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-75"></div>
        <Image
          src="/bg.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center w-full h-15 px-5 text-white py-5">
          <Image src="/logo.png" alt="Picture of the author" width={50} height={50} style={{ borderRadius: 5 }} />
        </header>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            <a className="text-white-600" href="/">
              Get Together
            </a>
          </h1>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <span className="text-2xl font-bold">
              Cooming Soon
            </span>
            <span className="text-xl text-white-600 mt-4 sm:mt-0 sm:ml-4">
              <Link href="/why-get-together">
                <span className="text-white-600">Why Get Together?</span>
              </Link>
            </span>
          </div>
        </main>
        <footer className="flex justify-end w-full h-24 text-white items-center px-5">
          <a
            className="flex items-center justify-center"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Get Together - Discover Love, Your Way</span>
            <span className="text-l">
              2023 © Get Together
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}

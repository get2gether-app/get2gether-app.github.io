import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Together - Discover Love, Your Way</title>
        <meta name="description" content="Get Together - Discover Love, Your Way" />
      </Head>
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/bg.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            <a className="text-white-600" href="/">
              Get Together
            </a>
          </h1>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <h1 className="text-2xl font-bold">
              Cooming Soon
            </h1>
          </div>
        </main>
      </div>
    </>
  )
}

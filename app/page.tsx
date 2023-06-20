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
          <h2 className="text-1xl">
            Discover Love, Your Way
          </h2>

          <Link href="https://play.google.com/store/apps/details?id=com.sftech.gettogether">
            <Image
              src="/google-play-badge.png"
              alt="Get Together on Google Play"
              width={200}
              height={200}
              quality={100}
            />
          </Link>
        </main>
      </div>
    </>
  )
}

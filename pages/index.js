import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebMolecule</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen w-full bg-[url('/graph-paper.svg')] bg-cover ">
        <div className="max-w-7xl mx-auto px-6">
          <h1>Web molecule</h1>
        </div>
      </div>
    </div>
  );
}

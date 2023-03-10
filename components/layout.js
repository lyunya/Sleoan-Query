import Header from '@/components/Header'
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Sleoan Query</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col bg-slate-500 min-h-screen min-w-full mx-auto p-8">
        <Header />
        {children}
      </main>
    </>
  );
}

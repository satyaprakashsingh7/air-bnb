import Image from 'next/image'
import Head from 'next/head';
import Header from '../components/Header.js'

export default function Home() {
  return (
  <div className="">
    <Head>
      <title>air-bnb</title>
    </Head>
    {/* header */}
    <Header />
    {/* banner */}
  </div>
  );
}
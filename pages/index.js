import Head from 'next/head';
// import CustomComponents from '../components/custom/Custom-components';
import Banner2 from '../components/banner/Banner2';
import Portfolio from '../components/custom/sections/portfoliocomponent';
import BlogComponent from '../components/custom/sections/blogcomponent';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>CAT</title>
        <meta name='description' content='CAT' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner2 />
      {session ? <BlogComponent /> : <Portfolio />}
      {/* <Portfolio />
      <BlogComponent /> */}
    </div>
  );
}

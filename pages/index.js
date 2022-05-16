import Head from 'next/head';
import CustomComponents from '../components/custom/Custom-components';
import AfterLoginBanner from '../components/banner/AfterLoginBanner';
import BeforeLoginBanner from '../components/banner/BeforeLoginBanner';
import Portfolio from '../components/custom/sections/beforelogin/portfoliocomponent';
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
      {session ? <AfterLoginBanner /> : <BeforeLoginBanner />}
      {session ? <BlogComponent /> : <CustomComponents />}
      {/* <Portfolio />
      <BlogComponent /> */}
    </div>
  );
}

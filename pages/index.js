import Head from 'next/head';
// import CustomComponents from '../components/custom/Custom-components';
import Banner2 from '../components/banner/Banner2';
import Portfolio from '../components/custom/sections/portfoliocomponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CAT</title>
        <meta name='description' content='CAT' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner2 />
      <Portfolio />
      {/* <CustomComponents /> */}
    </div>
  );
}

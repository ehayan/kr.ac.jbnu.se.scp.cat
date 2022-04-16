import Head from 'next/head';
// import Banner from '../components/banner/Banner';
import FormBanner from '../components/custom/sections/formbannercomponent';

export default function Link() {
  return (
    <div>
      <Head>
        <title>CAT | Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <Banner /> */}
      <FormBanner />
    </div>
  );
}

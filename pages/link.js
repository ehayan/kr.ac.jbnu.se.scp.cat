import Head from 'next/head';
import FormBannerComponent from '../components/custom/sections/formbannercomponent';

const Link = (page) => {
  return (
    <div>
      <Head>
        <title>CAT | Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FormBannerComponent />
    </div>
  );
};
export default Link;

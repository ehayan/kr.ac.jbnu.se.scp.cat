//for tool help page.
import Head from 'next/head';
import Banner from '../components/banner/Banner';
import FeatureComponent from '../components/custom/sections/featurecomponent';
import CustomComponents from '../components/custom/Custom-components';
import BannerComponent from '../components/custom/sections/bannercomponent';

export default function Toolhelp() {
  return (
    <div>
      <Head>
        <title>CAT | Tool Help</title>
        <meta name='description' content='CAT' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeatureComponent />
      <BannerComponent />
    </div>
  );
}

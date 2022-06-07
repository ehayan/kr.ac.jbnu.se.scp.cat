// //for tool help page.
// import Head from 'next/head';
// import HelpBannerComponent from '../components/custom/sections/helpbannercomponent';
// import CustomComponents from '../components/custom/Custom-components';
// import HelpMainComponent from '../components/custom/sections/helpmaincomponent';

export default function Toolhelp() {
  return (
    <div>
      <Head>
        <title>PROBBY | ToolHelp</title>
        <meta name="description" content="CAT" />
        <link rel="icon" href="/probby_logo.png" />
      </Head>
      <HelpBannerComponent />
      <HelpMainComponent />
    </div>
  );
}

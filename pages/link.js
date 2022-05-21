import Head from 'next/head';
import AddLinkComponent from '../components/custom/sections/addlinkcomponent';

const Link = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | Link</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AddLinkComponent />
    </div>
  );
};
export default Link;

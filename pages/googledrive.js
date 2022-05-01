import Head from 'next/head';
import Drivecomponent from '../components/custom/sections/drivecomponent';

const GoogleDrive = (page) => {
  return (
    <div>
      <Head>
        <title>CAT | Project | GoogleDrive</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Drivecomponent />
    </div>
  );
};
export default GoogleDrive;

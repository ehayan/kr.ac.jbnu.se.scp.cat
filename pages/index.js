import Head from 'next/head';
import CustomComponents from '../components/custom/Custom-components';
import AfterLoginBanner from '../components/banner/AfterLoginBanner';
import BeforeLoginBanner from '../components/banner/BeforeLoginBanner';
import Project_Setting from '../components/custom/sections/settingcomponent';
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
      {session ? (
        <div className='spacer'>
          <h2 className='text-center'>Registered Project & Add new Project</h2>
          <Project_Setting />
        </div>
      ) : (
        <CustomComponents />
      )}
    </div>
  );
}

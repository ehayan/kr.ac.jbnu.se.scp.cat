import Head from 'next/head';
import GitCommitComponent from '../components/custom/sections/gitcommitcomponent';

const Dashboard = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | GitHub</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GitCommitComponent />
    </div>
  );
};
export default Dashboard;

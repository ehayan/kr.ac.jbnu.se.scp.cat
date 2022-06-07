import Head from 'next/head';
import GitCommitComponent from '../components/custom/sections/gitcommitcomponent';

const Dashboard = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | GitHub</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>
      <GitCommitComponent />
    </div>
  );
};
export default Dashboard;

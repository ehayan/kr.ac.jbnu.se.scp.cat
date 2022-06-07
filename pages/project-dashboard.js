import Head from 'next/head';
import Cards from '../components/basic/cards';

const ProjectPage = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | Dashboard</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default ProjectPage;

import Head from 'next/head';
import Cards from '../components/basic/cards';

const ProjectPage = (page) => {
  return (
    <div>
      <Head>
        <title>CAT | Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default ProjectPage;

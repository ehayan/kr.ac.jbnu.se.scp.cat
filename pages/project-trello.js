import Head from 'next/head';
import TrelloBoardComponent from '../components/custom/sections/trelloboardcomponent';

const Trello = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | Trello</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TrelloBoardComponent />
    </div>
  );
};
export default Trello;

import Head from 'next/head';
import TrelloBoardComponent from '../components/custom/sections/trelloboardcomponent';
import TrelloModal from '../components/custom/sections/modalcomponent';
import { db } from '../pages/firebase';
import { useEffect, useState } from 'react';
const Trello = (page) => {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    db.collection('registered_link')
      .doc('trello')
      .get()
      .then((snapshot) => {
        const API = snapshot.data().APIkey.API;
        if (API == '') {
          setExist(true);
        }
        // console.log(exist);
        // console.log(API);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>PROBBY | Trello</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={exist ? 'm-t-30 m-l-20' : 'hide'}>
        <TrelloModal />
      </div>
      <div className={exist ? 'hide' : ''}>
        <TrelloBoardComponent />
      </div>
    </div>
  );
};
export default Trello;

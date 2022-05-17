import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
import Setting from '../components/custom/sections/settingcomponent';

const Project_Setting = (page) => {
  return (
    <div>
      <Head>
        <title>CAT | Project | Setting</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Setting />
    </div>
  );
};
export default Project_Setting;

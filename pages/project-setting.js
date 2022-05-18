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

      {/* 제목 */}
      <div>
        <Container>
          <Row className='justify-content-center'>
            <Col className='text-center'>
              <h2 className='title font-bold'>Projects Setting</h2>
              <h6 className='subtitle'>등록된 프로젝트 수정 / 프로젝트 추가</h6>
            </Col>
          </Row>
        </Container>
      </div>

      {/* main */}
      <Setting />
    </div>
  );
};
export default Project_Setting;

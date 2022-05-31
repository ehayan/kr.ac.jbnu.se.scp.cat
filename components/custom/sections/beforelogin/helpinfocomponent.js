import Image from 'next/image';
import { Row, Col, Container } from 'reactstrap';
import toolhelpimg from '../../../../assets/images/beforelogin/toolhelp.png';
import addlinkimg from '../../../../assets/images/beforelogin/addlink.png';
import calendarimg from '../../../../assets/images/beforelogin/calendar.png';

const HelpInfoComponent = () => {
  return (
    <Container className='container-width-m'>
      <Row className='m-t-30'>
        <Col md='6'>
          <Image src={addlinkimg} />
        </Col>
        <Col md='6' className='m-t-30'>
          <div className='text-left align-self-justify'>
            <h2>
              <b>편리한 링크 추가 기능</b>
            </h2>
            <br />
            <span>
              자주 사용하는 협업 지원 도구의 링크를 추가해 여러 기능을
              사용해보세요 <br />
              업무 시간은 단축시키고 업무 효율은 증가시킬 수 있습니다
            </span>
          </div>
        </Col>
      </Row>
      <Row className='m-t-60'>
        <Col md='6' className='m-t-30'>
          <div className='text-left align-self-justify'>
            <br />
            <br />
            <h2>
              <b>프로젝트 일정 관리를 위한 캘린더</b>
            </h2>
            <br />
            <span>
              여러 프로젝트 일정이 등록된 캘린더를 사용해 불편함을 겪으신다면,{' '}
              <br />
              프로젝트마다 존재하는 캘린더를 통해 일정을 관리해보세요 <br />
            </span>
          </div>
        </Col>
        <Col md='6' className=' m-t-40'>
          <Image src={calendarimg} />
        </Col>
      </Row>
      <Row className='m-t-60  m-b-30'>
        <Col md='6' className=' m-t-40'>
          <Image src={toolhelpimg} />
        </Col>
        <Col md='6' className='m-t-30 '>
          <div className='text-left align-self-justify'>
            <br />
            <br />
            <h2>
              <b>협업 지원 도구 도움말</b>
            </h2>
            <br />
            <span>
              도움말을 통해 도구의 사용법을 익혀보세요 <br />
              Github, Slack, Trello, Google Drive의 도움말을 확인할 수 있습니다
            </span>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        h2 {
          font-family: 'RIDI';
        }
        span {
          font-size: 15px;
          font-family: 'RIDI';
        }
      `}</style>
    </Container>
  );
};

export default HelpInfoComponent;

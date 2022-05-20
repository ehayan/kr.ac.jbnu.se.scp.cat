import { Badge } from 'reactstrap';
import { Accordion } from 'react-bootstrap';

const ProjectList = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>
          Project 1
          <Badge className='m-l-10' pill color='primary'>
            프로젝트 생성날짜
          </Badge>
        </Accordion.Header>
        <Accordion.Body>참여자 이름, 등록된 도구 갯수</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          Project 2
          <Badge className='m-l-10' pill color='primary'>
            프로젝트 생성날짜
          </Badge>
        </Accordion.Header>
        <Accordion.Body>참여자 이름, 등록된 도구 갯수</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProjectList;

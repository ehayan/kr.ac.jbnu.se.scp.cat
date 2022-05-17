import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';

import Form from '../../basic/form';
const Setting = () => {
  const [Content, setContent] = useState(true);

  return (
    <Container>
      <div className='px-4 '>
        {/* 제목 */}
        <div>
          <Container>
            <Row className='justify-content-center'>
              <Col className='text-center'>
                <h2 className='title font-bold'>Projects Setting</h2>
                <h6 className='subtitle'>
                  등록된 프로젝트 수정 / 프로젝트 추가
                </h6>
              </Col>
            </Row>
          </Container>
        </div>

        {/* navbar */}
        <Navbar className='navbar-expand-lg h1-nav'>
          <Nav navbar className='mt-2'>
            <NavItem className='active'>
              <NavLink onClick={() => setContent(true)}>
                Registerd Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setContent(false)}>
                Add New Project
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {/* main */}
        <div>
          {Content ? (
            //   Registered Projects
            <ListGroup as='ol' numbered>
              <ListGroupItem
                as='li'
                className='d-flex justify-content-between align-items-start'
              >
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>2022_Capston_Project</div>
                  참여자 이름
                </div>
                <Badge color='primary' pill>
                  14
                </Badge>
              </ListGroupItem>
              <ListGroupItem
                as='li'
                className='d-flex justify-content-between align-items-start'
              >
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>React_Project</div>
                  참여자 이름
                </div>
                <Badge color='primary' pill>
                  14
                </Badge>
              </ListGroupItem>
            </ListGroup>
          ) : (
            //   ADD new Project
            <Form />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Setting;

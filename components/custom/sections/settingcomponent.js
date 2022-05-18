import React, { useState } from 'react';
import { Container, Navbar, Nav, NavItem, NavLink, Badge } from 'reactstrap';

import { Accordion } from 'react-bootstrap';

import Form from '../../basic/form';
const Setting = () => {
  const [Content, setContent] = useState(true);

  return (
    <Container>
      <div className='px-4 '>
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

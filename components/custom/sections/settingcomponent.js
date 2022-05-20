import React, { useState } from 'react';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import ProjectList from './projectlistcomponent';
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
            <NavItem>
              <NavLink>Project Invitation</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {/* main */}
        <div>
          {Content ? (
            <ProjectList />
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

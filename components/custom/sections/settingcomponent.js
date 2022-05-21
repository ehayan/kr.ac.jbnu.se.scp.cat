import React, { useState } from 'react';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import ProjectList from './projectlistcomponent';
import Form from '../../basic/form';
import Invitation from './invitationcomponent';
const Setting = () => {
  const [Content, setContent] = useState(ProjectList);

  return (
    <Container>
      <div className='px-4'>
        {/* navbar */}
        <Navbar className='navbar-expand-lg h1-nav'>
          <Nav navbar className='mt-2'>
            <NavItem className='active'>
              <NavLink onClick={() => setContent(ProjectList)}>
                Registerd Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setContent(Form)}>
                Add New Project
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setContent(Invitation)}>
                Project Invitation
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {/* main */}
        <div children={Content} />
      </div>
    </Container>
  );
};

export default Setting;

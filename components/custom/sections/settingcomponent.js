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
                <p>Registerd Projects</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setContent(Form)}>
                <p>Add New Project</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setContent(Invitation)}>
                <p>Project Invitation</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {/* main */}
        <div children={Content} />
      </div>
      <style jsx>{`
        p {
          font-family: 'Spoca_B';
        }
      `}</style>
    </Container>
  );
};

export default Setting;

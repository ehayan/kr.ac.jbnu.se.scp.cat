import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import ProjectList from './projectlistcomponent';
import Form from '../../basic/form';
import Invitation from './invitationcomponent';
import { useRouter } from 'next/router';

const Setting = ({session}) => {
  const [Content, setContent] = useState("list");
  const [projects, setProjects] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('/api/addproject');
      const data = await response.json();
      return data;
    }
    getResponse().then((data) => {
      const allProjects = data.message;
      let userProjects = [];
      allProjects.forEach(element => {
        element.users.forEach((user) => {
          if(session.user.email == user.email)
          userProjects.push(element);
        })
      });
      setProjects(userProjects);
    });
    
    const getInvitationResponse = async () => {
      const response = await fetch('/api/invitation');
      const data = await response.json();
      return data;
    }
    getInvitationResponse().then((data) => {
      const allInvitations = data.message;
      const receiver = session.user.email;
      let userInvitations = [];
      allInvitations.forEach(element => {
        if(element.receiver == receiver)
        userInvitations.push(element);
      });
      setInvitations(userInvitations);
    });
  }, []);
  
  return (
    <Container>
      <div className='px-4'>
        {/* navbar */}
        <Navbar className='navbar-expand-lg h1-nav'>
          <Nav navbar className='mt-2'>
            <NavItem className='active'>
              <NavLink onClick={() => setContent("list")}>
                <p>Registerd Projects</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setContent("add")}>
                <p>Add New Project</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setContent("invitation")}>
                <p>Project Invitation</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        {/* main */}
        <div>
          {
            (Content=="list") ? <ProjectList router = {router} session={session} projects={projects}/> :
            (Content=="add") ? <Form session={session} /> :
            (Content=="invitation") ? <Invitation invitations={invitations} session={session} /> : null
            
          }
        </div>
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


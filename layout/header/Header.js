import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import GithubDetailsMenuElement from'@github/details-menu-element';
import { useRouter } from 'next/router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from 'reactstrap'; //module
import { signIn, signOut, useSession } from 'next-auth/react';
// import { IoMail, IoMailUnread} from 'react-icons/io5';
import { GoTriangleDown } from 'react-icons/go';
import logo from '../../assets/images/logos/probby_logo.png';

const Header = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  // const [read, setRead] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className='topbar' id='top'>
      <div className='header6'>
        <Container className='po-relative'>
          <Navbar className='navbar-expand-lg h6-nav-bar'>
            <NavbarBrand href='/'>
              <Image src={logo} width='100px' height='60px' />
            </NavbarBrand>

            <NavbarToggler onClick={toggle}>
              <span className='ti-menu'></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className='hover-dropdown ml-auto'
              id='h6-info'
            >
              <Nav navbar className='ml-auto'>
                <NavItem className={session ? '' : 'hide'}>
                  <Link href='/project-dashboard'>
                    <a
                      className={
                        router.pathname == '/project'
                          ? 'text-white nav-link'
                          : 'nav-link'
                      }
                    >
                      Project
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/toolhelp/github'>
                    <a
                      className={
                        router.pathname == '/toolhelp/github'
                          ? 'text-white nav-link'
                          : 'nav-link'
                      }
                    >
                      Tool Help
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              {/* <div className={session ? '' : 'hide'}>
                <details open className='m-l-10 m-r-15'>
                  <summary className='alarm-bell alarm-background' type='button' onClick={() => {
                    if(!read){
                      setRead(true);
                    } else if(read){
                      setRead(true);
                    }
                  }}>
                    {read ? <IoMail size={25} /> : <IoMailUnread size={25}/>}
                  </summary>
                  <details-menu role="menu">
                    <ul className='alarm-content'>
                      <li>alarm 1</li>
                      <li>alarm 2</li>
                    </ul>
                  </details-menu>
                </details>
              </div> */}
              <div className='act-buttons'>
                <button
                  className='btn btn-light font-14'
                  onClick={() => {
                    if (session) {
                      signOut();
                    } else if (!session) {
                      signIn('google');
                    }
                  }}
                >
                  {session ? 'Logout' : 'Login'}
                </button>
              </div>
            </Collapse>
            <style jsx>{`
              h3 {
                color: white;
              }
            `}</style>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;

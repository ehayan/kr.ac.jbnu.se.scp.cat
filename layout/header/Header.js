import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import logo from '../../assets/images/logos/small_cat_logo.png';

const Header = () => {
  const {data:session, status} = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  if(status === 'loading'){
    return <p>Loading...</p>
  }

  return (
    <div className='topbar' id='top'>
      <div className='header6'>
        <Container className='po-relative'>
          <Navbar className='navbar-expand-lg h6-nav-bar'>
            <NavbarBrand href='/'>
              <Image src={logo} />
            </NavbarBrand>
            <span>Cat</span>
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
                <NavItem>
                  <Link href='/link'>
                    <a
                      className={
                        router.pathname == '/link'
                          ? 'text-white nav-link'
                          : 'nav-link'
                      }
                    >
                      Link
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/toolhelp'>
                    <a
                      className={
                        router.pathname == '/toolhelp'
                          ? 'text-white nav-link'
                          : 'nav-link'
                      }
                    >
                      Tool Help
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              <div className='act-buttons'>
                <button className='btn btn-light font-14' onClick={() => {
                  if(session){
                    signOut();
                  }
                  else if(!session) {
                    signIn();
                  }
                }}>
                  {session ? "Logout" : "Login"}
                </button>
              </div>
            </Collapse>
            <style jsx>{`
              span {
                font-size: 20px;
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

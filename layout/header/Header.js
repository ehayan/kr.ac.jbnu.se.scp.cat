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
import logo from '../../assets/images/logos/small_cat_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
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
                  <Link href='/basic'>
                    <a
                      className={
                        router.pathname == '/basic'
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
                <NavLink
                  href='/login'
                  className='btn btn-light font-14'
                  // target='_blank'
                >
                  Login
                </NavLink>
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

import { Button, Nav, NavItem } from 'reactstrap';
import Image from 'next/image';
import logo from '../../assets/images/logos/cat_logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

const navigation = [
  {
    title: 'Dashboard',
    href: '/project',
  },
  {
    title: 'Link',
    href: '/link',
  },
  {
    title: 'GitHub',
    href: '/project-github',
  },
  {
    title: 'Tool Help',
    href: '/toolhelp',
  },
];

const Sidebar = () => {
  const { data: session } = useSession();
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className='p-20'>
      <div className='d-flex align-items-center'>
        <a href='/'>
          <Image src={logo} height={'60px'} width={'60px'} />
        </a>
        <h4 className='m-l-5'>Cat</h4>
      </div>
      <div className='act-buttons pt-2 mt-2 m-l-15'>
        <button
          className='btn btn-light font-14 '
          onClick={() => {
            if (session) {
              signOut();
            }
          }}
        >
          {session ? 'Logout' : 'Login'}
        </button>
      </div>
      <div className='pt-2 mt-2'>
        <Nav vertical className='sidebarNav'>
          {navigation.map((navi, index) => (
            <NavItem key={index} className='sidenav-bg'>
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href ? 'nav-link' : 'text-dark nav-link'
                  }
                >
                  <i className={navi.icon}></i>
                  <span className='ms-3 d-inline-block'>{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          {/* <Button
            color='danger'
            tag='a'
            target='_blank'
            className='mt-3'
            href='https://www.wrappixel.com/templates/ample-react-dashboard/?ref=33'
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;

import { Nav, NavItem } from 'reactstrap';
import { Badge, Button } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../../assets/images/logos/probby_logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  FaClipboardList,
  FaRegPlusSquare,
  FaGithub,
  FaGoogleDrive,
  FaRegCalendarAlt,
  FaTrello,
  FaSlack,
} from 'react-icons/fa';
const navigation = [
  {
    title: 'Dashboard',
    href: '/project-dashboard',
    icon: <FaClipboardList />,
  },
  {
    title: 'Link',
    href: '/project-link',
    icon: <FaRegPlusSquare />,
  },
  {
    title: 'GitHub',
    href: '/project-github',
    icon: <FaGithub />,
  },
  {
    title: 'GoogleDrive',
    href: '/project-googledrive',
    icon: <FaGoogleDrive />,
  },
  {
    title: 'Trello',
    href: '/project-trello',
    icon: <FaTrello />,
  },
  {
    title: 'Slack',
    href: '/project-slack',
    icon: <FaSlack />,
  },
  {
    title: 'Calendar',
    href: '/project-calendar',
    icon: <FaRegCalendarAlt />,
  },
];

const Sidebar = () => {
  const { data: session } = useSession();
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className='p-20'>
      <div className='d-flex justify-content-center'>
        <a href='/'>
          <Image src={logo} width='125px' height='75px' />
        </a>
      </div>
      <div className='d-flex justify-content-center m-t-10'>
        <Badge bg='dark' style={{ fontSize: 14, fontFamily: 'Spoca_R' }}>
          2022 CAPSTONE
        </Badge>
      </div>

      <div className='d-flex act-buttons justify-content-center m-t-20'>
        <Button
          variant='outline-warning'
          onClick={() => {
            if (session) {
              signOut();
            }
          }}
        >
          {session ? 'Logout' : 'Login'}
        </Button>
      </div>

      <div className='pt-2 m-t-10'>
        <Nav vertical className='sidebarNav'>
          {navigation.map((navi, index) => (
            <NavItem key={index} className='sidenav-bg'>
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? 'nav-link text-warning'
                      : ' nav-link text-white'
                  }
                >
                  <i>{navi.icon}</i>
                  <span className='ms-3 d-inline-block'>{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>

      <style jsx>{`
        a {
          font-family: 'Spoca_R';
        }
      `}</style>
    </div>
  );
};

export default Sidebar;

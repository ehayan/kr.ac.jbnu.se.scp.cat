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
      <div className='d-flex align-items-center'>
        <a href='/'>
          <Image src={logo} width='125px' height='75px' />
        </a>
      </div>

      <Badge bg='primary' style={{ fontSize: 15 }} className='m-l-20 m-t-10'>
        Project 1
      </Badge>

      <div className='act-buttons m-t-20 m-l-20'>
        <Button
          variant='warning'
          className='font-14'
          onClick={() => {
            if (session) {
              signOut();
            }
          }}
        >
          {session ? 'Logout' : 'Login'}
        </Button>
      </div>

      <div className='pt-2 mt-2'>
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
    </div>
  );
};

export default Sidebar;

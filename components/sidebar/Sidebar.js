import { Button, Nav, NavItem } from 'reactstrap';
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
    href: '/link',
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
          <Image src={logo} width='100px' height='60px' />
        </a>
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

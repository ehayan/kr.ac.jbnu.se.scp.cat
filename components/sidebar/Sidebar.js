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
import { useEffect, useState } from 'react';

const Sidebar = (props) => {
  const { data: session } = useSession();
  let curl = useRouter();
  const location = curl.pathname;
  const projectId = curl.query.projectId;
  const [title, setTitle] = useState("");

  useEffect(() => {
    //save the post\
    const getResponse = async () => {
      const response = await fetch('/api/addproject');
      const data = await response.json();
      return data;
    }
    getResponse().then((data) => {
      const projects = data.message;
      const project = projects.filter((project) => (project._id == projectId))[0];
      setTitle(project.title)
    })
  }, []);

  const navigation = [
    {
      title: 'Dashboard',
      href: '/project-dashboard?projectId='+projectId,
      icon: <FaClipboardList />,
    },
    {
      title: 'Link',
      href: '/project-link?projectId='+projectId,
      icon: <FaRegPlusSquare />,
    },
    {
      title: 'GitHub',
      href: '/project-github?projectId='+projectId,
      icon: <FaGithub />,
    },
    {
      title: 'GoogleDrive',
      href: '/project-googledrive?projectId='+projectId,
      icon: <FaGoogleDrive />,
    },
    {
      title: 'Trello',
      href: '/project-trello?projectId='+projectId,
      icon: <FaTrello />,
    },
    {
      title: 'Slack',
      href: '/project-slack?projectId='+projectId,
      icon: <FaSlack />,
    },
    {
      title: 'Calendar',
      href: '/project-calendar?projectId='+projectId,
      icon: <FaRegCalendarAlt />,
    },
  ];

  return (
    <div className='p-20'>
      <div className='d-flex justify-content-center'>
        <a href='/'>
          <Image src={logo} width='125px' height='75px' />
        </a>
      </div>
      <div className='d-flex justify-content-center m-t-10'>
        <Badge bg='dark' style={{ fontSize: 14, fontFamily: 'Spoca_R' }}>
          {title}
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

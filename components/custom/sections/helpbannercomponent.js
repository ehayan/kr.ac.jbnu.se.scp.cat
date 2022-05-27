import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaGithub, FaTrello, FaSlack, FaGoogleDrive } from 'react-icons/fa';

const HelpBannerComponent = () => {
  const router = useRouter();

  return (
    <div className='spacer bg-light'>
      <Container>
        <Row className='justify-content-center'>
          <Col className='text-center'>
            <h1 className='title font-bold text-warning'>
              Collaboration Support Tools Help
            </h1>
            <h6 className='subtitle text-white'>
              협업 지원 도구를 사용하기 어렵다면,
              <br />
              PROBBY가 제공하는 도움말을 통해 사용법을 익혀보세요.
            </h6>

            <div className='m-t-40'>
              <Link href='/toolhelp/github'>
                <a
                  className={
                    router.pathname === '/toolhelp/github'
                      ? 'tool-selected'
                      : 'text-white'
                  }
                >
                  <FaGithub size={20} className='m-r-5' />
                  GitHub
                </a>
              </Link>

              <Link href='/toolhelp/googledrive'>
                <a
                  className={
                    router.pathname === '/toolhelp/googledrive'
                      ? 'tool-selected'
                      : 'text-white'
                  }
                >
                  <FaGoogleDrive size={20} className='m-r-5' />
                  Google Drive
                </a>
              </Link>

              <Link href='/toolhelp/trello'>
                <a
                  className={
                    router.pathname === '/toolhelp/trello'
                      ? 'tool-selected'
                      : 'text-white'
                  }
                >
                  <FaTrello size={20} className='m-r-5' />
                  Trello
                </a>
              </Link>
              <Link href='/toolhelp/slack'>
                <a
                  className={
                    router.pathname === '/toolhelp/slack'
                      ? 'tool-selected'
                      : 'text-white'
                  }
                >
                  <FaSlack size={20} className='m-r-5' />
                  Slack
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <style jsx>{`
          h1 {
            font-family: 'Baskin_R';
          }

          h6 {
            font-family: 'RIDI';
          }

          a {
            font-family: 'Spoca_R';
            text-decoration: none;
            color: black;
            font-size: large;
            margin: 10px;
          }
        `}</style>
      </Container>
    </div>
  );
};

export default HelpBannerComponent;

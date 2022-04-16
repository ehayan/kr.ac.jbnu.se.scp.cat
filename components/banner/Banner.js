//for toolhelp page
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import githubLogo from "../../assets/images/tool-logos/git-hub.png";
import trelloLogo from "../../assets/images/tool-logos/trello.png";
import slackLogo from "../../assets/images/tool-logos/slack.png";
import notionLogo from "../../assets/images/tool-logos/notion.png";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="static-slider-head">
      <Container>
        <Row  className="justify-content-center">
          <Col lg="8" md="10" className="align-self-center text-center">
            <h1 className="title">지원 도구 사용법</h1>
            <h5 className="subtitle font-light">
              협업 지원 도구를 사용하기 어렵다면
              <br /> CAT이 제공하는 도움말을 통해 사용법을 익혀보세요
            </h5>
            <br />
            <Image src={githubLogo} width={80} height={80}/>
            <Image src={trelloLogo} width={80} height={80}/>
            <Image src={slackLogo} width={80} height={80}/>
            <Image src={notionLogo} width={80} height={80}/>
            <br />
            <Link href="/toolhelp">
              <a className={router.pathname === "/index"? "active" : ""}>GitHub  </a>
            </Link>
            <Link href="/toolhelp">
              <a className={router.pathname === "/index"? "active" : ""}>Trello  </a>
            </Link>
            <Link href="/toolhelp">
              <a className={router.pathname === "/index"? "active" : ""}>Slack  </a>
            </Link>
            <Link href="/toolhelp">
              <a className={router.pathname === "/index"? "active" : ""}>Notion  </a>
            </Link>
            <style jsx>{`
              a{
                color: white;
                text-decoration: none;
              }
              .active {
                color: white;
              }
            `}</style>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

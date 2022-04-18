/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import githubLogo from "../../../assets/images/tool-logos/git-hub.png";
import trelloLogo from "../../../assets/images/tool-logos/trello.png";
import slackLogo from "../../../assets/images/tool-logos/slack.png";
import notionLogo from "../../../assets/images/tool-logos/notion.png";
import { useRouter } from "next/router";
import Link from "next/link";

const HelpBannerComponent = () => {
  const router = useRouter();

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="0" className="text-center">
              <h1 className="title font-bold">지원 도구 도움말</h1>
              <h6 className="subtitle">
                협업 지원 도구를 사용하기 어렵다면
                <br />
                CAT이 제공하는 도움말을 통해 사용법을 익혀보세요.
              </h6>
              <br />
              <Image src={githubLogo} width={80} height={80}/>&emsp;
              <Image src={trelloLogo} width={80} height={80}/>&emsp;
              <Image src={slackLogo} width={80} height={80}/>&emsp;
              <Image src={notionLogo} width={80} height={80}/>
              <br />
              <Link href="/toolhelp/github"  >
                <a className={router.pathname === "/toolhelp/github" ? "tool-selected" : ""}>
                  GitHub
                </a>
              </Link>&emsp;&emsp;
              <Link href="/toolhelp/trello">
                <a className={router.pathname === "/toolhelp/trello" ? "tool-selected" : ""}>
                  Trello
                </a>
              </Link>&emsp;&emsp;
              <Link href="/toolhelp/slack">
                <a className={router.pathname === "/toolhelp/slack" ? "tool-selected" : ""}>
                  Slack
                </a>
              </Link>&emsp;&emsp;
              <Link href="/toolhelp/notion">
                <a className={router.pathname === "/toolhelp/notion" ? "tool-selected" : ""}>
                  Notion
                </a>
              </Link>
            </Col>
          </Row>
          <style jsx>{`
            a{
              text-decoration: none;
              color: black;
              font-size: large;
            }
          `}</style>
        </Container>]
      </div>
    </div>
  );
};

export default HelpBannerComponent;
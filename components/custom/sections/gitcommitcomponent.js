//'A' => repository name
// repository link => repository url
// commit data => commit date(YYYY.MM.DD HH:MM:SS)
// Image => commiter's profile image
// commit message => commit message

/* eslint-disable */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GitLogo from "../../../assets/images/tool-logos/small-git-hub.png";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import * as Github from "../../../api/github";

const GitCommitComponent = () => {
  const link = "https://github.com/gusdn6901/kr.ac.jbnu.se.scp.cat";
  const [commits, setCommits] = useState([]);
  useEffect(()=> {
    Github.getCommits(link).then((data)=> {
      setCommits(data);
    });
  }, []);
  return (
    <div>
      <div className="pricing8 spacer b-t">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">
                Current commits of '{Github.getRepositoryName(link)}' repository
              </h2>
              <h6 className="subtitle">
                가장 최근에 푸시된 커밋과 관련된 정보를 확인할 수 있습니다.
              </h6>
              <span className="subtitle">
                지정된 리포지토리 :&nbsp;
              </span>
              <a href={link}>
                {link}
              </a>
            </Col>
          </Row>
          <Row className="m-t-40">
            {commits.map((commit) => (
              <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                {commit.date.split('T')[0]} {commit.date.split('T')[1].split('Z')[0]}
                </p>
                <CardBody className="p-30 text-center">
                  <div
                   style={{
                     borderRadius:'50%',
                     border:"2px solid white",
                     display: "inline-block",
                     width: 70,
                     height: 70,
                     overflow: "hidden"
                    }}
                   >
                    <Image src={commit.avatar_url} width="70" height="70" objectFit="cover" />
                  </div>
                  <h5>{commit.name}</h5>
                  <p className="m-t-40">
                      <a href="https://github.com/gusdn6901/kr.ac.jbnu.se.scp.cat/commit/00b418ecc34d842a64b56d8365e4725d166a2b2f">
                        {commit.message}
                      </a>
                  </p>
                </CardBody>
              </Card>
            </Col>
            ))}
            {/* <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo} />
                  <h5>name</h5>
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-danger p-15 btn-arrow btn-block">
                date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo}/>
                  <h5>name</h5>
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo}/>
                  name
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GitCommitComponent;

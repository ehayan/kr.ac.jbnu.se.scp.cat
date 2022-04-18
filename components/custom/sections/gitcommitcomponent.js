//'A' => repository name
// repository link => repository url
// commit data => commit date(YYYY.MM.DD HH:MM:SS)
// Image => commiter's profile image
// commit message => commit message

/* eslint-disable */
import React from "react";
import Image from "next/image";
import GitLogo from "../../../assets/images/tool-logos/small-git-hub.png";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const GitCommitComponent = () => {
  return (
    <div>
      <div className="pricing8 spacer b-t">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">
                Current commits of 'A' repository
              </h2>
              <h6 className="subtitle">
                가장 최근에 푸시된 커밋과 관련된 정보를 확인할 수 있습니다.
              </h6>
              <span className="subtitle">
                지정된 리포지토리 :&nbsp;
              </span>
              <a href="/">
                repository link
              </a>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                  commit date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo}/>
                  <h5>commiter</h5>
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-danger p-15 btn-arrow btn-block">
                  commit date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo}/>
                  <h5>commiter</h5>
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" className="ml-auto pricing-box align-self-center">
              <Card className="b-all">
                <p className="commit-txt btn-info p-15 btn-arrow btn-block">
                  commit date
                </p>
                <CardBody className="p-30 text-center">
                  <Image src={GitLogo}/>
                  <h5>commiter</h5>
                  <p className="m-t-40">
                    commit message
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GitCommitComponent;

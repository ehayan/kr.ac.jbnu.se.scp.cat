/* eslint-disable */
import React from "react";
import Image from "next/image";
import { Row, Col, Container } from "reactstrap";
import BigGitHub from "../../../../assets/images/tool-logos/big-git-hub.png";

const GitHubHelp = () => {

  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center ">
              <h1 className="title" >GitHub</h1>
              <h5 className="subtitle op-8">
                버전 관리 및 협업을 위한 코드 호스팅 플랫폼
              </h5>
              <br />
              <h6>
                GtiHub는 버전 관리 및 협업을 위한 코드 호스팅 플랫폼입니다. 
                GitHub는 코드 저장소인 리포지토리(repository)를 생성할 수 있습니다.
                리포지토리는 일반적으로 단일 프로젝트를 구성하는 데 사용됩니다.
              </h6>
            </Col>
            <Col md="3" className="align-self-center ">
              <Image src={BigGitHub}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GitHubHelp;

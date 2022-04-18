/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";


const HelpMainComponent = () => {

  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" className="align-self-center ">
              <span className="label label-rounded label-inverse">
                Collaborate Assistant Tools
              </span>
              <h2 className="title" >지원 도구 사용법</h2>
              <h6 className="subtitle op-8">
                CAT은 여러 협업 지원 도구에 대한 사용법을 제공합니다.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HelpMainComponent;

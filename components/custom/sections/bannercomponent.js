/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import { useRouter } from "next/router";
const BannerComponent = () => {
  const router = useRouter();

  return (
    <div>
      {/* <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Banners</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="0" className="align-self-center ">
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

export default BannerComponent;

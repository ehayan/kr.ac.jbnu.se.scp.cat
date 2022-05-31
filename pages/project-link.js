import Head from "next/head";
import AddLinkComponent from "../components/custom/sections/addlinkcomponent";
import RegisteredList from "../components/custom/sections/linklistcomponent";
import { Container, Row, Col } from "reactstrap";
// import { useRef, useState } from "react";

const Link = (page) => {
  return (
    <div>
      <Head>
        <title>PROBBY | Link</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-l-30">
        <h2 className="title font-bold">ADD LINK</h2>
        <p className="m-t-10">
          프로젝트에 추가하고 싶은 도구를 선택한 후 url을 입력해주세요
        </p>
      </div>
      <Container>
        <Row className="m-t-30">
          <Col md="6">
            <AddLinkComponent />
          </Col>
          <Col md="6" className="m-t-60">
            <RegisteredList />
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        h2 {
          font-family: "Spoca_B";
        }
        p {
          font-family: "RIDI";
        }
      `}</style>
    </div>
  );
};
export default Link;

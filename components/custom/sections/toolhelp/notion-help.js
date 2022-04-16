/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import BigNotion from "../../../../assets/images/tool-logos/big-notion.png";

const NotionHelp = () => {

  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center ">
              <h1 className="title" >Notion</h1>
              <h6 className="subtitle op-8">
                Notion
              </h6>
            </Col>
            <Col md="3" className="align-self-center ">
              <Image src={BigNotion}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NotionHelp;
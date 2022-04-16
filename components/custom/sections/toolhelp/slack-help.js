/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import BigSlack from "../../../../assets/images/tool-logos/big-slack.png";

const SlackHelp = () => {

  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="align-self-center ">
              <h1 className="title" >Slack</h1>
              <h6 className="subtitle op-8">
                Slack
              </h6>
            </Col>
            <Col md="3" className="align-self-center ">
              <Image src={BigSlack}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SlackHelp;
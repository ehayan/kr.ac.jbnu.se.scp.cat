/* eslint-disable */
import React from "react";
import Image from "next/image";
import { Row, Col, Container } from "reactstrap";
import BigTrello from "../../../../assets/images/tool-logos/big-trello.png";

const TrelloHelp = () => {

  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" className="align-self-center ">
              <h1 className="title" >Trello</h1>
              <h6 className="subtitle op-8">
                Trello
              </h6>
            </Col>
            {/* <Col md="3" className="align-self-center ">
                <Image src={BigTrello}/>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TrelloHelp;
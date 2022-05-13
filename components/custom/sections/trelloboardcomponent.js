/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import * as Github from "../../../api/github";

const TrelloBoardComponent = () => {
  
  return (
    <div>
      <div>
        <div>
          <h2 className="title">
            <span className="m-l-20">Board Name</span>
          </h2>
        </div>
          
          <Row className="m-t-30">
            <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card  m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">To Do	&#40;requirments&#41;</p>
                <CardBody>
                  <Card className="card-width b-all">
                      <CardBody >
                          <p className="board-card-content">트렐로/노션/슬랙</p>
                      </CardBody>
                  </Card>
                  <Card className="card-width b-all">
                      <CardBody >
                          <p className="board-card-content">대시보드&#40;캘린더/참여자추가&#41;</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">Done	&#40;requirments&#41;</p>
                <CardBody>
                  <Card className="card-width b-all">
                      <CardBody >
                          <p className="board-card-content">깃허브 연동</p>
                      </CardBody>
                  </Card>
                  <Card className="card-width b-all">
                      <CardBody >
                          <p className="board-card-content">구글 계정 로그인</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">To Do	&#40;assignments&#41;</p>
                <CardBody>
                  <Card className="card-width b-all">
                      <CardBody >
                          <p className="board-card-content">12차 과제&#40;과제 진행 사항 발표&#41;</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
            <Col md="2" className="m-l-20 align-self-center">
              <Card className="board-card m-b-0 p-0 b-all">
                <p className="board-card-name m-b-0 ">Done	&#40;assignments&#41;</p>
                <CardBody>
                  <Card className=" card-width b-all">
                      <CardBody >
                          <p className="board-card-content">1차 과제&#40;브레인스토밍&#41;</p>
                      </CardBody>
                  </Card>
                  <Card className=" card-width b-all">
                      <CardBody >
                          <p className="board-card-content">2차 과제&#40;아이디어 선정&#41;</p>
                      </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
      </div>
    </div>
  );
};

export default TrelloBoardComponent;
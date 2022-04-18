/* eslint-disable */
import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from 'reactstrap';

const Cards = () => {
  return (
    <div className='m-t-20'>
      <Container>
        <Row>
          <Col md='4'>
            <Card body className='card-shadow'>
              <h3>Issue</h3>
              <CardText>현재 깃허브 이슈</CardText>
            </Card>
          </Col>
          <Col md='4'>
            <Card body className='card-shadow'>
              <h3>Registered Project</h3>
              <CardText>등록된 프로젝트 갯수</CardText>
            </Card>
          </Col>
          <Col md='4'>
            <Card body className='card-shadow'>
              <h3>Registered Link</h3>
              <CardText>등록된 링크 갯수</CardText>
            </Card>
          </Col>
        </Row>

        <Card body className='card-shadow'>
          <h3>Dashboard</h3>
          <CardTitle>대시보드</CardTitle>
          <CardText>Dashboard</CardText>
        </Card>
      </Container>
    </div>
  );
};

export default Cards;

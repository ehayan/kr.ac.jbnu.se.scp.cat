import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../assets/images/logos/cat_logo.png';
import Header from '../../layout/header/Header';


const Banner = () => {
  return (
    <div className='static-slider-head banner2'>
      <Container >
        <Row >
          <Col lg='4' md='4' className='align-self-center'>
            <h1 className='title'>어서오세요 ##님</h1>
          </Col>
          <Col lg='8' md='8' >
            <Card body className='card-shadow'>
              <h2 className='text-center m-t-5'>Invitation</h2><br/>
              <Row>
                <Col md="4">
                  <Card body className='card-shadow'>
                    <div>
                      <p className='text-left'>초대자 : aaa</p>
                      <p className='text-left'>프로젝트 : bbb</p>
                      <button className=''>수락</button>
                      <button className='m-l-10'>거절</button>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card body className='card-shadow'>
                    <div>
                      <p className='text-left'>초대자 : ccc</p>
                      <p className='text-left'>프로젝트 : ddd</p>
                      <button className=''>수락</button>
                      <button className='m-l-10'>거절</button>
                    </div>
                  </Card>
                </Col>
                <Col md="4">
                  <Card body className='card-shadow'>
                    <div>
                      <p className='text-left'>초대자 : eee</p>
                      <p className='text-left'>프로젝트 : fff</p>
                      <button className=''>수락</button>
                      <button className='m-l-10'>거절</button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

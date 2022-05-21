import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../assets/images/logos/probby_logo.png';

const Banner = () => {
  return (
    <div className='static-slider-head banner2'>
      <Container>
        <Row>
          <Col className='align-self-center'>
            <h1 className='title'>어서오세요 ##님</h1>
          </Col>
          <Col>
            <Image src={bannerimg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

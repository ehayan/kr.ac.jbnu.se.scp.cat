import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../assets/images/logos/probby.png';

const BeforeLoginBanner = () => {
  return (
    <div className='static-slider-head banner2'>
      <Container>
        <Row>
          <Col className='align-self-center'>
            <h1 className='title'>안녕하세요</h1>
            <style jsx>{`
              h1,
              h4 {
                font-family: 'Lotte';
              }
            `}</style>

            <h4 className='subtitle font-light'>
              협업 지원 도구 통합
              <br /> PROBBY
            </h4>
          </Col>
          <Col>
            <Image src={bannerimg} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeforeLoginBanner;

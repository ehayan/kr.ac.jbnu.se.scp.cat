import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../assets/images/logos/probby.png';

const BeforeLoginBanner = () => {
  return (
    <div className='static-slider-head'>
      <Container>
        <Row>
          <Col className='align-self-center'>
            <h1 className='title'>안녕하세요 </h1>
            <h4 className='subtitle'>
              협업 지원 도구 통합 서비스
              <br /> PROBBY
            </h4>
            <style jsx>{`
              h1,
              h4 {
                font-family: 'Lotte';
              }
            `}</style>
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

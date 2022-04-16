import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../assets/images/logos/cat_logo.png';

const Banner2 = () => {
  return (
    <div className='static-slider-head banner2'>
      <Container>
        <Row className=''>
          <Col lg='6' md='6' className='align-self-center'>
            <h1 className='title'>안녕하세요</h1>
            <h4 className='subtitle font-light'>
              협업 지원 도구 통합
              <br /> Collaborate Assistant Tools
            </h4>
            {/* <a
              href='https://wrappixel.com/templates/nextkit-nextjs-free-uikit'
              className='btn btn-danger m-r-20 btn-md m-t-30 '
            >
              Download Free
            </a>
            <Link href='/#coming'>
              <a className='btn btn-md m-t-30  btn-outline-light '>
                Upgrade To Pro
              </a> */}
            {/* </Link> */}
          </Col>
          <Col lg='6' md='6'>
            <Image src={bannerimg} alt='hero banner' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;

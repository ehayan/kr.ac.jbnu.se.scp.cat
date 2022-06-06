import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../assets/images/logos/probby_logo.png';
import { useSession } from 'next-auth/react';

const Banner = () => {
  const { data: session } = useSession();
  return (
    <div className='static-slider-head'>
      <Container>
        <Row>
          <Col className='align-self-center'>
            <h1 className='title'>어서오세요 {session.user.name}님 !</h1>
            <style jsx>{`
              h1 {
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

export default Banner;

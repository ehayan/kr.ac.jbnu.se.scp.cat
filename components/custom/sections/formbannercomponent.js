import React from 'react';
import { Row, Col, Container, Form, Alert } from 'reactstrap';
import Image from 'next/image';
import bannerimg from '../../../assets/images/logos/cat_logo.png';

const FormBannerComponent = () => {
  return (
    <div>
      <div className='bg-light'>
        <section>
          <div id='banner1' className='banner spacer'>
            <Container>
              <Row className='m-l-40'>
                <Col lg='5' md='7' className='align-self-center'>
                  <h2 className='title font-bold'>ADD LINK</h2>
                  <p className='m-t-20 m-b-40'>
                    Please enter the link(url) you want to add
                  </p>
                  <Form className='m-t-40'>
                    <input
                      type='url'
                      name='link'
                      placeholder='Enter Link address'
                      className='font-15'
                    />
                    <input
                      type='submit'
                      onClick={console.log('링크추가')}
                      value='ADD'
                      className='bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center'
                    />
                  </Form>
                </Col>
                <Col lg='6' md='5' className='m-l-40 align-self-center ml-auto'>
                  <Image src={bannerimg} className='img-fluid ' />
                </Col>
                <style jsx>{`
                  p {
                    color: #11295f;
                  }
                `}</style>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormBannerComponent;

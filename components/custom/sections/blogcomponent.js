/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card } from 'reactstrap';
import Image from 'next/image';
import img1 from '../../../assets/images/blog/blog-home/img3.jpg';
import img2 from '../../../assets/images/blog/blog-home/img2.jpg';
import img3 from '../../../assets/images/blog/blog-home/img1.jpg';

const BlogComponent = () => {
  return (
    <div>
      <div className='blog-home2 spacer'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='8' className='text-center'>
              <h1 className='title'>등록된 프로젝트</h1>
              <hr></hr>
              <h6 className='subtitle'>
                현재 등록된 프로젝트 <strong>shortcut</strong>
              </h6>
            </Col>
          </Row>
          <Row className='m-t-40 justify-content-center'>
            <Col lg='4' md='6'>
              <Card>
                <a href='#'>
                  <Image
                    className='card-img-top'
                    src={img1}
                    alt='wrappixel kit'
                  />
                </a>
                <div className='date-pos bg-info-gradiant'>
                  Oct<span>23</span>
                </div>
                <h5 className='font-medium m-t-30'>
                  <a href='#' className='link'>
                    Project 1
                  </a>
                </h5>
                <p className='m-t-20'>Project 1 explanation</p>
              </Card>
            </Col>
            <Col lg='4' md='6'>
              <Card>
                <a href='#'>
                  <Image
                    className='card-img-top'
                    src={img2}
                    alt='wrappixel kit'
                  />
                </a>
                <div className='date-pos bg-info-gradiant'>
                  Oct<span>23</span>
                </div>
                <h5 className='font-medium m-t-30'>
                  <a href='#' className='link'>
                    Project 2
                  </a>
                </h5>
                <p className='m-t-20'>Project 2 explanation</p>
              </Card>
            </Col>
            <Col lg='4' md='6'>
              <Card>
                <a href='#'>
                  <Image
                    className='card-img-top'
                    src={img3}
                    alt='wrappixel kit'
                  />
                </a>
                <div className='date-pos bg-info-gradiant'>
                  Oct<span>23</span>
                </div>
                <h5 className='font-medium m-t-30'>
                  <a href='#' className='link'>
                    Project 3
                  </a>
                </h5>
                <p className='m-t-20'>Project 3 explanation</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogComponent;

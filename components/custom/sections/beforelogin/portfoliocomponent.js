/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const PortfolioComponent = () => {
  return (
    <div>
      <div className='spacer'>
        <Container>
          <Row className='justify-content-center'>
            <Col md='7' className='text-center'>
              <h1 className='title'>
                PROBBY <hr></hr>
              </h1>
              <h6 className='subtitle'>
                <strong>Project + Lobby</strong> <br></br>
                개발 협업 시, 취향에 따라 목적에 따라 다양한 협업 도구들을
                사용합니다. <br></br>
                <strong>'협업도구의 산재' </strong>로부터 PROBBY는
                출발하였습니다.
              </h6>

              <style jsx>{`
                h1 {
                  font-family: 'Baskin_B';
                }
                h6 {
                  font-family: 'Spoca_R';
                }
              `}</style>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;

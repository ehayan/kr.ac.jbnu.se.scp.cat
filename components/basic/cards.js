/* eslint-disable */
import CalendarFunction from '../custom/sections/calendar/calendarcomponents';
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
          <Col md='6'>
            <Card body className='card-shadow'>
              <CalendarFunction />
            </Card>
          </Col>

          <Col md='6'>
            <Card body className='card-shadow'>
              <h3>Project Member</h3>
              <p>현재 프로젝트의 참여중인 팀원</p>
              <div className='m-b-5'>
                <span className='m-r-10 p-t-10 p-b-10 dashboard-member'>
                  최성우
                </span>
                <span className='m-r-10 p-t-10 p-b-10 dashboard-member'>
                  김현우
                </span>
                <span className='m-r-10 p-t-10 p-b-10 dashboard-member'>
                  이유정
                </span>
                <span className='m-r-10 p-t-10 p-b-10 dashboard-member'>
                  이하얀
                </span>
              </div>
              <hr />
              <h4>Add Another Member</h4>
              <p>추가하려는 팀원의 구글 메일 주소를 입력해주세요</p>
              <div>
                <input type='text' placeholder='ex@gmail.com' size={25}></input>
                <button className='m-l-5 dashboard-btn'>add</button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;

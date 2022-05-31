/* eslint-disable */
import CalendarFunction from "../custom/sections/calendar/calendarcomponents";
import React, { useState } from "react";
import { Card, Row, Col, Container } from "reactstrap";
import RegisteredLink from "../custom/sections/linklistcomponent";

const Cards = () => {
  const [email, setEmail] = useState("");
  const handleAddMember = ({ target: { value } }) => {
    setEmail(value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "") {
      alert("이메일을 입력하세요");
    } else if (email == "##") {
      alert("존재하지 않거나 잘못된 이메일입니다");
    } else {
      alert(`${email}님에게 초대장을 전송하였습니다`);
    }
  };

  return (
    <div>
      <Container className="m-t-40">
        <Row>
          <Col md="6">
            <Card body className="card-shadow">
              <CalendarFunction />
            </Card>
          </Col>

          <Col md="6">
            <Card body className="card-shadow">
              <h3>Project Member</h3>
              <p>현재 프로젝트의 참여중인 팀원</p>
              <div className="m-b-5">
                <span className="m-r-10 p-t-10 p-b-10 dashboard-member">
                  최성우
                </span>
                <span className="m-r-10 p-t-10 p-b-10 dashboard-member">
                  김현우
                </span>
                <span className="m-r-10 p-t-10 p-b-10 dashboard-member">
                  이유정
                </span>
                <span className="m-r-10 p-t-10 p-b-10 dashboard-member">
                  이하얀
                </span>
              </div>
              <hr />
              <h3>Add Another Member</h3>
              <p>추가하려는 팀원의 구글 메일 주소를 입력해주세요</p>
              <div>
                <input
                  type="text"
                  placeholder="ex@gmail.com"
                  size={25}
                  value={email}
                  onChange={handleAddMember}
                ></input>
                <button
                  type="submit"
                  className="m-l-5 dashboard-btn"
                  onClick={handleSubmit}
                >
                  add
                </button>
              </div>
            </Card>
            <Card body className="card-shadow p-0">
              <RegisteredLink />
            </Card>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        h3 {
          font-family: "Spoca_B";
        }

        p {
          font-family: "RIDI";
        }
      `}</style>
    </div>
  );
};

export default Cards;

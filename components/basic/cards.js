/* eslint-disable */
import CalendarFunction from "../custom/sections/calendar/calendarcomponents";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "reactstrap";
import RegisteredLink from "../custom/sections/linklistcomponent";
import { useRouter } from "next/router";

const Cards = ({projects}) => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch('/api/addproject');
      const data = await response.json();
      return data;
    }
    getResponse().then((data) => {
      const projects = data.message;
      const project = projects.filter((project) => (project._id == projectId))[0];
      setUsers(project.users);
    })
  }, []);

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
                {users.map((user, i) => (
                <span className="m-r-10 p-t-10 p-b-10 dashboard-member">
                  {user.name}
                </span>
                ))
              }
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
              <RegisteredLink projectId={projectId} />
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

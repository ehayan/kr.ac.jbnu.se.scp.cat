/* eslint-disable */
import CalendarFunction from "../custom/sections/calendar/calendarcomponents";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "reactstrap";
import RegisteredLink from "../custom/sections/linklistcomponent";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Cards = ({ projects }) => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch("/api/addproject");
      const data = await response.json();
      return data;
    };
    const getScheduleResponse = async () => {
      const response = await fetch('/api/calendar');
      const data = await response.json();
      return data;
    }
    getResponse().then((data) => {
      const projects = data.message;
      const project = projects.filter((project) => project._id == projectId)[0];
      setUsers(project.users);
      setProjectName(project.title);
    });
    getScheduleResponse().then((data) => {
      const allSchedules = data.message;
      const scheduleDatas = allSchedules.filter((schedule) => (schedule.projectId == projectId))[0];
      const schedules = scheduleDatas.schedules;
      setEvents(schedules);
    })
  }, []);

  const [email, setEmail] = useState("");
  const handleAddMember = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email == "") {
      alert("이메일을 입력하세요");
    } else if (email == "##") {
      alert("존재하지 않거나 잘못된 이메일입니다");
    } else {
      const sender = session.user.email;
      const receiver = email;
      const dateForm = new Date();
      const date =
        dateForm.getFullYear() +
        "." +
        (dateForm.getMonth() + 1) +
        "." +
        dateForm.getDate();
      const requestBody = {
        projectId: projectId,
        sender: sender,
        receiver: receiver,
        date: date,
        projectName: projectName,
      };
      const response = await fetch("/api/invitation", {
        method: "POST",
        body: JSON.stringify(requestBody),
      });
      console.log(response.json());
      setEmail("");
      alert(`${email}님에게 초대장을 전송하였습니다`);
    }
  };

  return (
    <div>
      <Container className="m-t-40">
        <Row>
          <Col md="6">
            <Card body className="card-shadow">
              <CalendarFunction
                events={events}
                setEvents={setEvents}
                projectId={projectId}
                isDashboard={true}
              />
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
                ))}
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

        p,
        span {
          font-family: "RIDI";
        }
      `}</style>
    </div>
  );
};

export default Cards;

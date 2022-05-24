import Head from "next/head";
import CalendarComponent from "../components/custom/sections/calendar/calendarcomponents";
import AddScheduleComponent from "../components/custom/sections/calendar/calendaraddschedulecomponent";
import { Row, Col, Container } from "reactstrap";
import { useState } from "react";

const Dashboard = (page) => {
  const schedules = [
    {
      title: "논문 작성",
      start: "2022-05-06",
      end: "2022-05-09",
    },
    {
      title: "논문 통합",
      start: "2022-05-08",
      end: "2022-05-10",
    },
    {
      title: "17시 교수님 면담",
      start: "2022-05-09",
      end: "2022-05-11",
    },
  ];
  const [events, setEvents] = useState(schedules);

  return (
    <div>
      <Head>
        <title>PROBBY | Calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="m-l-30">
        <h2 className="title font-bold">Calendar</h2>
        <p className="m-t-10 m-b-0">Probby가 제공하는 프로젝트만을 위한</p>
        <p className="m-t-5 p-0 m-b-0">캘린더를 활용해 스케줄을 관리해보세요</p>
      </div> */}
      <Container className="container-width-l m-t-20">
        <Row>
          <Col md="3" className="m-t-60">
            <AddScheduleComponent events={events} setEvents={setEvents} />
          </Col>
          <Col md="9">
            <CalendarComponent events={events} setEvents={setEvents} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Dashboard;

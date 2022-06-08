import Head from 'next/head';
import CalendarComponent from '../components/custom/sections/calendar/calendarcomponents';
import AddScheduleComponent from '../components/custom/sections/calendar/calendaraddschedulecomponent';
import { Row, Col, Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const Dashboard = (page) => {
  const schedules = [
    {
      title: '논문 작성',
      start: '2022-05-06',
      end: '2022-05-09',
    },
    {
      title: '논문 통합',
      start: '2022-05-08',
      end: '2022-05-10',
    },
    {
      title: '17시 교수님 면담',
      start: '2022-05-09',
      end: '2022-05-11',
    },
  ];
  const router = useRouter();
  const projectId = router.query.projectId;
  const [events, setEvents] = useState(schedules);

  // useEffect(() => {
  //   const getResponse = async () => {
  //     const response = await fetch('/api/calendar');
  //     const data = await response.json();
  //     return data;
  //   }
  //   getResponse().then((data) => {
  //     const allSchedules = data.message;
  //     const scheduleDatas = allSchedules.filter((schedule) => (schedule.projectId == projectId))[0];
  //     const schedules = scheduleDatas.schedules;
  //     setEvents(schedules);
  //   })
  // }, []);

  return (
    <div>
      <Head>
        <title>PROBBY | Calendar</title>
        <link rel='icon' href='/probby_logo.png' />
      </Head>
      <div className='m-l-30'>
        <h2 className='title font-bold'>Calendar</h2>
        <p className='m-t-10 p-b-0 m-b-0'>
          프로젝트만을 위한 캘린더를 활용해 스케줄을 관리해보세요
        </p>
      </div>
      <Container className='container-width-l'>
        <Row>
          <Col md='3' className='m-t-60'>
            <AddScheduleComponent events={events} setEvents={setEvents} projectId={projectId} />
          </Col>
          <Col md='9'>
            <CalendarComponent events={events} setEvents={setEvents} projectId={projectId} isDashboard={false} />
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        h2 {
          font-family: 'Spoca_B';
        }
        p {
          font-family: 'RIDI';
        }
      `}</style>
    </div>
  );
};
export default Dashboard;

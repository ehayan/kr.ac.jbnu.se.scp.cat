import Head from 'next/head';
import CalendarComponent from '../components/custom/sections/calendar/calendarcomponents';
import AddScheduleComponent from '../components/custom/sections/calendar/calendaraddschedulecomponent';
import { Row, Col, Container } from 'reactstrap';

const Dashboard = (page) => {
  return (
    <div>
      <Head>
        <title>CAT | Project | Calendar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container className='container-width-l m-t-20'>
        <Row >
          <Col md="3" className="m-t-60">
            <AddScheduleComponent/>
          </Col>
          <Col md="9">
            <CalendarComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Dashboard;

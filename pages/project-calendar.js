import Head from 'next/head';
import CalendarComponent from '../components/custom/sections/calendarcomponents';

const Dashboard = (page) => {
  return (
    <div>
      <Head>
        <title>CAT | Project | Calendar</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CalendarComponent />
    </div>
  );
};
export default Dashboard;

import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';

const AddScheduleComponent = ({ events, setEvents }) => {
  const addEvent = (event) => {
    const startDate = event.target.parentElement.children[1].children[1].value;
    let end = new Date(event.target.parentElement.children[3].children[1].value);
    end.setDate(end.getDate() + 1);
    const endDate = end.toISOString().slice(0, 10);
    const title = event.target.parentElement.children[5].children[1].value;
    const schedule = {
      title: title,
      start: startDate,
      end: endDate,
    };
    setEvents([...events, schedule]);
    event.target.parentElement.children[1].children[1].value = '';
    event.target.parentElement.children[3].children[1].value = '';
    event.target.parentElement.children[5].children[1].value = '';
  };

  return (
    <div id='scheduleCard' className='m-t-40'>
      <h3 className='text-center m-t-5 m-b-20 p-2 text-black bg-gold'>
        ADD Schedules
      </h3>

      <div className='d-flex m-l-20'>
        <span>Start Date</span>
        <input id='startDate' type='date' className='ml-auto'></input>
      </div>
      <br />

      <div className='d-flex m-l-20'>
        <span>End Date</span>
        <input id='endDate' type='date' className='ml-auto'></input>
      </div>
      <br />

      <div className='d-flex m-l-20'>
        <span>Name</span>
        <input
          id='scheduleName'
          type='text'
          placeholder='schedule name'
          className='ml-auto'
        ></input>
      </div>
      <br />

      <Button
        className='cal-add-btn btn-warning bg-gold text-black'
        onClick={addEvent}
      >
        ADD
      </Button>
      <style jsx>{`
        #scheduleCard {
          background-color: #131a63;
          padding: 10px;
          border-radius: 5px;
        }
        h3 {
          font-family: 'Spoca_B';
        }
        span {
          font-family: 'Spoca_R';
          font-size: 17px;
          color: #ffffff;
        }
        button {
          border-radius: 5px;
          background-color: #efcb00;
          border-color: #efcb00;
        }
      `}</style>
    </div>
  );
};

export default AddScheduleComponent;

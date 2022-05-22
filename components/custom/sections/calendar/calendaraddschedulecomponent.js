import { Row, Col } from "reactstrap";

const AddScheduleComponent = ({ events, setEvents }) => {
  const addEvent = (event) => {
    const startDate = event.target.parentElement.children[2].value;
    let end = new Date(event.target.parentElement.children[5].value);
    end.setDate(end.getDate() + 1);
    const endDate = end.toISOString().slice(0, 10);
    const title = event.target.parentElement.children[8].value;
    const schedule = {
      title: title,
      start: startDate,
      end: endDate,
    };
    setEvents([...events, schedule]);
    event.target.parentElement.children[2].value = "";
    event.target.parentElement.children[5].value = "";
    event.target.parentElement.children[8].value = "";
  };

  return (
    <div className="m-t-40">
      <h3 className="text-center m-t-5 m-b-20 p-2 text-black bg-gold">
        Add Schedules
      </h3>
      <span className="m-l-20">start date</span>
      <input id="startDate" type="date" className="m-b-20 m-l-10"></input>
      <br />
      <span className="m-l-20">end date</span>
      <input id="endDate" type="date" className="m-b-20 m-l-10"></input>
      <br />
      <span className="m-l-20">name</span>
      <input
        id="scheduleName"
        type="text"
        placeholder="schedule name"
        className="m-b-20 m-l-10"
      ></input>
      <br />
      <button className="cal-add-btn btn-warning text-black" onClick={addEvent}>
        add
      </button>
      <style jsx>{`
        div {
          background-color: #131a63;
          padding: 10px;
          border-radius: 5px;
        }
        span {
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

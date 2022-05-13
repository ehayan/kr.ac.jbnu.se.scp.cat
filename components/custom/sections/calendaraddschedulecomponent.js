import { Row, Col } from "reactstrap";

const AddScheduleComponent = () =>{
    const addEvent = () =>{
        
    }

    return (
        <div>
          <h3 className="m-t-5 m-l-20">Add Schedules</h3>
          <span className="m-l-20">start date</span>
          <input id="startDate" type="date" className="m-b-20 m-l-10"></input><br/>
          <span className="m-l-20">end date</span>
          <input id="endDate" type="date" className="m-b-20 m-l-10"></input><br/>
          <span className="m-l-20">name</span>
          <input id="scheduleName" type="text" placeholder="schedule name" className="m-b-20 m-l-10"></input><br/>
          <button className="m-l-20" onClick={addEvent}>add</button>
          <style jsx>{`
            div{
              background-color: #f7f2d7;
              padding: 10px;
              border-radius: 5px;
            }
            span{
              color: #000000;
            }
            button{
              border-radius: 5px;
            }
          `}</style>  
        </div>
    );
  };

export default AddScheduleComponent;
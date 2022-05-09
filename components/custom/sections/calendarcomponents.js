import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const CalendarFunction = () => {
  const calendarRef = useRef(null);

  //---addEvent function---
  // function selectEvent(arg) {
  //   console.log(arg.start + arg.end)
  //   const title = prompt('Event Title:');
  //   const calendar = new FullCalendar.Calendar();
  //     if (title) {
  //       calendar.addEvent({
  //         title: title,
  //         start: arg.start,
  //         end: arg.end,
  //         allDay: arg.allDay
  //       })
  //     };
  //   calendar.unselect();
  // }
  const static_events = [
    {
      title: '논문 작성',
      start: '2022-05-06',
      end : '2022-05-08'
    },
    {
      title: '논문 통합',
      start: '2022-05-08',
      end : '2022-05-09 '
    },
    {
      title: '17시 교수님 면담',
      start: '2022-05-09',
      end : '2022-05-10'
    },
    {
      title: 'aaa',
      start: '2022-05-11',
      end : '2022-05-11'
    }
  ];
  const [events, setEvents] = useState(static_events);

  function addEvent(){
    
  }

  return (

    <div>
      <div className="m-b-20">
        <h3 className="m-t-5 m-l-20">Add Schedule</h3>
        <span className="m-l-20">start date</span>
        <input id="startDate" type="date" className="m-b-20 m-l-10"></input>
        <span className="m-l-20">end date</span>
        <input id="endDate" type="date" className="m-b-20 m-l-10"></input>
        <span className="m-l-20">schedule name</span>
        <input id="scheduleName" type="text" placeholder="schedule name" className="m-b-20 m-l-10"></input>
        <button className="m-l-20" onClick={addEvent}>add</button>
        <style jsx>{`
          div{
            background-color: #f7f2d7;
          }
          button{
            border-radius: 5px;
          }
      `}</style>

      </div>
      
      <FullCalendar
      innerRef={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      // editable  
      selectable
      // eventClick={() => {
      //   console.log('Clicked');
      // }}
      // select ={selectEvent}
      headerToolbar = {
        {
          left : 'prevYear,prev,next,nextYear',
          center : 'title',
          right : 'today dayGridMonth,dayGridWeek,dayGridDay'
        }
      }
      events = {events}

    />
    </div>
  );
};

export default CalendarFunction; 


// function selectEvent(arg) {
//   console.log(arg.start + arg.end)
//   const title = prompt('Event Title:');
//   const calendar = new FullCalendar.Calendar();
//     if (title) {
//       calendar.addEvent({
//         title: title,
//         start: arg.start,
//         end: arg.end,
//         allDay: arg.allDay
//       })
//     };
//   calendar.unselect();
// }

// const drawCalendar = () => {
//   const calendarEl = document.getElementById('calendar');
//   const calendar = new FullCalendar.Calendar(calendarEl, {
//     plugins : [dayGridPlugin, interactionPlugin],
//     editable,
//     selectable,
//     select:{selectEvent},
//     headerToolbar:{
//       left : 'prevYear,prev,next,nextYear',
//       center : 'title',
//       right : 'today dayGridMonth,dayGridWeek,dayGridDay'
//     }
//   });


//   return(
//     calendar.render()
//   );
// };


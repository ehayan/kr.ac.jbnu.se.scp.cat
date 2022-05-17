import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef, useState } from "react";
import { Row, Col } from "reactstrap";




const CalendarFunction = ({ events, setEvents }) => {
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
  function eventClick(event) {
    if(confirm("일정을 삭제하시겠습니까?")) {
      const startDate = event.event.startStr;
      const endDate = event.event.endStr == ""? event.event.startStr : event.event.endStr;
      const title = event.event.title;
      let returns = [];
      events.forEach((event) => {
        if(event.title == title
          && event.start == startDate
          && event.end == endDate) return;
        returns.push(event);
      })
      setEvents(returns);
    } 
  }
  return (
    <div>
        <div id="events">

        </div>
          <FullCalendar
            innerRef={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            // editable  
            navlinks={true}
            selectable
            eventClick={eventClick}
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


import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef, useState } from "react";
import { Row, Col } from "reactstrap";




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
      title: '19시 논문 피드백 회의',
      start: '2022-05-12',
      end : '2022-05-12'
    },
    {
      title: '14시 논문 2차 통합',
      start: '2022-05-13',
      end : '2022-05-13'
    },
    {
      title: '17시 교수님 면담',
      start: '2022-05-16',
      end : '2022-05-16'
    }
  ];
  const [events, setEvents] = useState(static_events);

  return (
    <div>
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


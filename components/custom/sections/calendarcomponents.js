import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";

const Calendar = () => {
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

  return (

    <FullCalendar
      innerRef={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      // editable  
      selectable
      eventClick={() => {
        console.log('Clicked');
      }}
      // select ={selectEvent}
      headerToolbar = {
        {
          left : 'prevYear,prev,next,nextYear',
          center : 'title',
          right : 'today dayGridMonth,dayGridWeek,dayGridDay'
        }
      }
      events = {[
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
        }
      ]}

    />
  );
};

export default Calendar; 


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


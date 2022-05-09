import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import { useEffect } from "react";

const CalendarFunction = () => {
  const calendarRef = useRef(null);

<<<<<<< HEAD
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

=======
  const calendarEl = document.getElementById('calendar');
  const calendar = new Calendar(calendarEl, {
    plugins:[dayGridPlugin, interactionPlugin],
    editable: true,
    selectable: true,
    headerToolbar : {
      left : 'prevYear,prev,next,nextYear',
      center : 'title',
      right : 'today dayGridMonth,dayGridWeek,dayGridDay'
    },
    select: (arg) => {
      const title = prompt('Event Title:');
      if(title){
        calendar.addEvent({
          title : title,
          start : arg.start,
          end : arg.end,
          allDay : arg.allDay,
        })
      }
    }
  });
};

//   return (
//     <FullCalendar
//       innerRef={calendarRef}
//       plugins={[dayGridPlugin, interactionPlugin]}
//       editable
//       selectable
//       unselectAuto
//       select={selectEvent}
//       headerToolbar = {
//         {
//           left : 'prevYear,prev,next,nextYear',
//           center : 'title',
//           right : 'today dayGridMonth,dayGridWeek,dayGridDay'
//         }
//       }
//       events={[

//       ]}
//     />
//   );
// };

export default CalendarFunction;

// const CalendarFunction = () => {
//   if (typeof document !== 'undefined') {
//   const documentRef = useRef(document);
//   const calendarEl = document.getElementById('calendar');
//         const calendar = new Calendar(calendarEl, {
//           plugins : [dayGridPlugin, interactionPlugin],
//             // editable
//             selectable : true,
//             headerToolbar : {
//               left : 'prevYear,prev,next,nextYear',
//               center : 'title',
//               right : 'today dayGridMonth,dayGridWeek,dayGridDay'
//             },
//             // select : (arg) => {
//             //   const title = prompt('일정을 입력해주세요.');
//             //   if(title){
//             //     calendar.addEvent({
//             //       title: title,
//             //       start: arg.start,
//             //       end: arg.end,
//             //       allDay: arg.allDay,
//             //     })
//             //   }
//             //   calendar.unselect();
//             // }
//           });
//       calendar.render();
//   }
// };

// export default CalendarFunction;
>>>>>>> b4ffcc77c9ad358e2bbeca96b909e137afaed079

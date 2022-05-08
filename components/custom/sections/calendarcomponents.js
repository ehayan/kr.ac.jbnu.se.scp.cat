import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";
import { useEffect } from "react";

const CalendarFunction = () => {
  const calendarRef = useRef(null);

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

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);

  
  function selectEvent(arg) {
    console.log(arg.start + arg.end)
    const title = prompt('Event Title:');
    const calendar = new FullCalendar.Calendar();
      if (title) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay
        })
      };
    calendar.unselect();
  }

  return (
    <FullCalendar
      innerRef={calendarRef}
      plugins={[dayGridPlugin, interactionPlugin]}
      editable
      selectable
      select ={selectEvent}
      headerToolbar = {
        {
          left : 'prevYear,prev,next,nextYear',
          center : 'title',
          right : 'today dayGridMonth,dayGridWeek,dayGridDay'
        }
      }
      
    />
  );
};

export default Calendar;
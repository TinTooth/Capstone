import { useEffect } from 'preact/hooks';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./WorkCalendar.css";
import axios from 'axios';


const WorkCalendar = ({orders,setcurrentOrder}) => {

    const eventClick = (e) => {
      console.log(e.event.id)
    }




  
    let getEvents = () => {     
        let eventsarray = []
        orders.forEach(order => {
        if (order.status === "Accepted") {
          let newEvent = { 
            id: order.id, 
            title:`${order.user.first_name} ${order.user.last_name}`,
            start: order.deliver_date
            }
          eventsarray.push(newEvent);
        }});
        ;
        
        return eventsarray
  }    
  
  
  
    return (
      <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        height = "100%"
        headerToolbar={{
          center: 'dayGridMonth,dayGridWeek',
        }}
         events = {getEvents()}
         eventClick ={eventClick}

      />
    </div>
     );
}
 
export default WorkCalendar;
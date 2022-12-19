import { useState, useEffect } from "react";
import useDate from "../../../../hooks/useDate";
import "./WorkTimeCounter.css"


const WorkTimeCounter = ({selectedDate,items}) => {
    const [totalTime, settotalTime] = useState(0);
    const [weekMessage, setweekMessage] = useState('test');
    const [getDayString,getWeekWorkTime,getLikelihood] = useDate()
   
    useEffect (() => {
        updateBox() 
    },[selectedDate,items])
   
    const updateBox = () => {
        settotalTime(getWeekWorkTime(selectedDate,items));
        setweekMessage(getLikelihood(getWeekWorkTime(selectedDate,items)));
    }

    return (
        <div className="worktime-container">
            <div className="selected-date">Week Of {selectedDate.slice(5)}</div>
            <div className="selected-date">Total Time :{totalTime}</div>
            <div className="selected-date">Weeks Current: AutoMated Message:</div>
            <div className="selected-date">{weekMessage}</div>
        </div>
     );
}
 
export default WorkTimeCounter;
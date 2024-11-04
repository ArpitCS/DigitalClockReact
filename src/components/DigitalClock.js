import React, { useEffect, useState } from 'react'
import './DigitalClock.css'


const DigitalClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    const [hours, minutes, temp] = time.split(/[:]/);
    const [seconds, ampm] = temp.split(/[ ]/);

  return (
    <div className="digital-clock">
        <div className="digital-clock-time">
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            <span>{ampm}</span>
        </div>
    </div>
  )
}

export default DigitalClock
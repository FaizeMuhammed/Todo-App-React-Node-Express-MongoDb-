import React, { useEffect, useState } from 'react';
import "./LiveClock.css"

const LiveClock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 

    return () => clearInterval(timerId); 
  }, []);

  const date = currentDateTime.toLocaleDateString(); // Get the date part
  const time = currentDateTime.toLocaleTimeString();

  return (
    <div>
      
      <p className='date_p'>{date}</p>
      <h2>{time}</h2>

    </div>
  );
};

export default LiveClock;

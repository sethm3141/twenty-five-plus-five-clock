import React, { useEffect, useState } from 'react';

const Timer = ({
  breakTime,
  sessionTime,
  timer,
  setTimer,
  isSession,
  setIsSession,
}) => {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    if (isSession) {
      setTimer(sessionTime);
    } else if (!isSession) {
      setTimer(breakTime);
    }
  }, [breakTime, sessionTime]);

  return (
    <section id='timer'>
      <h3 id='timer-label'>{isSession ? 'Session' : 'Break'}</h3>
      <h1 id='time-left'>
        {timer.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </h1>
    </section>
  );
};

export default Timer;

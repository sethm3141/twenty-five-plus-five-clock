import React, { useEffect, useRef, useState } from 'react';

const Timer = ({
  breakTime,
  sessionTime,
  timer,
  setTimer,
  isSession,
  setIsSession,
  isPlaying,
}) => {
  const [timeStamp, setTimeStamp] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const intervalCount = useRef(0);
  // console.log('time stamp: ' + timeStamp);

  //* Timer Functionality.
  const TimerFunction = (timeVal, secVal) => {
    console.log('time stamp: ' + timeVal);
    console.log('Date: ' + Date.now());

    if (timeVal) {
      const newTimeInput = secVal - Math.floor((Date.now() - timeVal) / 1000);

      console.log('..............');
      console.log('input: ' + newTimeInput);
      console.log('..............');

      if (newTimeInput <= 0) {
        //! it won't get the most recent seconds value.
        setTimer(timer - 1);
        setSeconds(59);
      }
      setSeconds(newTimeInput);
    }
  };

  //* Setup timed interval for running timer function.
  useEffect(() => {
    if (timeStamp) {
      intervalCount.current += 1;
      console.log('set interval ' + intervalCount.current + ' times.');
      intervalRef.current = setInterval(() => {
        TimerFunction(timeStamp, seconds);
      }, 200);
    }
  }, [timeStamp]);

  //* Update isPlaying and mark the timeStamp once it's triggered.
  useEffect(() => {
    if (!isPlaying && intervalRef.current) {
      return () => {
        clearInterval(intervalRef.current);
        console.log('cleared interval.');
        setTimeStamp(null);
      };
    } else if (!isPlaying) {
      return;
    }

    setTimeStamp(Date.now());

    return () => {
      clearInterval(intervalRef.current);
      console.log('cleared interval.');
    };
  }, [isPlaying]);

  //* Update timer when break and session lengths are updated
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
        {timer?.toString()?.padStart(2, '0')}:
        {seconds?.toString()?.padStart(2, '0')}
      </h1>
    </section>
  );
};

export default Timer;

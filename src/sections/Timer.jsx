import React, { useEffect, useRef, useState } from 'react';

const Timer = ({
  seconds,
  setSeconds,
  breakTime,
  sessionTime,
  timer,
  setTimer,
  isSession,
  setIsSession,
  isPlaying,
}) => {
  const [timeStamp, setTimeStamp] = useState(null);
  const intervalRef = useRef(null);

  //* Timer Functionality.
  const TimerFunction = (timeVal, secVal) => {
    if (timeVal) {
      const newTimeInput = secVal - Math.floor((Date.now() - timeVal) / 1000);

      if (newTimeInput < 0) {
        if (timer > 0) {
          if (timer == 1) {
            document.getElementById('timer').style.color = 'red';
          }
          setTimer(timer - 1);
          setSeconds(59);
          return 1;
        } else if (timer <= 0) {
          if (isSession) {
            setTimer(breakTime);
          } else {
            setTimer(sessionTime);
          }
          setSeconds(0);
          setIsSession(!isSession);
          document.getElementById('timer').style.color = 'white';
          return 2;
        }
      }
      setSeconds(newTimeInput);
      return 0;
    }
  };

  //* run alarm sound when time hits 00:00
  useEffect(() => {
    if (timer === 0 && seconds === 0) {
      const audioElement = document.getElementById('beep');
      audioElement.currentTime = 0;
      audioElement.volume = 0.1;
      audioElement.play();
    }
  }, [seconds]);

  //* Setup timed interval for running timer function.
  useEffect(() => {
    if (timeStamp) {
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
        setTimeStamp(null);
      };
    } else if (!isPlaying) {
      return;
    }

    setTimeStamp(Date.now());

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, timer]);

  //* Update timer when break and session lengths are updated
  useEffect(() => {
    if (isSession) {
      setTimer(sessionTime);
      setSeconds(0);
    }
  }, [sessionTime]);
  useEffect(() => {
    if (!isSession) {
      setTimer(breakTime);
      setSeconds(0);
    }
  }, [breakTime]);

  return (
    <section id='timer'>
      <h3 id='timer-label'>{isSession ? 'Session' : 'Break'}</h3>
      <h1 id='time-left'>
        {/* <span id='minutes'>{timer?.toString()?.padStart(2, '0')}</span>
        <span id='colon'>:</span>
        <span id='seconds'>{seconds?.toString()?.padStart(2, '0')}</span> */}
        {timer?.toString()?.padStart(2, '0')}:
        {seconds?.toString()?.padStart(2, '0')}
      </h1>
    </section>
  );
};

export default Timer;

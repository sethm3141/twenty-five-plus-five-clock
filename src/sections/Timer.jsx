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
  isSpecial,
}) => {
  const [timeStamp, setTimeStamp] = useState(null);
  const intervalRef = useRef(null);
  //! below is for debugging.
  const intervalClearCount = useRef(null);
  const intervalCount = useRef(0);
  const timeoutRef = useRef(null);

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
          // const audioElement = document.getElementById('beep');
          // console.log('timer: ' + timer);
          // console.log('seconds: ' + seconds);
          // audioElement.currentTime = 0;
          // audioElement.volume = 0.10;
          // audioElement.play();
          return 2;
        }
      }
      setSeconds(newTimeInput);
      return 0;
    }
  };

  useEffect(() => {
    if (timer === 0 && seconds === 0) {
      const audioElement = document.getElementById('beep');
      console.log('timer: ' + timer);
      console.log('seconds: ' + seconds);
      audioElement.currentTime = 0;
      audioElement.volume = 0.10;
      audioElement.play();
    }
  }, [seconds])

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
        intervalClearCount.current += 1;
        clearInterval(intervalRef.current);
        console.log(
          'cleared interval ' + intervalClearCount.current + ' times'
        );
        setTimeStamp(null);
      };
    } else if (!isPlaying) {
      return;
    }

    setTimeStamp(Date.now());

    return () => {
      intervalClearCount.current += 1;
      clearInterval(intervalRef.current);
      console.log('cleared interval ' + intervalClearCount.current + ' times');
    };
  }, [isPlaying, timer, isSpecial]);

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

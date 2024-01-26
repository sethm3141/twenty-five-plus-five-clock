import React, { useEffect, useRef } from 'react';
import Adjustment from '../components/Adjustment';

const IncrementAndDecrement = ({
  breakTime,
  setBreakTime,
  sessionTime,
  setSessionTime,
  isPlaying,
  isSession,
}) => {
  // const isMounted = useRef(false);

  // useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //     return;
  //   }

  // }, [breakTime, sessionTime]);

  return (
    <section id='increment-and-decrement'>
      <Adjustment
        labelName={'break'}
        time={breakTime}
        setTime={setBreakTime}
        isPlaying={isPlaying}
      />
      <Adjustment
        labelName={'session'}
        time={sessionTime}
        setTime={setSessionTime}
        isPlaying={isPlaying}
      />
    </section>
  );
};

export default IncrementAndDecrement;

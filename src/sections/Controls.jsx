import React from 'react';

const Controls = ({
  isPlaying,
  setIsPlaying,
  setBreakTime,
  setSessionTime,
  setIsSession,
}) => {
  const handlePausePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setBreakTime(5);
    setSessionTime(25);
    setIsSession(true);
  };

  return (
    <section id='controls'>
      <div id='start-stop' onClick={() => handlePausePlay()}>
        <i className='fa-solid fa-play'></i>
        <i className='fa-solid fa-pause'></i>
      </div>
      <div id='reset' onClick={() => handleReset()}>
        <i className='fa-solid fa-rotate'></i>
      </div>
    </section>
  );
};

export default Controls;

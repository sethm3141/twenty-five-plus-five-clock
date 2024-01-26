import React from 'react';

const Controls = ({
  isPlaying,
  setIsPlaying,
  setBreakTime,
  setSessionTime,
  setIsSession,
  setTimer,
  setSeconds,
  isSpecial,
  setIsSpecial,
}) => {
  const handlePausePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setBreakTime(5);
    setSessionTime(25);
    setIsSession(true);
    setTimer(25);
    setSeconds(0);
    document.getElementById('timer').style.color = 'white';
    const audioElement = document.getElementById('beep');
    audioElement.pause();
    audioElement.currentTime = 0;
  };

  return (
    <section id='controls'>
      <div id='start_stop' onClick={() => handlePausePlay()}>
        <i className='fa-solid fa-play'></i>
        <i className='fa-solid fa-pause'></i>
      </div>
      <div id='reset' onClick={() => handleReset()}>
        <i className='fa-solid fa-rotate'></i>
      </div>
      <button
        onClick={() => {
          setIsSpecial(() => {
            setSeconds(2);
            return isSpecial + 1;
          });
        }}
        style={{ cursor: 'pointer', marginLeft: '1rem', borderRadius: '1rem' }}
      >
        CLICK THIS
      </button>
    </section>
  );
};

export default Controls;

import React from 'react';

const Controls = ({ isPlaying, setIsPlaying }) => {
  const handlePausePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
  }

  return (
    <section id='controls'>
      <div id='start-stop' onClick={() => handlePausePlay()}>
        <i className='fa-solid fa-play'></i>
        <i className='fa-solid fa-pause'></i>
      </div>
      <div id='reset'>
        <i className='fa-solid fa-rotate'></i>
      </div>
    </section>
  );
};

export default Controls;

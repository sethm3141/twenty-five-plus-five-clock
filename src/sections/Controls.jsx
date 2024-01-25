import React from 'react';

const Controls = () => {
  return (
    <section id='controls'>
      <div id='start_stop'>
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

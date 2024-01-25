import React from 'react';

const Adjustment = ({ labelName, time, setTime, isPlaying }) => {
  const handleClick = (val) => {
    if (!isPlaying) {
      if (time < 60 && val > 0) {
        setTime(time + val);
      } else if (time > 1 && val < 0) {
        setTime(time + val);
      }
    }
  };

  return (
    <div className='adjustment'>
      <h3 className='label' id={`${labelName}-label`}>
        {labelName} length
      </h3>
      <div>
        <i
          className='fa-solid fa-circle-arrow-down'
          id={`${labelName}-decrement`}
          onClick={() => handleClick(-1)}
        ></i>
        <h3 id={`${labelName}-length`}>{time}</h3>
        <i
          className='fa-solid fa-circle-arrow-up'
          id={`${labelName}-increment`}
          onClick={() => handleClick(1)}
        ></i>
      </div>
    </div>
  );
};

export default Adjustment;

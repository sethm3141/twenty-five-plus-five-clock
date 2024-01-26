import Adjustment from '../components/Adjustment';

const IncrementAndDecrement = ({
  breakTime,
  setBreakTime,
  sessionTime,
  setSessionTime,
  isPlaying,
}) => {
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

import { useState } from 'react';
import IncrementAndDecrement from './sections/IncrementAndDecrement';
import Timer from './sections/Timer';
import Controls from './sections/Controls';

function App() {
  const [breakTime, setBreakTime] = useState(1);
  const [sessionTime, setSessionTime] = useState(1);
  const [timer, setTimer] = useState(sessionTime);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSession, setIsSession] = useState(false);

  return (
    <>
      <section id='top-title'>
        <h2>25 + 5 Clock</h2>
        <audio
          id='beep'
          preload='auto'
          src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav'
        ></audio>
      </section>
      <IncrementAndDecrement
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        isPlaying={isPlaying}
        isSession={isSession}
      />
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        breakTime={breakTime}
        sessionTime={sessionTime}
        timer={timer}
        setTimer={setTimer}
        isSession={isSession}
        setIsSession={setIsSession}
        isPlaying={isPlaying}
      />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setBreakTime={setBreakTime}
        setSessionTime={setSessionTime}
        setIsSession={setIsSession}
        setTimer={setTimer}
        setSeconds={setSeconds}
      />
      <div className='spacer'></div>
    </>
  );
}

export default App;

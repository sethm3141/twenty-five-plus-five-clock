import { useState } from 'react';
import IncrementAndDecrement from './sections/IncrementAndDecrement';
import Timer from './sections/Timer';
import Controls from './sections/Controls';

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timer, setTimer] = useState(sessionTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSession, setIsSession] = useState(true);

  return (
    <>
      <section id='top-title'>
        <h2>25 + 5 Clock</h2>
      </section>
      <IncrementAndDecrement
        breakTime={breakTime}
        setBreakTime={setBreakTime}
        sessionTime={sessionTime}
        setSessionTime={setSessionTime}
        isPlaying={isPlaying}
      />
      <Timer
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
      />
    </>
  );
}

export default App;

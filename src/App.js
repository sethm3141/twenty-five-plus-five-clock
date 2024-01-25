import { useState } from 'react';
import Controls from './sections/Controls';
import IncrementAndDecrement from './sections/IncrementAndDecrement';
import Timer from './sections/Timer';

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
      <Timer timer={timer} isSession={isSession} setIsSession={setIsSession} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setTimer={setTimer}
      />
    </>
  );
}

export default App;

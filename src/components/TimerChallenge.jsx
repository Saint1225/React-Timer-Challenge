import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timerRef = useRef();
  const dialogRef = useRef();

  const handleTimerStart = () => {
    setTimerStarted(true);
    setTimerExpired(false);
    timerRef.current = setTimeout(() => {
      setTimerStarted(false);
      setTimerExpired(true);
      dialogRef.current.showModal();
    }, targetTime * 1000);
  };

  const handleTimerStop = () => {
    setTimerStarted(false);
    clearTimeout(timerRef.current);
  };

  return (
    <>
      <ResultModal
        ref={dialogRef}
        result={timerExpired}
        targetTime={targetTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? handleTimerStop : handleTimerStart}>
          {timerStarted ? "Stop Timer" : "Start Challenge"}
        </button>
        <p className="">Time is running...</p>
      </section>
    </>
  );
};

export default TimerChallenge;

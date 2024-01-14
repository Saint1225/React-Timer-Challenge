import { useRef, useState } from "react";
import ResultModal from "./ResultModal.jsx";

const TimerChallenge = ({ title, targetTime }) => {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const timerRef = useRef();
  const dialogRef = useRef();

  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    dialogRef.current.open();
    clearInterval(timerRef.current);
  }

  const handleTimerStart = () => {
    timerRef.current = setInterval(() => {
      setRemainingTime((previousRemainingTime) => previousRemainingTime - 10);
    }, 10);
  };

  const handleTimerStop = () => {
    dialogRef.current.open();
    clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setRemainingTime(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={remainingTime}
        handleReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleTimerStop : handleTimerStart}>
          {timerIsActive ? "Stop Timer" : "Start Challenge"}
        </button>
        <p className="">Time is running...</p>
      </section>
    </>
  );
};

export default TimerChallenge;

import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(
  ({ targetTime, remainingTime, handleReset }, ref) => {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
      return {
        open: () => dialogRef.current.showModal(),
      };
    });

    const userLost = remainingTime <= 0;
    const timeLeft = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    return createPortal(
      <dialog ref={dialogRef} className="result-modal" onClose={handleReset}>
        <h2>You {userLost ? "lost" : "won"}</h2>
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong>{timeLeft} secconds left.</strong>
        </p>
        <form method="dialog" onSubmit={handleReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default ResultModal;

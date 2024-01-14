import { forwardRef, useImperativeHandle, useRef } from "react";

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

    return (
      <dialog ref={dialogRef} className="result-modal">
        <h2>You {userLost ? "lost" : "won"}</h2>
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong>{timeLeft} secconds left.</strong>
        </p>
        <form method="dialog" onSubmit={handleReset}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;

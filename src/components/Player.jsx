import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");

  const playerNameRef = useRef("");

  const handleSetName = () => {
    setPlayerName(playerNameRef.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}

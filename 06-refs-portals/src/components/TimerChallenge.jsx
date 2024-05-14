import { useState, useRef } from "react";

// let timer; //get overwritten if multiple challenges are started
// variable defined outside of the component is shared among all istances of it

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); //will not be reset when the component re-executes (unlike a variable)

  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true), setTimerStarted(false);
    }, targetTime * 1000); //is in miliseconds
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : ""}>
        {timerStarted ? "Time is running..." : "Timer inactive."}
      </p>
    </section>
  );
}

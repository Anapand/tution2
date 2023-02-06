import React, { useState } from "react";

let adjustInterval = undefined;
const App = () => {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);

  const startWatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1);
    }, 1000);
    setStarted(true);
  };

  const stopWatch = () => {
    clearInterval(adjustInterval);
    setStarted(false);
  };

  const resetWatch = () => {
    setWatch(0);
    clearInterval(adjustInterval);
    setStarted(false);
  };
  return (
    <div>
      <h1 className="stopwatch"> Stop Watch </h1>
      <h1>{watch}</h1>
      <button disabled={started} onClick={startWatch} className="start">
        Start Watch
      </button>
      <button onClick={stopWatch} className="stop">
        Stop Watch
      </button>
      <button onClick={resetWatch} className="reset">
        Reset Watch
      </button>
    </div>
  );
};
export default App;

import React, { useEffect, useState } from "react";

const StopWatchPractice = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const Timer = (t: number) => {
    let ms: string = `0${time % 100}`.slice(-2);
    let sec: string = `0${Math.floor(time / 1000) % 60}`.slice(-2);

    let min: string = `0${Math.floor(time / 60000) % 60}`.slice(-2);

    let hrs: string = `0${Math.floor(time / 3600000) % 24}`.slice(-2);
    return `${hrs} Hrs : ${min} Min : ${sec} Sec : ${ms} Ms : `;
  };

  useEffect(() => {
    let milSec: undefined | NodeJS.Timeout | number;
    if (isRunning) {
      milSec = setInterval(() => {
        setTime((t: number) => t + 10);
      }, 10);
    }
    return () => clearInterval(milSec);
  }, [isRunning]);

  return (
    <div>
      <div>{Timer(time)}</div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            setIsRunning(true);
          }}
        >
          Start
        </button>

        <button
          className="btn btn-danger m-2"
          onClick={() => {
            setIsRunning(!isRunning);
          }}
        >
          Stop/Resume
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatchPractice;

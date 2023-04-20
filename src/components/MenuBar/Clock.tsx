import { useEffect, useState } from "react";
import { ClockStyle } from "./style";

export const Clock = () => {
  const [time, setTime] = useState("14:32");

  const computeTime = () => {
    const current = new Date();

    let hours: string | number = current.getHours();
    let mins: string | number = current.getMinutes();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (mins < 10) {
      mins = `0${mins}`;
    }

    setTime(`${hours}:${mins}`);
  };

  useEffect(() => {
    computeTime();
  }, []);

  setInterval(() => computeTime(), 1000 * 60);

  return (
    <ClockStyle>
      <i className="fa fa-clock"></i>
      <span>{time}</span>
    </ClockStyle>
  );
};

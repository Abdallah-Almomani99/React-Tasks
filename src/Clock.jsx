import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default Clock;

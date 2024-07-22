import { useEffect, useState } from 'react';

const Timer = ({ startTime, endTime }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!startTime || !endTime) return;

    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();
    const now = new Date().getTime();

    if (now < start) {
      setTimeLeft(start - now);
    } else if (now >= start && now <= end) {
      setTimeLeft(end - now);
    } else {
      setTimeLeft(0);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      if (now >= start && now <= end) {
        setTimeLeft(end - now);
      } else if (now > end) {
        setTimeLeft(0);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const formatTimeLeft = () => {
    if (timeLeft <= 0) return "Exam Finished";

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Time Remaining: {formatTimeLeft()}</h2>
    </div>
  );
};

export default Timer;

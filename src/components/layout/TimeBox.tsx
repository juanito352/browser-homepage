import { useEffect, useState } from "react";

export default function TimeBox() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const hrs = now.getHours();
  const min = now.getMinutes().toString().padStart(2, "0");
  const day = daysOfWeek[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return (
    <div className="text-center space-y-2">
      <p className="text-8xl font-bold">
        {hrs}:{min}
      </p>
      <p className="text-4xl">{day}</p>
      <p className="text-lg">
        {month} {date}, {year}
      </p>
    </div>
  );
}

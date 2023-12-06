import { useState, useEffect } from "react";
import Buttonn from "./Button";
const Countdown = () => {
  // Define state for countdown values
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  // Create a function to calculate countdown values
  const calculateCountdown = () => {
    const questStartTime = new Date('Nov 12, 2023').getTime(); // Set the start time of the quest
    const now = new Date().getTime(); // Get the current time

    const timeDifference = now - questStartTime;

    // Calculate hours, minutes, and seconds remaining since the quest started
    const elapsedHours = Math.floor(timeDifference / (1000 * 60 * 60));
    const elapsedMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const elapsedSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Calculate remaining hours, minutes, and seconds until the next reset
    const remainingHours = 7 - (elapsedHours % 7);
    const remainingMinutes = 60 - elapsedMinutes;
    const remainingSeconds = 60 - elapsedSeconds;

    // Update the state variables
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);
  };

  // Set up a timer to update countdown values every second
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    // Return a cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);
  const ended = hours === 0 && minutes === 0 && seconds === 0;

  return (
    <>
      <h2 className="cyan"><span id="hours">{hours}h:</span><span id="minutes"> {minutes}m : </span><span id="seconds">{seconds}s</span></h2>
      <h4 className="banner-btn-container svelte-cadtdl"> until sale ends
      </h4>
      <Buttonn />
    </>
  )
}

export default Countdown


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const countdownDuration = 24 * 60 * 60; // 24 hours in seconds
  const [countdown, setCountdown] = useState(countdownDuration);

  useEffect(() => {
    const storedTimestamp = localStorage.getItem("countdownTimestamp");
    const storedCountdown = localStorage.getItem("countdown");
    if (storedTimestamp && storedCountdown) {
      const elapsedTime = Math.floor((Date.now() - parseInt(storedTimestamp)) / 1000);
      const remainingTime = countdownDuration - elapsedTime;
      if (remainingTime > 0) {
        setCountdown(remainingTime);
      } else {
        setCountdown(countdownDuration);
        localStorage.setItem("countdownTimestamp", Date.now().toString());
        localStorage.setItem("countdown", countdownDuration.toString());
      }
    } else {
      localStorage.setItem("countdownTimestamp", Date.now().toString());
      localStorage.setItem("countdown", countdownDuration.toString());
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;
        localStorage.setItem("countdown", newCountdown.toString());
        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format the remaining time into hours, minutes, and seconds
  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <>
      <div className="bg-yellow-300 bg-opacity-90 text-black text-3xl bold flex justify-center font-bold tracking-widest overflow-hidden py-4">
        <p>
          🚀 LISTING $PUPA ON PUMP.FUN IN&nbsp;
          <em>
            ⭐{hours}h {minutes}m {seconds}s⭐
          </em>
        </p>
      </div>
      <header className="text-gray-50 mb-0 px-4 w-full flex items-center justify-center">
        <div className="flex items-center space-x-10 2xl:space-x-40 tracking-widest text-sm 2xl:text-2xl cursor-pointer">
          <div id="pictures" className="flex mt-8">
            <img
              src="https://i.ibb.co/cXM63M5/N-vtelen-terv-20.png"
              className="w-40 h-40 rounded-full border border-4 border-yellow-800"
              alt="logo"
              onClick={() => window.location.reload()}
            />
          </div>
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
          <div>
            <Link to="/ruglist">LIST OF RUGRATS</Link>
          </div>
          <div>
            <Link to="/social">SOCIALS</Link>
          </div>
          <div>
            <Link to="/report">REPORT RUGPULL</Link>
          </div>
        </div>
      </header>
    </>
  );
}

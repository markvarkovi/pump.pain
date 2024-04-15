import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStopAnimation(true);
    }, 12000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        id="news"
        className="bg-yellow-500 bg-opacity-90 text-black text-3xl bold flex justify-center font-bold tracking-widest overflow-hidden"
      >
        <p className={`p-4 ${stopAnimation ? "animate-stop" : "animate-marquee"}`}>
          LISTING COMING SOON ON PUMP.FUN! STAY TUNED AND LOOK FOR $PUPA TOKEN!
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

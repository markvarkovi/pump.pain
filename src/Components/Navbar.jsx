import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-yellow-300 bg-opacity-90 text-black text-3xl bold flex justify-center font-bold tracking-widest overflow-hidden py-4">
        <p>🚀 LISTING $HAMLANA IS LIVE ON PUMP.FUN 🚀 &nbsp;</p>
      </div>
      <header className="text-gray-50 mb-0 px-4 w-full flex items-center justify-center">
        <div className="flex items-center space-x-10 2xl:space-x-40 tracking-widest text-sm 2xl:text-2xl cursor-pointer">
          <div id="pictures" className="flex mt-8">
            <img
              src="https://i.ibb.co/vsj4B9Q/super.webp"
              className="w-48 h-48 rounded-full"
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
            <Link to="/ruglist">LIST OF HAMLANAS</Link>
          </div>
          <div>
            <Link to="/social">SOCIALS</Link>
          </div>
          <div>
            <Link to="/join">JOIN HAMLANAS</Link>
          </div>
        </div>
      </header>
    </>
  );
}

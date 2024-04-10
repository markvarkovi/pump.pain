export default function Socials() {
  const tg = "https://t.me/+jWZrw_eUN29hN2Vk";
  const x = "https://twitter.com/PumpPain53294";
  const pump = "https://pump.fun";

  function redirectTo(link) {
    window.location.href = link;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-6xl flex justify-evenly items-center mb-48">
        <div className="text-gray-50 bg-red-400 bg-opacity-20 rounded-lg p-12 shadow-md mx-4">
          <div className="flex flex-col items-center">
            <img
              src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000"
              alt="Twitter Logo"
              className="w-40 h-40 mb-8"
            />
            <p className="text-gray-800 text-center mb-8 text-xl">
              Follow us on Twitter for daily updates
            </p>
            <button
              className="bg-gradient-to-t from-red-400 to-gray border border-solid border-yellow-800 border-2 hover:from-red-500 hover:to-red 
                text-white font-bold p-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-3xl"
              onClick={() => redirectTo(x)}
            >
              Follow
            </button>
          </div>
        </div>

        <div className="text-gray-50 bg-red-400 bg-opacity-20 rounded-lg p-12 shadow-md mx-4">
          <div className="flex flex-col items-center">
            <img
              src="https://seeklogo.com/images/T/telegram-logo-6E3A371CF2-seeklogo.com.png"
              alt="Telegram Logo"
              className="w-40 h-40 mb-8"
            />
            <p className="text-gray-800 text-center mb-8 text-xl">
              Join our Telegram channel for discussions
            </p>
            <button
              className="bg-gradient-to-t from-red-400 to-gray border border-solid border-yellow-800 border-2 hover:from-red-500 hover:to-red 
                text-white font-bold p-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-3xl"
              onClick={() => redirectTo(tg)}
            >
              Join
            </button>
          </div>
        </div>

        {/* Card 3: Buy Button */}
        <div className="text-gray-50 bg-red-400 bg-opacity-20 rounded-lg p-12 shadow-md mx-4">
          <div className="flex flex-col items-center">
            <img
              src="https://i.ibb.co/sbWJ044/1.png"
              alt="Pump.Fun logo"
              className="w-40 h-40 mb-8"
            />
            <p className="text-gray-800 text-center mb-8 text-xl">
              Buy now and fight back against Rugrats!
            </p>
            <button
              className="bg-gradient-to-t from-red-400 to-gray border border-solid border-yellow-800 border-2 hover:from-red-500 hover:to-red 
                text-white font-bold p-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-3xl"
              onClick={() => redirectTo(pump)}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

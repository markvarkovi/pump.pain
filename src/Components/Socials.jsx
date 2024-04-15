export default function Socials() {
  const tg = "https://t.me/+jWZrw_eUN29hN2Vk";
  const x = "https://twitter.com/PumpPain53294";
  const pump = "https://pump.fun"; //need to be added when listing is done
  const tiktok = "https://www.tiktok.com/@pump.pain";

  function redirectTo(link) {
    window.location.href = link;
  }

  return (
    <div className="flex flex-column items-center h-screen 2xl:(flex items-center h-screen)">
      <div className="2xl:(max-w-6xl flex justify-evenly items-center)">
        <div className="text-gray-50 bg-red-400 bg-opacity-20 rounded-lg p-12 shadow-md mx-4">
          <div className="flex flex-col items-center">
            <img
              src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000"
              alt="Twitter Logo"
              className="w-40 h-40 mb-8"
            />
            <p className="text-gray-800 text-center mb-8 text-xl">
              Follow us on X for daily updates and giveaways
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
              src="https://static.vecteezy.com/system/resources/previews/023/986/921/original/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png"
              alt="Tiktok Logo"
              className="w-40 h-40 mb-8"
            />
            <p className="text-gray-800 text-center mb-8 text-xl">
              Follow us on TikTok for latest community memes
            </p>
            <button
              className="bg-gradient-to-t from-red-400 to-gray border border-solid border-yellow-800 border-2 hover:from-red-500 hover:to-red 
                text-white font-bold p-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-3xl"
              onClick={() => redirectTo(tiktok)}
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
              onClick={() => alert("STAY TUNED")}
            >
              Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

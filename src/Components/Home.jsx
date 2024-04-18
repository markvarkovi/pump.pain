import { useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function telegramRedirect() {
    window.location.href = "https://t.me/+jWZrw_eUN29hN2Vk";
  }

  const images = [
    "https://pbs.twimg.com/media/GIAeBtqbAAEn_KB.jpg",
    "https://i.ibb.co/gFQV4vw/Qm-Q1ngjp1ja-PJn91t-S36-BWopn5-UGtx1srh-Fgzcriv5wd-Ks.png",
    "https://i.ibb.co/Vjrb349/Qme-Kz-Hi7g-XTCKn-Ywznf1-JYm-KXT1t-Z1gpkeq-MSWJ5p-JGKxj.png",
    "https://i.ibb.co/MSQ87zQ/Qmcf-RSi7-M7f-Aj7hr2-WU6ju-J7-JDg3-JZ6w-BZy-A3-Arr17boa-L.png",
    "https://i.ibb.co/cL3gQLb/Qmf2-MJ82-TE9rc7-CGLMNe-SA4-Kysj-V7q6o-Np-Wfj-L2-Vpi-VNAA.jpg",
    "https://i.ibb.co/KW5mvgy/boden.webp",
    "https://i.ibb.co/4KzDMhP/jeo-boden-meme-g-ID-7.webp",
  ];

  const getHimMad = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex < 6) {
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  const getHimChill = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <>
      <div className="flex items-start my-28">
        <div className="mx-64 text-gray-50 tracking-widest text-lg ">
          <h1 className="my-16 font-bold text-2xl">
            Welcome to the BODENCERS community!
          </h1>
          <p>
            A community where we understand the agony and frustration that comes with
            investing in meme coins only to be rug-pulled. We know the pain all too well.
            The sinking feeling in your stomach, the disbelief as your investment
            evaporates into thin air.
          </p>
          <p>But here, you are NOT ALONE.</p>
          <br />
          <p className="mb-4 text-2xl">The solution is us. The solution is $BODENCE.</p>
          <button
            className="mt-8 bg-gradient-to-t from-blue-700 to-gray border border-solid border-yellow-800 border-2 hover:from-red-500 hover:to-red 
      text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-4xl"
            onClick={telegramRedirect}
          >
            Join the community!
          </button>
        </div>
        <div
          className="flex flex-col bg-gray-900 mr-40 rounded-lg bg-opacity-40 border-8 border-yellow-800 border-double"
          style={{ height: "30rem", width: "150rem" }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="p-4 object-contain w-full h-full cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110"
          />
          <div className="flex justify-between">
            <button
              className="text-2xl mt-8 bg-gradient-to-t from-red-700 to-gray border border-solid border-yellow-800 border-2 hover:from-red-500 hover:to-red
       text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              onClick={getHimMad}
            >
              ⬅
            </button>
            <button
              onClick={getHimChill}
              className="text-2xl mt-8 bg-gradient-to-t from-red-200 to-gray border border-solid border-yellow-800 border-2 hover:from-red-100 hover:to-red
       text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

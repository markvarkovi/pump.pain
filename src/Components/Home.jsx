import { useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function telegramRedirect() {
    window.location.href = "https://t.me/+jWZrw_eUN29hN2Vk";
  }

  const images = [
    "https://i.ibb.co/6FZJjM5/586c3354-e43d-4595-b9ca-0123b663111a.webp",
    "https://i.ibb.co/nQqMtPp/be2944bb-d650-462f-a171-6da3030e1af1.webp",
    "https://i.ibb.co/GtTfgVc/08ba31b8-4018-459b-b524-e552ea13edcd.webp",
    "https://i.ibb.co/9HfFHLx/12fe87e8-37b6-402b-94d8-2278475c8d51.webp",
    "https://i.ibb.co/6cSVxwF/ddacce69-d8bd-4eb6-a5cf-4666a3c2cec9.webp",
    "https://i.ibb.co/mC328mb/d0c07b58-647c-44b9-b89d-fa6ec2225606.webp",
    "https://i.ibb.co/72Vb6yp/5588aabe-06cf-4eea-96fc-a330c18f9c47.webp",
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
          <h1 className="my-16 font-bold text-2xl">Welcome to the HamLana community!</h1>
          <p>
            A community where we understand the agony and frustration that comes with
            investing in meme coins only to be rug-pulled. We know the pain all too well.
            The sinking feeling in your stomach, the disbelief as your investment
            evaporates into thin air.
          </p>
          <p>But here, you are NOT ALONE.</p>
          <br />
          <p className="mb-4 text-2xl">The solution is us. The solution is $HAMLANA.</p>
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

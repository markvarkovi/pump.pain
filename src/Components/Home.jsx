import { useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function telegramRedirect() {
    window.location.href = "https://t.me/+MvNwO9LlQq1iMzBk";
  }

  const images = [
    "https://i.ibb.co/ZKzWcwG/Harold-1.png",
    "https://i.ibb.co/qrv2FJF/Harold-2.png",
    "https://i.ibb.co/stJsHMP/Harold-3.png",
    "https://i.ibb.co/yVQdPVt/Harold-4.png",
    "https://i.ibb.co/k14tb4p/Harold-5.png",
    "https://i.ibb.co/x3k7c6y/Harold-6.png",
    "https://i.ibb.co/7W9pq20/Harold-7.png",
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
            Welcome to the pain.pump community!
          </h1>
          <p>
            A community where we understand the agony and frustration that comes with
            investing in meme coins only to be rug-pulled. We know the pain all too well.
            The sinking feeling in your stomach, the disbelief as your investment
            evaporates into thin air.
          </p>
          <p>But here, you are NOT ALONE.</p>
          <br />
          <p className="mb-4 text-2xl">The solution is us. The solution is $PP.</p>
          <button
            className="mt-8 bg-gradient-to-t from-red-400 to-gray border border-solid border-yellow-800 border-2 hover:from-red-500 hover:to-red 
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
              Make him mad
            </button>
            <button
              onClick={getHimChill}
              className="text-2xl mt-8 bg-gradient-to-t from-red-200 to-gray border border-solid border-yellow-800 border-2 hover:from-red-100 hover:to-red
       text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Make him chill
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

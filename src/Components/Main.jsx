/* eslint-disable react/no-unescaped-entities */
import Header from "./Header.jsx";

export default function Main() {
  return (
    <>
      <div className="flex w-full h-screen flex-col justify-between">
        <Header />
        <div className="flex justify-end items-center">
          <div className="mx-64 text-gray-50 tracking-widest text-lg ">
            <h1 className="my-16 font-bold text-2xl">
              Welcome to the pump.pain community!
            </h1>
            <p>
              A community where we understand the agony and
              frustration that comes with investing in meme
              coins only to be rug-pulled. We know the pain
              all too well. The sinking feeling in your
              stomach, the disbelief as your investment
              evaporates into thin air.
            </p>
            <br></br>
            <p className="mb-4">
              But here, you're NOT ALONE.
            </p>
            <button className="mt-8 bg-gradient-to-t from-red-400 to-gray border border-solid border-black hover:from-red-500 hover:to-red text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
              Learn more about our mission
            </button>
          </div>
          <div
            className="flex flex-col bg-gray-900 mr-40 rounded-lg bg-opacity-40 border-8 border-black border-double"
            style={{ height: "30rem", width: "150rem" }}
          >
            <img
              src="https://i.ibb.co/ZKzWcwG/Harold-1.png"
              alt="Harold-1"
              className="p-4 object-contain w-full h-full cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110"
            />
            <button className="text-2xl mt-8 bg-gradient-to-t from-red-400 to-gray border border-solid border-black hover:from-red-500 hover:to-red text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
              Release Anger
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

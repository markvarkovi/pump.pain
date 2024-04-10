/* eslint-disable react/no-unescaped-entities */
import Header from "./Header.jsx";
import Intro from "./Intro.jsx";

export default function Main() {
  return (
    <>
      <div className="flex w-full h-screen flex-col justify-between">
        <Header />
        <Intro />
      </div>
    </>
  );
}

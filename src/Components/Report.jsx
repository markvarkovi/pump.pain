import React, { useState } from "react";

export default function ReportPage() {
  const [formData, setFormData] = useState({
    walletAddress: "",
    username: "",
    projectName: "",
    ticker: "",
    marketCap: "",
    evidence: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { walletAddress, username, projectName, ticker } = formData;

    if (!walletAddress || !username || !projectName || !ticker) {
      alert("Please fill all the fields to send the report");
      return;
    }

    const emailBody = `
      Rugrat's wallet address: ${walletAddress}
      Username: ${username}
      Name of the project: ${projectName}
      Ticker: ${ticker}
    `;

    window.location.href = `mailto:painpump4@gmail.com?subject=Rugrat Report&body=${encodeURIComponent(
      emailBody
    )}`;

    setFormData({
      walletAddress: "",
      username: "",
      projectName: "",
      ticker: "",
    });
  };

  return (
    <div className="mx-auto mt-12 flex">
      <img
        src="https://www.pngall.com/wp-content/uploads/14/Gigachad-PNG-Image.png"
        alt="gigachad"
        className="w-80 h-80"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-red-400 rounded-xl border border-yellow-800 border-double py-8 px-48 mx-32 bg-opacity-20 text-gray-50 uppercase font-bold tracking-widest"
      >
        <h1 className="flex justify-center items-center mb-8 text-3xl">NEW APPLY</h1>
        <label htmlFor="walletAddress">Your Wallet Address</label>
        <input
          type="text"
          id="walletAddress"
          className="bg-red-100 bg-opacity-40 rounded-lg text-black"
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleChange}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="bg-red-100 bg-opacity-40 rounded-lg text-black"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-8 bg-gradient-to-t from-red-400 to-gray border border-solid border-red-100 border-2 hover:from-red-500 hover:to-red 
          text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-4xl"
        >
          SEND APPLICATION
        </button>
      </form>
      <img
        src="https://www.pngall.com/wp-content/uploads/14/Gigachad-Transparent.png"
        alt="gigachad"
        className="w-80 h-80"
      />
    </div>
  );
}

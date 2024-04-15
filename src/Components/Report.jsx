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
    const { walletAddress, username, projectName, ticker, marketCap, evidence } =
      formData;

    if (
      !walletAddress ||
      !username ||
      !projectName ||
      !ticker ||
      !marketCap ||
      !evidence
    ) {
      alert("Please fill all the fields to send the report");
      return;
    }

    const emailBody = `
      Rugrat's wallet address: ${walletAddress}
      Username: ${username}
      Name of the project: ${projectName}
      Ticker: ${ticker}
      Top estimated market cap: ${marketCap}
      Evidence: ${evidence}
    `;

    window.location.href = `mailto:painpump4@gmail.com?subject=Rugrat Report&body=${encodeURIComponent(
      emailBody
    )}`;

    setFormData({
      walletAddress: "",
      username: "",
      projectName: "",
      ticker: "",
      marketCap: "",
      evidence: "",
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
        <h1 className="flex justify-center items-center mb-8 text-3xl">NEW REPORT</h1>
        <label htmlFor="walletAddress">Rugrat's Wallet Address</label>
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

        <label htmlFor="projectName">Name of the Project</label>
        <input
          type="text"
          id="projectName"
          className="bg-red-100 bg-opacity-40 rounded-lg text-black"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
        />

        <label htmlFor="ticker">Ticker</label>
        <input
          type="text"
          id="ticker"
          className="bg-red-100 bg-opacity-40 rounded-lg text-black"
          name="ticker"
          value={formData.ticker}
          onChange={handleChange}
        />

        <label htmlFor="marketCap">Top Estimated Market Cap in USD</label>
        <input
          type="number"
          id="marketCap"
          className="bg-red-100 bg-opacity-40 rounded-lg text-black"
          name="marketCap"
          value={formData.marketCap}
          onChange={handleChange}
        />

        <label htmlFor="evidence">Evidence</label>
        <textarea
          id="evidence"
          name="evidence"
          className="bg-red-100 bg-opacity-40 rounded-lg text-black"
          rows="4"
          value={formData.evidence}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="mt-8 bg-gradient-to-t from-red-400 to-gray border border-solid border-red-100 border-2 hover:from-red-500 hover:to-red 
          text-white font-bold p-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-4xl"
        >
          SEND REPORT
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

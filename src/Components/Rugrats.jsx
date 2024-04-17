import { useState } from "react";

export default function Rugrats() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = data.filter((row) =>
    row.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mx-16 mt-12 2xl:mx-64 mt-12 text-gray-50 tracking-wider text-lg flex flex-col bg-red-400 rounded-xl border border-yellow-800 border-double p-4 bg-opacity-10">
        <p className="pb-4">
          Our database receives frequent updates from both our team and community
          submissions throughout the day.
        </p>
        <p className="pb-4">
          We strongly encourage the community to refrain from purchasing coins associated
          with blacklisted addresses. It's essential to refer to wallet addresses
          accurately, as usernames or tickers may align.
        </p>
        <p className="pb-8">
          We are actively enhancing our platform to mitigate rug pulls and enhance
          security. This includes measures like blacklisting users known for utilizing
          bots to artificially inflate coin value before executing rug pulls.
        </p>
      </div>

      <div className="mx-16 mt-12 2xl:mx-64 mt-12 text-gray-50 tracking-wider text-lg flex flex-col bg-red-400 rounded-xl border border-yellow-800 border-double p-4 bg-opacity-10">
        <label className="text-2xl font-bold">
          Here you can search for blacklisted wallets:
        </label>
        <input
          type="text"
          placeholder="Paste wallet address..."
          className="py-2 px-4 rounded-lg border border-gray-300 mt-4 focus:outline-none focus:border-yellow-500 text-gray-900"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="max-w-6xl">
          <table className="w-full bg-red-300 text-gray-50 shadow-lg rounded-lg overflow-hidden text-gray-50 text-xl mb-12">
            <thead className="text-left">
              <tr>
                <th className="py-4 px-6 bg-gray-900">Number</th>
                <th className="py-4 px-6">Wallet Address</th>
                <th className="py-4 px-6 bg-gray-900">Username</th>
                <th className="py-4 px-6">Name of the Project</th>
                <th className="py-4 px-6">Ticker</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr className="bg-gray-800" key={index}>
                  <td className="py-4 px-6">{index + 1}</td>
                  <td className="py-4 px-6">{row.walletAddress}</td>
                  <td className="py-4 px-6">{row.username}</td>
                  <td className="py-4 px-6">{row.projectName}</td>
                  <td className="py-4 px-6">{row.ticker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    walletAddress: "3NmzEp49J6jBFXdzgJmFFuKXUYYCbsq2dhsbph37umXr",
    username: "3NmzEp",
    projectName: "Vonk",
    ticker: "VONK",
  },
  {
    walletAddress: "3e5XaYffXLkix6nbo3JNcUL7KvATzqXgBdJ8FoRSrcmk",
    username: "3e5XaY",
    projectName: "AmongCat",
    ticker: "SUSY",
  },
  {
    walletAddress: "6z3yKowgUDDZBsdUQxdQPsUyvidYb7K96EadJCUuFwKZ",
    username: "@MedusaSwap",
    projectName: "MedusaSwap",
    ticker: "tMIDS",
  },
  {
    walletAddress: "HgcjfUCTjpnPQarXDmhM3UKTWsWH873MASYvNeSQj5Wh",
    username: "DEPEPTIVE",
    projectName: "DEPEPTIVE",
    ticker: "$CLUES",
  },
  {
    walletAddress: "5HUTkjTChJc6DyeSAcUgVuLncKSvHfMokgdn9tacbFfP",
    username: "SHUTKj",
    projectName: "Seal Pepe",
    ticker: "SPEPE",
  },
  {
    walletAddress: "5HUTkjTChJc6DyeSAcUgVuLncKSvHfMokgdn9tacbFfP",
    username: "SHUTKj",
    projectName: "Pepe Peepo",
    ticker: "PEEPO",
  },
  {
    walletAddress: "5HUTkjTChJc6DyeSAcUgVuLncKSvHfMokgdn9tacbFfP",
    username: "SHUTKj",
    projectName: "General Aladeen Pepe",
    ticker: "ALPEPE",
  },
  {
    walletAddress: "6DdKqwXD939bAtu4XUxXdiRfhUmzLh6nwYE71944RUq3",
    username: "6DdKqw",
    projectName: "Tender",
    ticker: "Tender",
  },
];

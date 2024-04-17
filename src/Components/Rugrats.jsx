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
        <u className="pb-4">
          We strongly encourage the community to JOIN our TG and HODL DAXWEEDER.
        </u>
        <p className="pb-8">
          We are actively enhancing our platform to display our biggest holders.
        </p>
      </div>

      <div className="mx-16 mt-12 2xl:mx-64 mt-12 text-gray-50 tracking-wider text-lg flex flex-col bg-red-400 rounded-xl border border-yellow-800 border-double p-4 bg-opacity-10">
        <label className="text-2xl font-bold">Here you can search for wallets:</label>
        <input
          type="text"
          placeholder="Paste wallet address..."
          className="py-2 px-4 rounded-lg border border-gray-300 mt-4 focus:outline-none focus:border-yellow-500 text-gray-900"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {filteredRows.length === 0 && (
          <div className="bg-gray-800 text-gray-200 rounded-lg p-4 mt-4">
            This wallet address is not blacklisted by our database.
          </div>
        )}
      </div>
      {filteredRows.length > 0 && (
        <div className="flex justify-center mt-6">
          <div className="max-w-6xl">
            <table className="w-full bg-red-300 text-gray-50 shadow-lg rounded-lg overflow-hidden text-gray-50 text-xl mb-12">
              <thead className="text-left">
                <tr>
                  <th className="py-4 px-6 bg-gray-900">Number</th>
                  <th className="py-4 px-6">Wallet Address</th>
                  <th className="py-4 px-6 bg-gray-900">Holder username</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr className="bg-gray-800" key={index}>
                    <td className="py-4 px-6">{index + 1}</td>
                    <td className="py-4 px-6">{row.walletAddress}</td>
                    <td className="py-4 px-6">{row.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
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
    walletAddress: "6DdKqwXD939bAtu4XUxXdiRfhUmzLh6nwYE71944RUq3",
    username: "6DdKqw",
    projectName: "Tender",
    ticker: "TENDER",
  },
  {
    walletAddress: "3TymUEGowL5PTrLdwKCH2KMws2JkyHCRjSe2N791ibHh",
    username: "3TymUE",
    projectName: "BirdDog",
    ticker: "BDOG",
  },
  {
    walletAddress: "3TymUEGowL5PTrLdwKCH2KMws2JkyHCRjSe2N791ibHh",
    username: "3TymUE",
    projectName: "BirdDog",
    ticker: "BDOG",
  },
  {
    walletAddress: "GKiYQ4hURwAtRJtA1R8gKyXpcfQQpvUQD3WgQvy98VEZ",
    username: "Praialves",
    projectName: "HIQUAFF",
    ticker: "QUAFF",
  },
  {
    walletAddress: "491RdRRAhq4Zv5SYKMnB2cgQ7avqhSDgqntHCx3hvBG4",
    username: "491RdR",
    projectName: "Chad pepe",
    ticker: "CHAD",
  },
  {
    walletAddress: "HEACiuvAnVtzXMMqXmr2WrFGJagU5bn5CT8LVR9VUh69",
    username: "HEACiu",
    projectName: "MEMEWARS",
    ticker: "MEWA",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "DUBAI / VENICE",
    ticker: "DBVNC",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wb4tBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "jerri48",
    projectName: "Islamic Republic of Irug",
    ticker: "IRUG",
  },
  {
    walletAddress: "DYN7qv5dshYaYDU46odudBkWW8vHa5eE2pqupXqu4Ueq",
    username: "DYN7qv",
    projectName: "Boden King",
    ticker: "BODENKING",
  },
  {
    walletAddress: "DmTiKnvqTZ4w7rWQxgp3nSN2L6S7SjWrRLXSwaTUBMop",
    username: "DmTiKn",
    projectName: "holyshit",
    ticker: "shit",
  },
  {
    walletAddress: "BzqmFWAiNZ8bcVXb3JkK6SBEraPFCiaeXj6M74Lvigue",
    username: "BzqmFW",
    projectName: "Let's make Pump.fun great again",
    ticker: "PUMPF",
  },
  {
    walletAddress: "Af7Sk11MuQEz1V85Ug9KKiJoijY6DsW5g5eCAriqqavs",
    username: "PaintToys",
    projectName: "Paint Toys",
    ticker: "TOYS",
  },
  {
    walletAddress: "D9eeM5BBAEXyMfjhbSYzNnJg3TkD7EtpSr66ubgDkCUh",
    username: "D9eem5",
    projectName: "cettromp",
    ticker: "cettromp",
  },
];

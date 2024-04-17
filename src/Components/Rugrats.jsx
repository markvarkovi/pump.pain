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
    projectName: "Sofibracoins",
    ticker: "PRFV",
  },
  {
    walletAddress: "GKiYQ4hURwAtRJtA1R8gKyXpcfQQpvUQD3WgQvy98VEZ",
    username: "Praialves",
    projectName: "Solaxative",
    ticker: "SOLAX",
  },
  {
    walletAddress: "GKiYQ4hURwAtRJtA1R8gKyXpcfQQpvUQD3WgQvy98VEZ",
    username: "Praialves",
    projectName: "WORLD PEACE",
    ticker: "W☮",
  },
  {
    walletAddress: "GKiYQ4hURwAtRJtA1R8gKyXpcfQQpvUQD3WgQvy98VEZ",
    username: "Praialves",
    projectName: "Lambo Space Princess",
    ticker: "LSP",
  },
  {
    walletAddress: "GKiYQ4hURwAtRJtA1R8gKyXpcfQQpvUQD3WgQvy98VEZ",
    username: "Praialves",
    projectName: "Solmail",
    ticker: "Mail",
  },
  {
    walletAddress: "GKiYQ4hURwAtRJtA1R8gKyXpcfQQpvUQD3WgQvy98VEZ",
    username: "Praialves",
    projectName: "DUCKSCOINS",
    ticker: "DUCK",
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
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "Milady Sword Cock",
    ticker: "COCK",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "American Based",
    ticker: "BUSA",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "pepe1/2",
    ticker: "pepe1/2",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "dognohat",
    ticker: "Nhbg",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "JOPANMIKADO",
    ticker: "MIKADO",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "Turkish Milady",
    ticker: "TURKMIL",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "type shit",
    ticker: "WOLF",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "Sad Nuggle",
    ticker: "NUG",
  },
  {
    walletAddress: "HWU2NH5apfxUpw2Wy6mBoHm2uZ7HgHFAnu9MjHTovpVD",
    username: "pump888",
    projectName: "Islamic Republic of Irug",
    ticker: "IRUG",
  },
];

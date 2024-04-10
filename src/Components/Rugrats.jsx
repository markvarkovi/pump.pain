export default function Rugrats() {
  return (
    <>
      <div className="mx-auto max-w-4xl mt-24">
        <table className="w-full bg-red-300 text-gray-50 shadow-lg rounded-lg overflow-hidden text-white text-xl">
          <thead className="text-left">
            <tr>
              <th className="py-4 px-6 bg-gray-900">Number</th>
              <th className="py-4 px-6">Wallet Address</th>
              <th className="py-4 px-6 bg-gray-900">Username</th>
              <th className="py-4 px-6">Name of the Project</th>
              <th className="py-4 px-6">Ticker</th>
              <th className="py-4 px-6 bg-gray-900">Top Estimated Market Cap</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800">
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">3NmzEp49J6jBFXdzgJmFFuKXUYYCbsq2dhsbph37umXr</td>
              <td className="py-4 px-6">3NmzEp</td>
              <td className="py-4 px-6">Vonk</td>
              <td className="py-4 px-6">VONK</td>
              <td className="py-4 px-6">$20,000</td>
            </tr>
            <tr className="bg-gray-800">
              <td className="py-4 px-6">2</td>
              <td className="py-4 px-6">3e5XaYffXLkix6nbo3JNcUL7KvATzqXgBdJ8FoRSrcmk</td>
              <td className="py-4 px-6">3e5XaY</td>
              <td className="py-4 px-6">AmongCat</td>
              <td className="py-4 px-6">SUSY</td>
              <td className="py-4 px-6">$10,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

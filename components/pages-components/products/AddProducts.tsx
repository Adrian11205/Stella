import { ArrowDown } from "lucide-react";

export default function AddProducts() {
  return (
    <div className="w-fit h-fit flex flex-col items-center justify-center gap-4 p-6 rounded-2xl shadow-lg bg-blue-200">
      <span className="text-blue-900 text-xl font-bold flex flex-col justify-center items-center ">
        Please complete the fields below
        <ArrowDown />
      </span>

      <input
        type="text"
        placeholder="Enter Image Url"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      />

      <input
        type="text"
        placeholder="Enter Brand"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      />

      <input
        type="text"
        placeholder="Enter Title"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      />

      <input
        type="text"
        placeholder="Enter Price"
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      />

      <button className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-blue-500 text-white  shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400">
        Add new Product
      </button>
    </div>
  );
}

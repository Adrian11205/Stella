import { FaApple, FaAndroid } from "react-icons/fa";
import {
  SiNike,
  SiAdidas,
  SiPuma,
  SiNewbalance,
  SiUniqlo,
} from "react-icons/si";

const brands = [
  { name: "Nike", icon: <SiNike /> },
  { name: "Adidas", icon: <SiAdidas /> },
  { name: "Apple", icon: <FaApple /> },
  { name: "Puma", icon: <SiPuma /> },
  { name: "New Balance", icon: <SiNewbalance /> },
  { name: "Uniqlo", icon: <SiUniqlo /> },
  { name: "Android", icon: <FaAndroid /> },
];

export default function Filter() {
  return (
    <div>
      <aside className="w-85 bg-gray-100 rounded-xl border border-gray-200  p-5 shadow-accent-foreground gap-2 ">
        <div className="flex flex-col justify-between items-center mb-6 ">
          <h1 className="text-2xl font-bold pb-3">Filter</h1>

          <div className="flex flex-col bg-gray-100 w-full   rounded-lg gap-2 pl-2 pt-3 pb-2 border-2">
            <span className=" font-bold pl-3">Brand</span>
            <input
              type="search"
              placeholder="Search brand..."
              className="border w-60 h-8 rounded-lg flex items-center pl-6  border-gray-300"
            />

            <label className="flex flex-col  items-start gap-2 pl-4">
              <ul>
                {brands.map((brand) => (
                  <li
                    key={brand.name}
                    className="flex items-center gap-2 font-medium"
                  >
                    <input type="checkbox" placeholder="" />
                    {brand.icon}
                    {brand.name}
                  </li>
                ))}
              </ul>
            </label>
          </div>

          <div className="flex flex-col bg-gray-100 w-full gap-2 pl-3 pt-3 border-2 rounded-lg">
            <span className="font-bold pl-2">Price</span>
            <input
              type="range"
              className="w-60 "
              min="0"
              max="10000"
              placeholder="price"
            />

            <div className="flex flex-row gap-3 bg-gray-100 w-full justify-center items-center pb-2 pr-2">
              <input
                type="text"
                placeholder="min $"
                className="h-8 w-30 border pl-3 cursor-pointer hover:bg-gray-300"
              />
              <input
                type="text"
                placeholder="max $"
                className="h-8 w-30 border pl-3 cursor-pointer hover:bg-gray-300"
              />
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 w-full pt-3 gap-2 pl-2 border-2 rounded-lg pb-2">
            <span className="font-bold pl-4">Size</span>
            <div className="flex flex-wrap gap-1 pl-3 ">
              <button className="h-8 w-12 border rounded-lg cursor-pointer hover:bg-gray-400">
                {" "}
                XXS{" "}
              </button>
              <button className="h-8 w-12 border rounded-lg cursor-pointer hover:bg-gray-400">
                {" "}
                XS{" "}
              </button>
              <button className="h-8 w-12 border rounded-lg cursor-pointer hover:bg-gray-400">
                {" "}
                S{" "}
              </button>
              <button className="h-8 w-12 border rounded-lg cursor-pointer hover:bg-gray-400">
                {" "}
                M{" "}
              </button>
              <button className="h-8 w-12 border rounded-lg cursor-pointer hover:bg-gray-400">
                {" "}
                L{" "}
              </button>
              <button className="h-8 w-12 border rounded-lg cursor-pointer hover:bg-gray-400">
                {" "}
                XL{" "}
              </button>
              <button className="h-8 w-12 border rounded-lg cursor-pointer hover:bg-gray-400">
                {" "}
                XXL{" "}
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 w-full pt-2 pl-2 pb-2 gap-2 rounded-lg">
            <span className="font-bold pl-4">Color</span>
            <div className="flex flex-row gap-1 pl-3 ">
              <div className="bg-red-600 rounded-full w-5 h-5 cursor-pointer hover:border "></div>
              <div className="bg-blue-600 rounded-full w-5 h-5 cursor-pointer hover:border">
                {" "}
              </div>
              <div className="bg-black rounded-full w-5 h-5 cursor-pointer hover:border"></div>
              <div className="bg-orange-600 rounded-full w-5 h-5 cursor-pointer hover:border"></div>
              <div className="bg-violet-600 rounded-full w-5 h-5 cursor-pointer hover:border"></div>
              <div className="bg-white rounded-full w-5 h-5 border-3 cursor-pointer hover:border"></div>
              <div className="bg-amber-950 rounded-full w-5 h-5 cursor-pointer hover:border"></div>
              <div className="bg-mauve-600 rounded-full w-5 h-5 cursor-pointer hover:border"></div>
            </div>
          </div>

          <div className="flex justify-center items-center pt-5  ">
            <button className="w-60 h-10 bg-gray-300 rounded-3xl font-bold cursor-pointer hover:bg-gray-500">
              Show products
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

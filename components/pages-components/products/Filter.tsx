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
      <aside className="w-85 bg-card text-card-foreground rounded-xl border border-border p-5 shadow-lg gap-2">
        <div className="flex flex-col justify-between items-center mb-6 ">
          <h1 className="text-2xl font-bold pb-3">Filter</h1>

          <div className="flex flex-col bg-muted w-full rounded-lg gap-2 pl-2 pt-3 pb-2 border-2 border-border">
            <span className=" font-bold pl-3">Brand</span>
            <input
              type="search"
              placeholder="Search brand..."
              className="border border-border bg-background text-foreground placeholder:text-muted-foreground w-60 h-8 rounded-lg flex items-center pl-6"
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

          <div className="flex flex-col bg-muted w-full gap-2 pl-3 pt-3 border-2 border-border rounded-lg">
            <span className="font-bold pl-2">Price</span>
            <input
              type="range"
              className="w-60 "
              min="0"
              max="10000"
              placeholder="price"
            />

            <div className="flex flex-row gap-3 bg-muted w-full justify-center items-center pb-2 pr-2">
              <input
                type="text"
                placeholder="min $"
                className="h-8 w-30 border border-border bg-background text-foreground placeholder:text-muted-foreground pl-3 cursor-pointer hover:bg-accent"
              />
              <input
                type="text"
                placeholder="max $"
                className="h-8 w-30 border border-border bg-background text-foreground placeholder:text-muted-foreground pl-3 cursor-pointer hover:bg-accent"
              />
            </div>
          </div>

          <div className="flex flex-col bg-muted w-full pt-3 gap-2 pl-2 border-2 border-border rounded-lg pb-2">
            <span className="font-bold pl-4">Size</span>
            <div className="flex flex-wrap gap-1 pl-3 ">
              <button className="h-8 w-12 border border-border bg-background rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {" "}
                XXS{" "}
              </button>
              <button className="h-8 w-12 border border-border bg-background rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {" "}
                XS{" "}
              </button>
              <button className="h-8 w-12 border border-border bg-background rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {" "}
                S{" "}
              </button>
              <button className="h-8 w-12 border border-border bg-background rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {" "}
                M{" "}
              </button>
              <button className="h-8 w-12 border border-border bg-background rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {" "}
                L{" "}
              </button>
              <button className="h-8 w-12 border border-border bg-background rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {" "}
                XL{" "}
              </button>
              <button className="h-8 w-12 border border-border bg-background rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground">
                {" "}
                XXL{" "}
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-muted w-full pt-2 pl-2 pb-2 gap-2 rounded-lg">
            <span className="font-bold pl-4">Color</span>
            <div className="flex flex-row gap-1 pl-3 ">
              <div className="bg-filter-red rounded-full w-5 h-5 cursor-pointer hover:border-2 hover:border-foreground"></div>
              <div className="bg-filter-blue rounded-full w-5 h-5 cursor-pointer hover:border-2 hover:border-foreground">
                {" "}
              </div>
              <div className="bg-filter-black rounded-full w-5 h-5 cursor-pointer hover:border-2 hover:border-foreground"></div>
              <div className="bg-filter-orange rounded-full w-5 h-5 cursor-pointer hover:border-2 hover:border-foreground"></div>
              <div className="bg-filter-violet rounded-full w-5 h-5 cursor-pointer hover:border-2 hover:border-foreground"></div>
              <div className="bg-filter-white rounded-full w-5 h-5 border-2 border-border cursor-pointer hover:border-foreground"></div>
              <div className="bg-filter-brown rounded-full w-5 h-5 cursor-pointer hover:border-2 hover:border-foreground"></div>
              <div className="bg-filter-mauve rounded-full w-5 h-5 cursor-pointer hover:border-2 hover:border-foreground"></div>
            </div>
          </div>

          <div className="flex justify-center items-center pt-5  ">
            <button className="w-60 h-10 bg-primary text-primary-foreground rounded-3xl font-bold cursor-pointer hover:bg-primary/90">
              Show products
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

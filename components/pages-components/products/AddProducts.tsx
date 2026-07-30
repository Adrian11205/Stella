import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { createProduct } from "@/api/requests";
import { toast } from "sonner";

interface AddProductsProps {
  refetchProducts: () => void;
}
export default function AddProducts({ refetchProducts }: AddProductsProps) {
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const isValid =
    title.trim().length > 2 &&
    brand.trim().length > 2 &&
    !isNaN(+price) &&
    price.length > 0;

  const addProduct = () => {
    createProduct({ category: brand, price: +price, name: title })
      .then(() => {
        toast.success("The product is added");
        setBrand("");
        setTitle("");
        setPrice("");
        refetchProducts();
      })
      .catch((err) => toast.error(err?.response?.data?.message));
  };
  return (
    <div className="w-fit h-fit flex flex-col items-center justify-center gap-4 p-6 rounded-2xl shadow-lg bg-blue-200">
      <span className="text-blue-900 text-xl font-bold flex flex-col justify-center items-center ">
        Please complete the fields below
        <ArrowDown />
      </span>

      <input
        type="text"
        placeholder="Enter Brand"
        onChange={(e) => setBrand(e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      />

      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      />

      <input
        type="text"
        placeholder="Enter Price"
        onChange={(e) => setPrice(e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      />

      <button
        onClick={addProduct}
        disabled={!isValid}
        className="w-full px-4  cursor-pointer disabled:cursor-not-allowed disabled:opacity-50  py-2.5 rounded-lg border border-gray-300 bg-blue-500 text-white  shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-400"
      >
        Add new Product
      </button>
    </div>
  );
}

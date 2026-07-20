import {
  Pill,
  Watch,
  Shirt,
  Badge,
  SprayCan,
  Footprints,
  ShoppingBag,
} from "lucide-react";

const categories = [
  {
    id: 1,

    name: "Personal Care",

    icon: Pill,
  },

  {
    id: 2,

    name: "Accessories",

    icon: Watch,
  },

  {
    id: 3,

    name: "Coats",

    icon: Shirt,
  },

  {
    id: 4,

    name: "Sweat Pants",

    icon: Badge,
  },

  {
    id: 5,

    name: "Parfume",

    icon: SprayCan,
  },

  {
    id: 6,

    name: "T-Shirt",

    icon: Shirt,
  },

  {
    id: 7,

    name: "Sneakers",

    icon: Footprints,
  },

  {
    id: 8,

    name: "Bags",

    icon: ShoppingBag,
  },
];

export default function CategoriesSection() {
  return (
    <div className="w-full max-w-400 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Shop by Category
          </h2>

          <div className="text-[#00B5B5] text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-[#00A0A0] transition-colors cursor-pointer">
            See all
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full lg:w-auto">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="flex items-center gap-3 p-3 sm:p-4 md:p-5 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-gray-300 transition-all duration-300"
              >
                <Icon className="text-[#00B5B5] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />

                <span className="text-sm sm:text-base md:text-lg font-medium">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

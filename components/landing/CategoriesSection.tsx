import {
  Pill,
  Watch,
  Shirt,
  Badge,
  SprayCan,
  Footprints,
  ShoppingBag,
} from "lucide-react";
import { useTranslations } from "next-intl";

const categories = [
  {
    id: 1,

    name: "personalCare",

    icon: Pill,
  },

  {
    id: 2,

    name: "accessories",

    icon: Watch,
  },

  {
    id: 3,

    name: "coats",

    icon: Shirt,
  },

  {
    id: 4,

    name: "sweatPants",

    icon: Badge,
  },

  {
    id: 5,

    name: "perfume",

    icon: SprayCan,
  },

  {
    id: 6,

    name: "tShirt",

    icon: Shirt,
  },

  {
    id: 7,

    name: "sneakers",

    icon: Footprints,
  },

  {
    id: 8,

    name: "bags",

    icon: ShoppingBag,
  },
];

export default function CategoriesSection() {
  const t = useTranslations();
  return (
    <div className="w-full max-w-400 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            {t("shopByCategory")}
          </h2>

          <div className="text-brand text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:text-brand-hover transition-colors cursor-pointer">
            {t("seeAll")}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full lg:w-auto">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="flex items-center gap-3 p-3 sm:p-4 md:p-5 border-2 border-muted rounded-xl shadow-md hover:shadow-xl hover:border-muted transition-all duration-300"
              >
                <Icon className="text-brand w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />

                <span className="text-sm sm:text-base md:text-lg font-medium">
                  {t(category.name)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

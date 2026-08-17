"use client";

import {
  Truck,
  Undo2,
  ShieldCheck,
  ShoppingCart,
  Heart,
  Search,
} from "lucide-react";
import Image from "next/image";
import SkipTo from "./ShipTo";
import Account from "./Account";
import { useState } from "react";
import RegisterDialog from "../dialogs/RegisterDialog";
import RegisterLog from "../dialogs/RegisterLogin";
import MobileAppMenu from "./MobileAppMenu";

import Languages from "./Languages";
import useCartStore from "../../stores/useCartStore";
import useFavoriteStore from "../../stores/useFavoriteStore";
import SwitchTheme from "./SwitchTheme";
import { useAuthStore } from "@/stores/useAuthStore";
import Link from "next/link";

function Header() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLog, setIsLog] = useState(false);

  const { isAuth } = useAuthStore();

  const { products } = useCartStore();
  const { favoriteNumber } = useFavoriteStore();
 const totalProducts = products.reduce((total , product) => {
  return total+=product.quantity
 },0)
  return (
    <div>
      <header>
        <div className="bg-foreground text-white h-9 flex items-center justify-between px-3 sm:px-6">
          <SkipTo />

          <div className="hidden sm:flex gap-3 sm:gap-6 text-sm">
            <span className="flex items-center gap-1 cursor-pointer group relative">
              <Truck color="#5796a8" />
              {"trustedShipping"}
              <div className="absolute top-6 left-0 bg-white text-gray-800 text-xs p-3 rounded-lg shadow-lg w-38 hidden group-hover:block z-50">
                <p className="font-semibold">{"freeShipping"}</p>
                <p className="text-gray-500">{"onAllOrders"}</p>
              </div>
            </span>

            <span className="flex items-center gap-1 cursor-pointer group relative">
              <Undo2 color="#5796a8" />
              {"easyReturns"}
              <div className="absolute top-6 left-0 bg-white text-gray-800 text-xs p-3 rounded-lg shadow-lg w-38 hidden group-hover:block z-50">
                <p className="font-semibold">{"thirtyDayReturns"}</p>
                <p className="text-gray-500">{"noQuestionsAsked"}</p>
              </div>
            </span>

            <span className="flex items-center gap-1 cursor-pointer group relative">
              <ShieldCheck color="#5796a8" />
              {"secureShopping"}
              <div className="absolute top-6 left-0 bg-white text-gray-800 text-xs p-3 rounded-lg shadow-lg w-38 hidden group-hover:block z-50">
                <p className="font-semibold">{"sslEncrypted"}</p>
                <p className="text-gray-500">{"yourDataIsSafe"}</p>
              </div>
            </span>
          </div>
        </div>

        <div className="bg-white h-20 flex items-center justify-between px-6 shadow-sm">
          <button
            onClick={() => "/home"}
            className="flex items-center whitespace-nowrap hover:opacity-80 transition cursor-pointer"
          >
            <Image
              src="https://static.tildacdn.net/tild3830-6233-4363-b939-616366386430/ChatGPT_Image_9__202.png"
              alt="Stella"
              width={90}
              height={180}
              priority={true}
            />
            <span className="text-3xl font-bold text-[#00B5B5] leading-none">
              Stella
            </span>
          </button>

          <div className="hidden sm:block relative w-1/2">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search />
            </div>
            <input
              type="text"
              placeholder={"search"}
              className="w-full rounded-lg px-10 py-2 shadow-sm bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#5e9e9e]"
            />
          </div>

          <SwitchTheme />

          <Languages />

          <div className="hidden sm:flex items-center gap-6">
           

            {isAuth ? (
              <>
                < Link
                href={"/cart"}
                  className="relative flex items-center"
                >
                  <ShoppingCart  />
                  {products.length > 0 && (
                    <div className="absolute -top-2.5 -right-2.5 bg-red-500 rounded-full size-5 text-white flex items-center justify-center">
                      {totalProducts}
                    </div>
                  )}
                </Link>

                <button
                  onClick={() => "/wishlist"}
                  className="relative flex items-center"
                >
                  <Heart color="#81858a" />
                  {favoriteNumber > 0 && (
                    <div className="absolute -top-2.5 -right-2.5 bg-red-500 rounded-full size-5 text-white flex items-center justify-center">
                      {favoriteNumber}
                    </div>
                  )}
                </button>
                <Account />
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsRegister(true)}
                  className="border-2 border-border bg-muted p-2 rounded-xl cursor-pointer "
                >
                  Register
                </button>

                <button
                  onClick={() => setIsLog(true)}
                  className="border-2 border-border bg-muted p-2 rounded-xl cursor-pointer "
                >
                  Log in
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-3 sm:hidden">
            <MobileAppMenu
              onRegisterClick={() => setIsRegister(true)}
              onLoginClick={() => setIsLog(true)}
            />
          </div>
        </div>

        <div className="sm:hidden bg-white px-6 py-3 ">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 rounded-full border border-gray-200 bg-slate-100 px-3 py-2">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder={"search"}
                className="w-full bg-transparent pl-7 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
              <ShoppingCart className="h-5 w-5" />
            </button>

            <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <RegisterDialog open={isRegister} setOpen={() => setIsRegister(false)} />
      <RegisterLog open={isLog} setOpen={() => setIsLog(false)} />
    </div>
  );
}
export default Header;

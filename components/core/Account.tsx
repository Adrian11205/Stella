"use client";

import {
  ChevronDown,
  Settings,
  User,
  UserRoundPlus,
  Mail,
  MessageSquareText,
  Ellipsis,
  ShoppingCart,
} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import SignOutAccount from "./SignOutAccount";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuLabel,
} from "./../../components/ui/dropdown-menu";
import { useAuthStore } from "@/stores/useAuthStore";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Account() {
  const { user } = useAuthStore();
  const t = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition outline-none">
        <FaUserCircle size={30} />
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs text-accent-foreground">{t("welcomeBack")}</span>
          <span className="text-sm font-semibold text-accent-foreground">
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p>{user?.email}</p>
          </span>
        </div>
        <ChevronDown className="w-4 h-4 text-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 bg-background border-0">
        <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>

        <DropdownMenuItem className="gap-3 border-b  cursor-pointer rounded-none hover:bg-accent hover:text-accent-foreground">
          <Link
            href={"/profile"}
            className="flex items-center gap-2 cursor-pointer">
            <User className="w-4 h-4" />
            {t("profile")}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-3 border-b  cursor-pointer rounded-none hover:bg-accent hover:text-accent-foreground">
          <Link href={"products"}
            className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart className="w-4 h-4" />
            {t("products")}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-3  cursor-pointer border-b rounded-none hover:bg-accent hover:text-accent-foreground">
          <Settings className="w-4 h-4" />
          <span>{t("settings")}</span>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="gap-3  cursor-pointer  hover:bg-accent hover:text-accent-foreground">
            <UserRoundPlus />
            {t("inviteUsers")}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem className="hover:bg-accent cursor-pointer  hover:text-accent-foreground">
                <Mail />
                {t("email")}
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent cursor-pointer  hover:text-accent-foreground">
                <MessageSquareText />
                {t("message")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-3 border-t rounded-none cursor-pointer  hover:bg-accent hover:text-accent-foreground">
                <Ellipsis />
                {t("more")}
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <SignOutAccount />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Account;

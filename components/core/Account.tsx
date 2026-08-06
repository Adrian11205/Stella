"use client";

import {
  ChevronDown,
  Settings,
  User,
  UserRoundPlus,
  Mail,
  MessageSquareText,
  Ellipsis,
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

function Account() {
  const { user } = useAuthStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition outline-none">
        <FaUserCircle size={30} />
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs text-gray-500">{"welcomeBack"}</span>
          <span className="text-sm font-semibold text-gray-900">
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p>{user?.email}</p>
          </span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 bg-white border-0">
        <DropdownMenuLabel>{"myAccount"}</DropdownMenuLabel>

        <DropdownMenuItem className="gap-3 border-b  cursor-pointer rounded-none hover:bg-emerald-50 hover:text-emerald-600">
          <User className="w-4 h-4" />
          <button onClick={() => "/profile"} className="cursor-pointer">
            {"profile"}
          </button>
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-3  cursor-pointer border-b rounded-none hover:bg-emerald-50 hover:text-emerald-600">
          <Settings className="w-4 h-4" />
          <span>{"settings"}</span>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="gap-3  cursor-pointer  hover:bg-emerald-50 hover:text-emerald-600">
            <UserRoundPlus />
            {"inviteUsers"}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem className="hover:bg-emerald-50 cursor-pointer  hover:text-emerald-600">
                <Mail />
                {"email"}
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-emerald-50 cursor-pointer  hover:text-emerald-600">
                <MessageSquareText />
                {"message"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-3 border-t rounded-none cursor-pointer  hover:bg-emerald-50 hover:text-emerald-600">
                <Ellipsis />
                {"more"}
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

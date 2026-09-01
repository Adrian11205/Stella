import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import Account from "./Account";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTranslations } from "next-intl";

type MobileAppMenuProps = {
  onRegisterClick: () => void;
  onLoginClick: () => void;
};

export default function MobileAppMenu({
  onRegisterClick,
  onLoginClick,
}: MobileAppMenuProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { isAuth } = useAuthStore();
  const t = useTranslations();

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      {isAuth ? (
        <>
          <Account />
        </>
      ) : (
        <>
          <DialogTrigger asChild>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-chart-4 shadow-sm"
              aria-label={t("menu")}
            >
              <Menu className="h-5 w-5" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:hidden fixed left-1/2 top-[32%] z-50 w-[min(90vw,260px)] -translate-x-1/2 rounded-3xl border border-border bg-background p-4 shadow-xl outline-none">
            <div className="space-y-3 flex flex-col items-center">
              <span className="text-center text-lg font-bold text-chart-4 block">
                {t("menu")}
              </span>
              <button
                onClick={() => {
                  setDialogOpen(false);
                  onRegisterClick();
                }}
                className="w-full rounded-[28px] bg-accent px-4 py-3 text-base font-semibold  transition hover:bg-accent  hover:text-accent-foreground  border border-border disabled:cursor-not-allowed disabled:opacity-60"
              >
                {t("register")}
              </button>
              <button
                onClick={() => {
                  setDialogOpen(false);
                  onLoginClick();
                }}
                className="w-full rounded-[28px] bg-accent px-4 py-3 text-base font-semibold transition hover:bg-accent  hover:text-accent-foreground  border border-border disabled:cursor-not-allowed disabled:opacity-60"
              >
                {t("login")}
              </button>
            </div>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

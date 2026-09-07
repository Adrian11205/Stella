"use client"
import { LogOut } from 'lucide-react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../components/ui/dialog'
import { useAuthStore } from '@/stores/useAuthStore'
import { useTranslations } from "next-intl"

function SignOutAccount() {


    const { logout } = useAuthStore()
    const t = useTranslations()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="w-full flex items-center h-8 text-left border-t gap-3 cursor-pointer bg-background text-destructive hover:bg-destructive/10 hover:border-destructive" >
                    <LogOut className="w-4 h-4 text-destructive ml-2" />
                    <span>{t("signOutAccount")}</span>

                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm bg-background text-foreground shadow-xl ring-1 ring-border">
                <DialogHeader>
                    <DialogTitle>{t("logoutTitle")}</DialogTitle>
                    <DialogDescription>
                        {t("logoutDescription")}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <button
                            type="button"
                            className="w-full rounded-3xl border border-border bg-background text-foreground px-4 py-3 text-sm font-medium hover:bg-brand/10 hover:text-brand"
                        >
                            {t("cancel")}
                        </button>
                    </DialogClose>
                    <DialogClose asChild>
                        <button
                            type="button"
                            onClick={logout}
                            className="w-full rounded-3xl border border-border text-destructive bg-background px-4 py-3 text-sm font-medium hover:bg-destructive/10 hover:text-destructive"
                        >
                            {t("logout")}
                        </button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SignOutAccount
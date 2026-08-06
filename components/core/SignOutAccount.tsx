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

function SignOutAccount() {
    

   const {logout}= useAuthStore()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="w-full flex items-center h-8 text-left border-t   gap-3 cursor-pointer hover:bg-red-50 hover:text-red-600 hover:border-red-200" >
                    <LogOut className="w-4 h-4 text-red-600 ml-2" />
                    <span className="text-red-600">{('signOutAccount')}</span>

                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm bg-white text-slate-900 shadow-xl ring-1 ring-slate-200">
                <DialogHeader>
                    <DialogTitle>{('logoutTitle')}</DialogTitle>
                    <DialogDescription>
                        {('logoutDescription')}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <button
                            type="button"
                            className="w-full rounded-3xl border border-black bg-white px-4 py-3 text-sm font-medium hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
                        >
                            {('cancel')}
                        </button>
                    </DialogClose>
                    <DialogClose asChild>
                        <button
                            type="button"
                            onClick={logout}
                            className="w-full rounded-3xl border border-black text-red-600 bg-white px-4 py-3 text-sm font-medium hover:bg-red-100 hover:text-red-900"
                        >
                            {('logout')}
                        </button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SignOutAccount
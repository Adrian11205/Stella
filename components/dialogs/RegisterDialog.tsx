import { Dialog, DialogContent } from "../../components/ui/dialog";
import { useState } from "react";
import { register as registerUser } from "../..//api/requests";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface RegisterProps {
  open: boolean;
  setOpen: () => void;
}

export default function RegisterDialog({ open, setOpen }: RegisterProps) {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore();

  const schema = z.object({
    email: z.string().email(t("emailInvalid")),
    firstName: z
      .string()
      .min(2, t("nameMinLength"))
      .max(50, t("nameMaxLength"))
      .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, t("nameInvalid")),
    lastName: z
      .string()
      .min(2, t("nameMinLength"))
      .max(50, t("nameMaxLength"))
      .regex(/^[A-Za-zÀ-ÿ\s'-]+$/, t("nameInvalid")),
    password: z
      .string()
      .min(8, t("passwordLength"))
      .max(16, t("passwordLength"))
      .refine((value) => /\d/.test(value), {
        message: t("passwordNumber"),
      })
      .refine((value) => /[,.?!@#$%^&*]/.test(value), {
        message: t("passwordSymbol"),
      }),
    phoneNumber: z.string().regex(/^\+?[0-9]{8,15}$/, t("phoneInvalid")),
  });

  type Form = z.infer<typeof schema>;

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(t("registeredSuccess"));
      login(data.accessToken, data.refreshToken);
      setOpen();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (data: Form) => {
    registerMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] max-w-120 rounded-[22px] border border-border bg-background p-6 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">{t("email")}</span>
            <input
              type="email"
              {...formRegister("email")}
              className={`border-2 rounded-xl h-10 ${errors.email ? "border-destructive/70" : "border-blues/70"}`}
            />
            {errors.email && <span className="text-destructive">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">{t("firstName")}</span>
            <input
              type="text"
              {...formRegister("firstName")}
              className={`border-2 rounded-xl h-10 ${errors.firstName ? "border-destructive/70" : "border-blues/70"}`}
            />
            {errors.firstName && (
              <span className="text-destructive">{errors.firstName.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">{t("lastName")}</span>
            <input
              type="text"
              {...formRegister("lastName")}
              className={`border-2 rounded-xl h-10 ${errors.lastName ? "border-destructive/70" : "border-blues/70"}`}
            />
            {errors.lastName && (
              <span className="text-destructive">{errors.lastName.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">{t("password")}</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...formRegister("password")}
                className={`w-full border-2 rounded-xl h-10 px-3 pr-10 ${errors.password ? "border-destructive/70" : "border-blues/70"}`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>

            {errors.password && <span className="text-destructive">{errors.password.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">{t("phoneNumber")}</span>
            <input
              type="text"
              {...formRegister("phoneNumber")}
              className={`border-2 rounded-xl h-10 ${errors.phoneNumber ? "border-destructive/70" : "border-blues/70"}`}
            />
            {errors.phoneNumber && (
              <span className="text-destructive">{errors.phoneNumber.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blues/70 h-10 text-background mt-2 rounded-2xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("register")}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

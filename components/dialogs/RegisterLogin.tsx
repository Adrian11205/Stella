import { Dialog, DialogContent } from "../../components/ui/dialog";
import { useState } from "react";
import { login } from "../../api/requests";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";

interface RegisterLogProps {
  open: boolean;
  setOpen: () => void;
}

export default function RegisterLog({ open, setOpen }: RegisterLogProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function changeEmail(newEmail: string) {
    setEmail(newEmail);

    if (!newEmail.includes("@")) {
      setEmailError("Email must include @");
    } else if (!newEmail.includes(".")) {
      setEmailError("Email must include .");
    } else {
      setEmailError("");
    }
  }

  function changePassword(newPassword: string) {
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError("Minimum 8 characters");
    } else {
      setPasswordError("");
    }
  }

  const { login: loginStore } = useAuthStore()

  const payload = { email, password };

  const logInMutation = useMutation({
    mutationFn:login,
    
    onSuccess: (data) => {
      toast.success("Registred with success");
      setOpen();
      loginStore(data.accessToken, data.refreshToken)
    },
    onError:(error)=>{
        toast.error(error.message);
    }
  })

  const InputLogData = [
    {
      name: "Email",
      type: "email",
      value: email,
      onChange: changeEmail,
      error: emailError,
    },
    {
      name: "Password",
      type: showPassword ? "text" : "password",
      value: password,
      onChange: changePassword,
      rightElement: (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-muted-foreground hover:text-foreground"
        >
          {showPassword ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      ),
      error: passwordError,
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] max-w-120 rounded-[22px] border border-accent bg-background p-6 shadow-xl" >
        <div className="flex flex-col gap-4 ">
          {InputLogData.map((input) => (
            <div key={input.name} className="flex flex-col gap-2">
              <span className="font-bold text-2xl">{input.name}</span>

              <div className="relative">
                <input
                  type={input.type}
                  value={input.value}
                  onChange={(e) => input.onChange(e.target.value)}
                  className={`w-full border-2 rounded-xl h-10 px-3 pr-10 ${input.error ? "border-destructive/70" : "border-blues/70"
                    }`}
                />

                {input.rightElement && (
                  <div className="absolute inset-y-0 right-4 flex items-center">
                    {input.rightElement}
                  </div>
                )}
              </div>

              {input.error && (
                <span className="text-destructive text-sm">{input.error}</span>
              )}
            </div>
          ))}

          <button
            onClick={()=>{ logInMutation.mutate(payload)}}
            disabled={email.length === 0 || password.length === 0}
            className="bg-blues/70 h-10 text-background rounded-2xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            Log in
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Dialog, DialogContent } from "../../components/ui/dialog";
import { useState } from "react";
import { register } from "../..//api/requests";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";

interface RegisterProps {
  open: boolean;
  setOpen: () => void;
}

export default function RegisterDialog({ open, setOpen }: RegisterProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuthStore()

  const payload = {
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
  };

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success("Registred with success")
      login(data.accessToken, data.refreshToken)
      setOpen()
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  function changeEmail(newEmail: string) {
    setEmail(newEmail);

    if (newEmail.trim() === "") {
      setEmailError("Email is required");
      return;
    }

    if (!newEmail.includes("@")) {
      setEmailError("Email is invalid");
      return;
    }

    setEmailError("");
  }

  function changePassword(newPassword: string) {
    const numberRegex = /\d/;
    const symbolRegex = /[,.?!@#$%^&*]/;

    if (newPassword.length < 8 || newPassword.length > 16) {
      setPasswordError("Password must be between 8 and 16 characters.");
    } else if (!numberRegex.test(newPassword)) {
      setPasswordError("Password must include one number.");
    } else if (!symbolRegex.test(newPassword)) {
      setPasswordError("Password must include one symbol.");
    } else {
      setPasswordError("");
    }

    setPassword(newPassword);
  }

  function changeFirstName(value: string) {
    setFirstName(value);

    const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;

    if (value.trim() === "") {
      setFirstNameError("First name is required");
      return;
    }

    if (value.length < 2) {
      setFirstNameError("First name must be at least 2 characters");
      return;
    }

    if (!nameRegex.test(value)) {
      setFirstNameError("First name contains invalid characters");
      return;
    }

    setFirstNameError("");
  }

  function changeLastName(value: string) {
    setLastName(value);

    const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;

    if (value.trim() === "") {
      setLastNameError("Last name is required");
      return;
    }

    if (value.length < 2) {
      setLastNameError("Last name must be at least 2 characters");
      return;
    }

    if (!nameRegex.test(value)) {
      setLastNameError("Last name contains invalid characters");
      return;
    }

    setLastNameError("");
  }

  function changePhoneNumber(value: string) {
    setPhoneNumber(value);

    const phoneRegex = /^\+?[0-9]{8,15}$/;

    if (value.trim() === "") {
      setPhoneNumberError("Phone number is required");
      return;
    }

    if (!phoneRegex.test(value)) {
      setPhoneNumberError("Phone number is invalid");
      return;
    }

    setPhoneNumberError("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] max-w-120 rounded-[22px] border border-border bg-background p-6 shadow-xl">
        <div className="space-y-4 flex flex-col justify-center">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">Email</span>
            <input
              type="email"
              onChange={(e) => changeEmail(e.target.value)}
              className={`border-2 rounded-xl h-10 ${emailError ? "border-destructive/70" : "border-blues/70"
                }`}
            />
            {emailError && <span className="text-destructive">{emailError}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">First Name</span>
            <input
              type="text"
              onChange={(e) => changeFirstName(e.target.value)}
              className={`border-2 rounded-xl h-10 ${firstNameError ? "border-destructive/70" : "border-blues/70"
                }`}
            />
            {firstNameError && (
              <span className="text-destructive">{firstNameError}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">Last Name</span>
            <input
              type="text"
              onChange={(e) => changeLastName(e.target.value)}
              className={`border-2 rounded-xl h-10 ${lastNameError ? "border-destructive/70" : "border-blues/70"
                }`}
            />
            {lastNameError && (
              <span className="text-destructive">{lastNameError}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">Password</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => changePassword(e.target.value)}
                className={`w-full border-2 rounded-xl h-10 px-3 pr-10 ${passwordError ? "border-destructive/70" : "border-blues/70"
                  }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
            </div>

            {passwordError && (
              <span className="text-destructive">{passwordError}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">Phone Number</span>
            <input
              type="text"
              onChange={(e) => changePhoneNumber(e.target.value)}
              className={`border-2 rounded-xl h-10 ${phoneNumberError ? "border-destructive/70" : "border-blues/70"
                }`}
            />
            {phoneNumberError && (
              <span className="text-destructive">{phoneNumberError}</span>
            )}
          </div>

          <button
            onClick={()=>{registerMutation.mutate(payload)}}
            disabled={
              email.length === 0 ||
              firstName.length === 0 ||
              lastName.length === 0 ||
              password.length === 0 ||
              phoneNumber.length === 0
            }
            className="bg-blues/70 h-10 text-background mt-2 rounded-2xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            Register
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

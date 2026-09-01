"use client"
import { FaUserCircle } from "react-icons/fa";
import { getMyself, updateUserProfile } from "../../api/requests";
import { useEffect, useState } from "react";
import AuthGuard from "@/components/layout/AuthGuard";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/stores/useAuthStore";

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const t = useTranslations();
    const { setUser } = useAuthStore();

    const schema = z.object({
        firstName: z
            .string()
            .min(2, t("passwordMinLength"))
            .max(50, t("nameMaxLength"))
        ,
        lastName: z
            .string()
            .min(2, t("passwordMinLength"))
            .max(50, t("nameMaxLength"))
        ,
        phoneNumber: z
            .string()
            .regex(/^\+?[0-9]{8,15}$/, t("phoneInvalid")),
    });

    type Form = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Form>({
        resolver: zodResolver(schema),
    });

    const updateProfileMutation = useMutation({
        mutationFn: updateUserProfile,
        onSuccess: async () => {
            const data = await getMyself();
            setValue("firstName", data.firstName || "");
            setValue("lastName", data.lastName || "");
            setValue("phoneNumber", data.phoneNumber || "");
            setUser(data);
            setIsEditing(false);
        },
        onError: (error) => {
            console.error("Failed to update profile", error);
        },
    });

    useEffect(() => {
        getMyself()
            .then((data) => {
                setValue("firstName", data.firstName || "");
                setValue("lastName", data.lastName || "");
                setValue("phoneNumber", data.phoneNumber || "");
            })
            .catch((error) => {
                console.error("Failed to load profile", error);
            });
    }, [setValue]);

    const onSubmit = (data: Form) => {
        updateProfileMutation.mutate({
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
        });
    };

    const handleSave = async () => {
        if (!isEditing) {
            setIsEditing(true);
            return;
        }

        handleSubmit(onSubmit)();
    };

    return (
        <AuthGuard>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-start justify-center bg-accent px-4 py-12.75">
                    <div className="w-full max-w-md bg-background p-6 rounded-2xl shadow-lg border border-border">

                        <div className="flex flex-col items-center mb-6">
                            <FaUserCircle size={80} />
                            <h1 className="mt-2 text-lg font-semibold">{t("myProfile")}</h1>
                        </div>

                        <div className="flex flex-col gap-1 mb-4">
                            <span className="text-sm text-chart-4">{t("firstName")}</span>
                            <input
                                type="text"
                                {...register("firstName")}
                                readOnly={!isEditing}

                                className="border rounded-lg px-3 py-2 text-sm w-full"
                            />
                        </div>

                        {errors.firstName && (
                            <p className="text-red-500 text-xs">{errors.firstName.message}</p>
                        )}

                        <div className="flex flex-col gap-1 mb-4">
                            <span className="text-sm text-chart-3">{t("lastName")}</span>
                            <input
                                type="text"
                                {...register("lastName")}
                                readOnly={!isEditing}

                                className="border rounded-lg px-3 py-2 text-sm w-full"
                            />
                        </div>

                        {errors.lastName && (
                            <p className="text-red-500 text-xs">{errors.lastName.message}</p>
                        )}

                        <div className="flex flex-col gap-1 mb-4">
                            <span className="text-sm text-chart-4">{t("phoneNumber")}</span>
                            <input
                                type="text"
                                {...register("phoneNumber")}
                                readOnly={!isEditing}

                                className="border rounded-lg px-3 py-2 text-sm w-full"
                            />
                        </div>

                        {errors.phoneNumber && (
                            <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
                        )}

                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={updateProfileMutation.isPending}
                                className="flex items-center justify-center gap-3 h-12 w-full max-w-65 px-4 bg-primary text-primary-foreground
              rounded-lg hover:bg-primary/90 transition-colors duration-300 "                            >
                                {updateProfileMutation.isPending ? t("saving") : isEditing ? t("saveChanges") : t("changeProfile")}
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </AuthGuard>
    );

}

export default Profile;
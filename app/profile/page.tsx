"use client"
import { FaUserCircle } from "react-icons/fa";
import { getMyself, updateUserProfile } from "../../api/requests";
import { useEffect, useState } from "react";
import AuthGuard from "@/components/layout/AuthGuard";
import { useQuery } from "@tanstack/react-query";


function Profile() {

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [count, setCount] = useState(0)

    const {data, error, isPending, isError} = useQuery({
    queryKey: ["Myself"],
    queryFn: getMyself,
    retry: 3,
    retryDelay:2000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    })



    const [form, setForm] = useState({
        firstName: data?.firstName || "",
        lastName: data?.lastName??"",
        phoneNumber: data?.phoneNumber??""
    });

  
    

    // useEffect(() => {
    //     function loadProfile() {
    //         return getMyself().then((data) => {
    //             setForm({
    //                 firstName: data.firstName || "",
    //                 lastName: data.lastName || "",
    //                 phoneNumber: data.phoneNumber || ""
    //             });
    //         })
    //             .catch((error) => {
    //                 console.error("Failed to load profile", error);
    //             });
    //     }

    //     loadProfile();
    // }, []);

    const handleSave = async () => {
        console.log("handleSave isEditing", isEditing);
        if (!isEditing) {
            setIsEditing(true);
            return;
        }

        setIsSaving(true);
        try {
            await updateUserProfile(form);
            setIsEditing(false);
            window.location.reload();
        } catch (error) {
            console.error("Failed to update profile", error);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <AuthGuard>
            <div className="flex items-start justify-center bg-accent px-4 py-12.75">
                <div className="w-full max-w-md bg-background p-6 rounded-2xl shadow-lg border border-border">

                    <div className="flex flex-col items-center mb-6">
                        <FaUserCircle size={80} />
                        <h1 className="mt-2 text-lg font-semibold">{("myProfile")}</h1>
                    </div>

                    <div className="flex flex-col gap-1 mb-4">
                        <span className="text-sm text-chart-4">{("firstName")}</span>
                        <input
                            type="text"
                            value={form.firstName}
                            readOnly={!isEditing}
                            onChange={(e) =>
                                setForm((prev) => ({ ...prev, firstName: e.target.value }))
                            }
                            className="border rounded-lg px-3 py-2 text-sm w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-1 mb-4">
                        <span className="text-sm text-chart-3">{("lastName")}</span>
                        <input
                            type="text"
                            value={form.lastName}
                            readOnly={!isEditing}
                            onChange={(e) =>
                                setForm((prev) => ({ ...prev, lastName: e.target.value }))
                            }
                            className="border rounded-lg px-3 py-2 text-sm w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-1 mb-4">
                        <span className="text-sm text-chart-4">{("phoneNumber")}</span>
                        <input
                            type="text"
                            value={form.phoneNumber}
                            readOnly={!isEditing}
                            onChange={(e) =>
                                setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))
                            }
                            className="border rounded-lg px-3 py-2 text-sm w-full"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="w-60 h-11 bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition disabled:opacity-70"                    >
                            {isSaving ? ("saving") : isEditing ? ("saveChanges") : ("changeProfile")}
                        </button>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );

}

export default Profile;
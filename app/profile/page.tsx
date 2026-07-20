import { FaUserCircle } from "react-icons/fa";
import { getMyself, updateUserProfile } from "../api/requests";
import { useEffect, useState } from "react";


function Profile() {
    
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: ""
    });

    useEffect(() => {
        function loadProfile() {
            return getMyself().then((data) => {
                setForm({
                    firstName: data.firstName || "",
                    lastName: data.lastName || "",
                    phoneNumber: data.phoneNumber || ""
                });
            })
                .catch((error) => {
                    console.error("Failed to load profile", error);
                });
        }

        loadProfile();
    }, []);

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
        <div className="flex items-start justify-center bg-gray-50 px-4 py-12.75">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-gray-300">

                <div className="flex flex-col items-center mb-6">
                    <FaUserCircle size={80} />
                    <h1 className="mt-2 text-lg font-semibold">{t("myProfile")}</h1>
                </div>

                <div className="flex flex-col gap-1 mb-4">
                    <span className="text-sm text-gray-600">{t("firstName")}</span>
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
                    <span className="text-sm text-gray-600">{t("lastName")}</span>
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
                    <span className="text-sm text-gray-600">{t("phoneNumber")}</span>
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
                        className="w-60 h-11 bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition disabled:opacity-70"
                    >
                        {isSaving ? t("saving") : isEditing ? t("saveChanges") : t("changeProfile")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
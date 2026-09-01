"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import ReactCountryFlag from "react-country-flag";

import { useRouter } from "next/navigation";
import { useState } from "react";
function Languages() {

    const router = useRouter();
    const [locale, setLocale] = useState(() => {
        if (typeof document === "undefined") {
            return "en";
        }

        return document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith("locale="))
            ?.split("=")[1] ?? "en";
    });

    function handleLocaleChange(nextLocale: string) {
        document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
        setLocale(nextLocale);
        router.refresh();
    }

    return (
        <Select
            value={locale}
            onValueChange={handleLocaleChange}
        >
            <SelectTrigger className="w-35">
                <SelectValue />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="ro">
                    <div className="flex items-center gap-2">
                        <ReactCountryFlag countryCode="MD" svg />
                        Română
                    </div>
                </SelectItem>

                <SelectItem value="en">
                    <div className="flex items-center gap-2">
                        <ReactCountryFlag countryCode="US" svg />
                        English
                    </div>
                </SelectItem>

                <SelectItem value="de">
                    <div className="flex items-center gap-2">
                        <ReactCountryFlag countryCode="DE" svg />
                        Deutsch
                    </div>
                </SelectItem>

                <SelectItem value="pt">
                    <div className="flex items-center gap-2">
                        <ReactCountryFlag countryCode="PT" svg />
                        Português
                    </div>
                </SelectItem>

                <SelectItem value="ru">
                    <div className="flex items-center gap-2">
                        <ReactCountryFlag countryCode="RU" svg />
                        Русский
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )

}

export default Languages
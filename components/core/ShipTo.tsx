import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "../../components/ui/select";
import { MapPin } from "lucide-react";
import ReactCountryFlag from "react-country-flag";


const countries = [
    { code: "US", translationKey: "unitedStates" },
    { code: "DE", translationKey: "germany" },
    { code: "BR", translationKey: "brazil" },
    { code: "RU", translationKey: "russia" },
    { code: "MD", translationKey: "moldova" },
];

function ShipTo() {
    const [selected, setSelected] = useState("DE");
    const current = countries.find((c) => c.code === selected);


    return (
        <div className="flex items-center gap-2">
            <MapPin size={16} className="text-background shrink-0" />

            <span className="text-sm text-background whitespace-nowrap">
                {('shipTo')}
            </span>

            <Select value={selected} onValueChange={setSelected}>
                <SelectTrigger className="h-auto w-auto p-0 border-0 shadow-none  focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
                    <span className="text-base font-medium text-foreground flex items-center gap-1">
                        {current?.code}
                        <ReactCountryFlag
                            countryCode={current?.code ?? "DE"}
                            svg
                            className="ml-1 h-5 w-7 object-contain" />
                    </span>
                </SelectTrigger>

                <SelectContent className="bg-background text-foreground border-border shadow-lg rounded-lg">
                    {countries.map((country) => (
                        <SelectItem
                            key={country.code}
                            value={country.code}
                            className="h-9 cursor-pointer text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <span className="flex items-center gap-2">
                                <ReactCountryFlag
                                    countryCode={country.code}
                                    svg
                                    className="h-5 w-7 object-contain" />
                                <span>{country.translationKey}</span>
                            </span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export default ShipTo;
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import ReactCountryFlag from "react-country-flag";


function Languages() {
      

    return (
        <Select>
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
import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ro", "de", "pt", "ru"] as const;

export default getRequestConfig(async () => {
  const store = await cookies();

  const cookieLocale = store.get("locale")?.value;

  const locale =
    locales.find((supportedLocale) => supportedLocale === cookieLocale) ?? "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

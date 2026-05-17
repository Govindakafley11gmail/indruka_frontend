"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export interface Country {
  name: string;
  callingCode: string;
  flag: string;
}

export function useCallingCodes() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flags")
      .then((r) => r.json())
      .then((data) => {
        const formatted: Country[] = data
          .map((c: any) => ({
            name: c.name.common as string,
            callingCode:
              c.idd?.root && c.idd?.suffixes?.length
                ? `${c.idd.root}${c.idd.suffixes[0]}`
                : null,
            flag: c.flags?.svg as string,
          }))
          .filter((c: Country) => Boolean(c.callingCode))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
        setCountries(formatted);
      })
      .finally(() => setLoading(false));
  }, []);

  // Detect country from a phone number string (longest code match wins)
  function detectCountry(phoneValue: string): Country | null {
    const digits = phoneValue.replace(/[^\d]/g, "");
    if (!digits) return null;

    const sorted = [...countries].sort(
      (a, b) => b.callingCode.length - a.callingCode.length
    );

    for (const country of sorted) {
      const codeDigits = country.callingCode.replace(/[^\d]/g, "");
      if (digits.startsWith(codeDigits)) return country;
    }
    return null;
  }

  return { countries, loading, detectCountry };
}
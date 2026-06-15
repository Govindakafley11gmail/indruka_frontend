"use client"

export interface Country {
  name: string;
  callingCode: string;
  flag: string;
}

const COUNTRIES: Country[] = [
  { name: "Afghanistan", callingCode: "+93", flag: "https://flagcdn.com/w40/af.png" },
  { name: "Albania", callingCode: "+355", flag: "https://flagcdn.com/w40/al.png" },
  { name: "Algeria", callingCode: "+213", flag: "https://flagcdn.com/w40/dz.png" },
  { name: "Argentina", callingCode: "+54", flag: "https://flagcdn.com/w40/ar.png" },
  { name: "Australia", callingCode: "+61", flag: "https://flagcdn.com/w40/au.png" },
  { name: "Austria", callingCode: "+43", flag: "https://flagcdn.com/w40/at.png" },
  { name: "Bangladesh", callingCode: "+880", flag: "https://flagcdn.com/w40/bd.png" },
  { name: "Belgium", callingCode: "+32", flag: "https://flagcdn.com/w40/be.png" },
  { name: "Bhutan", callingCode: "+975", flag: "https://flagcdn.com/w40/bt.png" },
  { name: "Brazil", callingCode: "+55", flag: "https://flagcdn.com/w40/br.png" },
  { name: "Canada", callingCode: "+1", flag: "https://flagcdn.com/w40/ca.png" },
  { name: "China", callingCode: "+86", flag: "https://flagcdn.com/w40/cn.png" },
  { name: "Denmark", callingCode: "+45", flag: "https://flagcdn.com/w40/dk.png" },
  { name: "Egypt", callingCode: "+20", flag: "https://flagcdn.com/w40/eg.png" },
  { name: "Finland", callingCode: "+358", flag: "https://flagcdn.com/w40/fi.png" },
  { name: "France", callingCode: "+33", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Germany", callingCode: "+49", flag: "https://flagcdn.com/w40/de.png" },
  { name: "Greece", callingCode: "+30", flag: "https://flagcdn.com/w40/gr.png" },
  { name: "Hong Kong", callingCode: "+852", flag: "https://flagcdn.com/w40/hk.png" },
  { name: "India", callingCode: "+91", flag: "https://flagcdn.com/w40/in.png" },
  { name: "Indonesia", callingCode: "+62", flag: "https://flagcdn.com/w40/id.png" },
  { name: "Iran", callingCode: "+98", flag: "https://flagcdn.com/w40/ir.png" },
  { name: "Ireland", callingCode: "+353", flag: "https://flagcdn.com/w40/ie.png" },
  { name: "Israel", callingCode: "+972", flag: "https://flagcdn.com/w40/il.png" },
  { name: "Italy", callingCode: "+39", flag: "https://flagcdn.com/w40/it.png" },
  { name: "Japan", callingCode: "+81", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "Jordan", callingCode: "+962", flag: "https://flagcdn.com/w40/jo.png" },
  { name: "Kenya", callingCode: "+254", flag: "https://flagcdn.com/w40/ke.png" },
  { name: "South Korea", callingCode: "+82", flag: "https://flagcdn.com/w40/kr.png" },
  { name: "Kuwait", callingCode: "+965", flag: "https://flagcdn.com/w40/kw.png" },
  { name: "Malaysia", callingCode: "+60", flag: "https://flagcdn.com/w40/my.png" },
  { name: "Maldives", callingCode: "+960", flag: "https://flagcdn.com/w40/mv.png" },
  { name: "Mexico", callingCode: "+52", flag: "https://flagcdn.com/w40/mx.png" },
  { name: "Myanmar", callingCode: "+95", flag: "https://flagcdn.com/w40/mm.png" },
  { name: "Nepal", callingCode: "+977", flag: "https://flagcdn.com/w40/np.png" },
  { name: "Netherlands", callingCode: "+31", flag: "https://flagcdn.com/w40/nl.png" },
  { name: "New Zealand", callingCode: "+64", flag: "https://flagcdn.com/w40/nz.png" },
  { name: "Nigeria", callingCode: "+234", flag: "https://flagcdn.com/w40/ng.png" },
  { name: "Norway", callingCode: "+47", flag: "https://flagcdn.com/w40/no.png" },
  { name: "Oman", callingCode: "+968", flag: "https://flagcdn.com/w40/om.png" },
  { name: "Pakistan", callingCode: "+92", flag: "https://flagcdn.com/w40/pk.png" },
  { name: "Philippines", callingCode: "+63", flag: "https://flagcdn.com/w40/ph.png" },
  { name: "Poland", callingCode: "+48", flag: "https://flagcdn.com/w40/pl.png" },
  { name: "Portugal", callingCode: "+351", flag: "https://flagcdn.com/w40/pt.png" },
  { name: "Qatar", callingCode: "+974", flag: "https://flagcdn.com/w40/qa.png" },
  { name: "Romania", callingCode: "+40", flag: "https://flagcdn.com/w40/ro.png" },
  { name: "Russia", callingCode: "+7", flag: "https://flagcdn.com/w40/ru.png" },
  { name: "Saudi Arabia", callingCode: "+966", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "Singapore", callingCode: "+65", flag: "https://flagcdn.com/w40/sg.png" },
  { name: "South Africa", callingCode: "+27", flag: "https://flagcdn.com/w40/za.png" },
  { name: "Spain", callingCode: "+34", flag: "https://flagcdn.com/w40/es.png" },
  { name: "Sri Lanka", callingCode: "+94", flag: "https://flagcdn.com/w40/lk.png" },
  { name: "Sweden", callingCode: "+46", flag: "https://flagcdn.com/w40/se.png" },
  { name: "Switzerland", callingCode: "+41", flag: "https://flagcdn.com/w40/ch.png" },
  { name: "Taiwan", callingCode: "+886", flag: "https://flagcdn.com/w40/tw.png" },
  { name: "Thailand", callingCode: "+66", flag: "https://flagcdn.com/w40/th.png" },
  { name: "Turkey", callingCode: "+90", flag: "https://flagcdn.com/w40/tr.png" },
  { name: "UAE", callingCode: "+971", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Ukraine", callingCode: "+380", flag: "https://flagcdn.com/w40/ua.png" },
  { name: "United Kingdom", callingCode: "+44", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "United States", callingCode: "+1", flag: "https://flagcdn.com/w40/us.png" },
  { name: "Vietnam", callingCode: "+84", flag: "https://flagcdn.com/w40/vn.png" },
].sort((a, b) => a.name.localeCompare(b.name));

export function useCallingCodes() {
  function detectCountry(phoneValue: string): Country | null {
    const digits = phoneValue.replace(/[^\d]/g, "");
    if (!digits) return null;

    const sorted = [...COUNTRIES].sort(
      (a, b) => b.callingCode.length - a.callingCode.length
    );

    for (const country of sorted) {
      const codeDigits = country.callingCode.replace(/[^\d]/g, "");
      if (digits.startsWith(codeDigits)) return country;
    }
    return null;
  }

  return { countries: COUNTRIES, loading: false, detectCountry };
}
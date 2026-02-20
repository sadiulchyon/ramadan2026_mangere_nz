export interface PrayerDay {
  hijriDay: number;
  gregorianDate: string;
  dayName: string;
  sehriEnds: string;
  fajrAdhan: string;
  fajrJamaat: string;
  sunrise: string;
  dhuhrStart: string;
  dhuhrJamaat: string;
  asrStart: string;
  asrJamaat: string;
  iftar: string;
  maghribJamaat: string;
  ishaStart: string;
  ishaJamaat: string;
}

// Airport Masjid - Auckland, New Zealand
// The Islamic Educational & Dawah (IED) Trust
// 91 Westney Road, Mangere, Auckland
// 2026 Ramadhaan 1447 Salaat Timetable
export const ramadan2026Data: PrayerDay[] = [
  { hijriDay: 1, gregorianDate: "19/2", dayName: "Thu", sehriEnds: "5.18", fajrAdhan: "5.23", fajrJamaat: "5.38", sunrise: "6.56", dhuhrStart: "1.35", dhuhrJamaat: "2.00", asrStart: "6.19", asrJamaat: "6.50", iftar: "8.18", maghribJamaat: "8.31", ishaStart: "9.47", ishaJamaat: "9.57" },
  { hijriDay: 2, gregorianDate: "20/2", dayName: "Fri", sehriEnds: "5.19", fajrAdhan: "5.24", fajrJamaat: "5.39", sunrise: "6.57", dhuhrStart: "1.35", dhuhrJamaat: "2.00", asrStart: "6.18", asrJamaat: "6.50", iftar: "8.17", maghribJamaat: "8.32", ishaStart: "9.45", ishaJamaat: "9.55" },
  { hijriDay: 3, gregorianDate: "21/2", dayName: "Sat", sehriEnds: "5.20", fajrAdhan: "5.25", fajrJamaat: "5.40", sunrise: "6.58", dhuhrStart: "1.35", dhuhrJamaat: "2.00", asrStart: "6.17", asrJamaat: "6.50", iftar: "8.16", maghribJamaat: "8.31", ishaStart: "9.43", ishaJamaat: "9.53" },
  { hijriDay: 4, gregorianDate: "22/2", dayName: "Sun", sehriEnds: "5.21", fajrAdhan: "5.26", fajrJamaat: "5.41", sunrise: "6.59", dhuhrStart: "1.35", dhuhrJamaat: "2.00", asrStart: "6.17", asrJamaat: "6.50", iftar: "8.14", maghribJamaat: "8.30", ishaStart: "9.42", ishaJamaat: "9.52" },
  { hijriDay: 5, gregorianDate: "23/2", dayName: "Mon", sehriEnds: "5.23", fajrAdhan: "5.28", fajrJamaat: "5.43", sunrise: "7.00", dhuhrStart: "1.34", dhuhrJamaat: "2.00", asrStart: "6.16", asrJamaat: "6.50", iftar: "8.13", maghribJamaat: "8.29", ishaStart: "9.40", ishaJamaat: "9.50" },
  { hijriDay: 6, gregorianDate: "24/2", dayName: "Tue", sehriEnds: "5.24", fajrAdhan: "5.29", fajrJamaat: "5.44", sunrise: "7.01", dhuhrStart: "1.34", dhuhrJamaat: "2.00", asrStart: "6.15", asrJamaat: "6.50", iftar: "8.12", maghribJamaat: "8.27", ishaStart: "9.39", ishaJamaat: "9.49" },
  { hijriDay: 7, gregorianDate: "25/2", dayName: "Wed", sehriEnds: "5.25", fajrAdhan: "5.30", fajrJamaat: "5.45", sunrise: "7.02", dhuhrStart: "1.34", dhuhrJamaat: "2.00", asrStart: "6.14", asrJamaat: "6.50", iftar: "8.10", maghribJamaat: "8.26", ishaStart: "9.37", ishaJamaat: "9.47" },
  { hijriDay: 8, gregorianDate: "26/2", dayName: "Thu", sehriEnds: "5.27", fajrAdhan: "5.32", fajrJamaat: "5.47", sunrise: "7.03", dhuhrStart: "1.34", dhuhrJamaat: "2.00", asrStart: "6.13", asrJamaat: "6.50", iftar: "8.09", maghribJamaat: "8.25", ishaStart: "9.36", ishaJamaat: "9.46" },
  { hijriDay: 9, gregorianDate: "27/2", dayName: "Fri", sehriEnds: "5.28", fajrAdhan: "5.33", fajrJamaat: "5.48", sunrise: "7.04", dhuhrStart: "1.34", dhuhrJamaat: "2.00", asrStart: "6.12", asrJamaat: "6.40", iftar: "8.08", maghribJamaat: "8.23", ishaStart: "9.34", ishaJamaat: "9.44" },
  { hijriDay: 10, gregorianDate: "28/2", dayName: "Sat", sehriEnds: "5.29", fajrAdhan: "5.34", fajrJamaat: "5.49", sunrise: "7.05", dhuhrStart: "1.34", dhuhrJamaat: "2.00", asrStart: "6.11", asrJamaat: "6.40", iftar: "8.06", maghribJamaat: "8.22", ishaStart: "9.32", ishaJamaat: "9.42" },
  { hijriDay: 11, gregorianDate: "1/3", dayName: "Sun", sehriEnds: "5.30", fajrAdhan: "5.35", fajrJamaat: "5.50", sunrise: "7.06", dhuhrStart: "1.34", dhuhrJamaat: "2.00", asrStart: "6.10", asrJamaat: "6.40", iftar: "8.05", maghribJamaat: "8.21", ishaStart: "9.30", ishaJamaat: "9.40" },
  { hijriDay: 12, gregorianDate: "2/3", dayName: "Mon", sehriEnds: "5.32", fajrAdhan: "5.37", fajrJamaat: "5.52", sunrise: "7.07", dhuhrStart: "1.33", dhuhrJamaat: "2.00", asrStart: "6.09", asrJamaat: "6.40", iftar: "8.04", maghribJamaat: "8.19", ishaStart: "9.29", ishaJamaat: "9.39" },
  { hijriDay: 13, gregorianDate: "3/3", dayName: "Tue", sehriEnds: "5.33", fajrAdhan: "5.38", fajrJamaat: "5.53", sunrise: "7.08", dhuhrStart: "1.33", dhuhrJamaat: "2.00", asrStart: "6.08", asrJamaat: "6.40", iftar: "8.02", maghribJamaat: "8.17", ishaStart: "9.27", ishaJamaat: "9.37" },
  { hijriDay: 14, gregorianDate: "4/3", dayName: "Wed", sehriEnds: "5.35", fajrAdhan: "5.40", fajrJamaat: "5.55", sunrise: "7.09", dhuhrStart: "1.33", dhuhrJamaat: "2.00", asrStart: "6.07", asrJamaat: "6.40", iftar: "8.01", maghribJamaat: "8.16", ishaStart: "9.26", ishaJamaat: "9.36" },
  { hijriDay: 15, gregorianDate: "5/3", dayName: "Thu", sehriEnds: "5.36", fajrAdhan: "5.41", fajrJamaat: "5.56", sunrise: "7.10", dhuhrStart: "1.33", dhuhrJamaat: "2.00", asrStart: "6.06", asrJamaat: "6.40", iftar: "8.00", maghribJamaat: "8.15", ishaStart: "9.24", ishaJamaat: "9.34" },
  { hijriDay: 16, gregorianDate: "6/3", dayName: "Fri", sehriEnds: "5.37", fajrAdhan: "5.42", fajrJamaat: "5.57", sunrise: "7.11", dhuhrStart: "1.33", dhuhrJamaat: "2.00", asrStart: "6.05", asrJamaat: "6.30", iftar: "7.58", maghribJamaat: "8.13", ishaStart: "9.23", ishaJamaat: "9.33" },
  { hijriDay: 17, gregorianDate: "7/3", dayName: "Sat", sehriEnds: "5.38", fajrAdhan: "5.43", fajrJamaat: "5.58", sunrise: "7.12", dhuhrStart: "1.33", dhuhrJamaat: "2.00", asrStart: "6.04", asrJamaat: "6.30", iftar: "7.57", maghribJamaat: "8.12", ishaStart: "9.21", ishaJamaat: "9.31" },
  { hijriDay: 18, gregorianDate: "8/3", dayName: "Sun", sehriEnds: "5.40", fajrAdhan: "5.45", fajrJamaat: "6.00", sunrise: "7.13", dhuhrStart: "1.32", dhuhrJamaat: "2.00", asrStart: "6.03", asrJamaat: "6.30", iftar: "7.55", maghribJamaat: "8.10", ishaStart: "9.19", ishaJamaat: "9.29" },
  { hijriDay: 19, gregorianDate: "9/3", dayName: "Mon", sehriEnds: "5.41", fajrAdhan: "5.46", fajrJamaat: "6.01", sunrise: "7.14", dhuhrStart: "1.32", dhuhrJamaat: "2.00", asrStart: "6.02", asrJamaat: "6.30", iftar: "7.54", maghribJamaat: "8.09", ishaStart: "9.18", ishaJamaat: "9.28" },
  { hijriDay: 20, gregorianDate: "10/3", dayName: "Tue", sehriEnds: "5.42", fajrAdhan: "5.47", fajrJamaat: "6.02", sunrise: "7.15", dhuhrStart: "1.32", dhuhrJamaat: "2.00", asrStart: "6.01", asrJamaat: "6.30", iftar: "7.52", maghribJamaat: "8.07", ishaStart: "9.16", ishaJamaat: "9.26" },
  { hijriDay: 21, gregorianDate: "11/3", dayName: "Wed", sehriEnds: "5.43", fajrAdhan: "5.48", fajrJamaat: "6.03", sunrise: "7.16", dhuhrStart: "1.32", dhuhrJamaat: "2.00", asrStart: "5.59", asrJamaat: "6.30", iftar: "7.51", maghribJamaat: "8.06", ishaStart: "9.14", ishaJamaat: "9.24" },
  { hijriDay: 22, gregorianDate: "12/3", dayName: "Thu", sehriEnds: "5.44", fajrAdhan: "5.49", fajrJamaat: "6.04", sunrise: "7.17", dhuhrStart: "1.31", dhuhrJamaat: "2.00", asrStart: "5.58", asrJamaat: "6.30", iftar: "7.50", maghribJamaat: "8.05", ishaStart: "9.13", ishaJamaat: "9.23" },
  { hijriDay: 23, gregorianDate: "13/3", dayName: "Fri", sehriEnds: "5.45", fajrAdhan: "5.50", fajrJamaat: "6.05", sunrise: "7.17", dhuhrStart: "1.31", dhuhrJamaat: "2.00", asrStart: "5.57", asrJamaat: "6.20", iftar: "7.48", maghribJamaat: "8.03", ishaStart: "9.11", ishaJamaat: "9.21" },
  { hijriDay: 24, gregorianDate: "14/3", dayName: "Sat", sehriEnds: "5.46", fajrAdhan: "5.51", fajrJamaat: "6.06", sunrise: "7.18", dhuhrStart: "1.31", dhuhrJamaat: "2.00", asrStart: "5.56", asrJamaat: "6.20", iftar: "7.47", maghribJamaat: "8.02", ishaStart: "9.10", ishaJamaat: "9.20" },
  { hijriDay: 25, gregorianDate: "15/3", dayName: "Sun", sehriEnds: "5.47", fajrAdhan: "5.52", fajrJamaat: "6.07", sunrise: "7.19", dhuhrStart: "1.31", dhuhrJamaat: "2.00", asrStart: "5.55", asrJamaat: "6.20", iftar: "7.45", maghribJamaat: "8.00", ishaStart: "9.08", ishaJamaat: "9.18" },
  { hijriDay: 26, gregorianDate: "16/3", dayName: "Mon", sehriEnds: "5.48", fajrAdhan: "5.53", fajrJamaat: "6.08", sunrise: "7.20", dhuhrStart: "1.30", dhuhrJamaat: "2.00", asrStart: "5.54", asrJamaat: "6.20", iftar: "7.44", maghribJamaat: "7.59", ishaStart: "9.06", ishaJamaat: "9.16" },
  { hijriDay: 27, gregorianDate: "17/3", dayName: "Tue", sehriEnds: "5.49", fajrAdhan: "5.54", fajrJamaat: "6.09", sunrise: "7.21", dhuhrStart: "1.30", dhuhrJamaat: "2.00", asrStart: "5.52", asrJamaat: "6.20", iftar: "7.42", maghribJamaat: "7.57", ishaStart: "9.05", ishaJamaat: "9.15" },
  { hijriDay: 28, gregorianDate: "18/3", dayName: "Wed", sehriEnds: "5.50", fajrAdhan: "5.55", fajrJamaat: "6.10", sunrise: "7.22", dhuhrStart: "1.29", dhuhrJamaat: "2.00", asrStart: "5.51", asrJamaat: "6.20", iftar: "7.41", maghribJamaat: "7.56", ishaStart: "9.03", ishaJamaat: "9.13" },
  { hijriDay: 29, gregorianDate: "19/3", dayName: "Thu", sehriEnds: "5.51", fajrAdhan: "5.56", fajrJamaat: "6.11", sunrise: "7.23", dhuhrStart: "1.29", dhuhrJamaat: "2.00", asrStart: "5.50", asrJamaat: "6.10", iftar: "7.39", maghribJamaat: "7.54", ishaStart: "9.02", ishaJamaat: "9.12" },
  { hijriDay: 30, gregorianDate: "20/3", dayName: "Fri", sehriEnds: "5.52", fajrAdhan: "5.57", fajrJamaat: "6.12", sunrise: "7.24", dhuhrStart: "1.29", dhuhrJamaat: "2.00", asrStart: "5.49", asrJamaat: "6.10", iftar: "7.38", maghribJamaat: "7.53", ishaStart: "9.00", ishaJamaat: "9.10" },
];

export const additionalInfo = {
  niyatForFasting: "WA BISAUMI GHADIN NAWAITU MIN SHAHRI RAMADHAAN",
  duaForBreakingFast: "ALLAHUMMA INNI LAKA SUMTU WA BIKA AAMANTU WA ALAIKA TAWAKKALTU WA ALA RIZQIKA AFTARTU",
  fitrana: "$5.00 PER PERSON",
  quranKhatam: "27th NIGHT",
  eidNote: "Eid al-Fitr - Check with Airport Masjid for Eid prayer times"
};

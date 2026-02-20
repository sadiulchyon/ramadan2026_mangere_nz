# Airport Masjid - Ramadhaan 1447 Prayer Times

A simple, mobile-friendly web app for the Airport Masjid community in Auckland, New Zealand to easily view Ramadhaan prayer times, Sehri end times, and Iftar times.

## Features

- **Today's View** - Automatically shows the current Ramadhaan day
- **Sehri & Iftar Times** - Prominently displayed for quick reference
- **All 5 Daily Prayers** - Complete schedule with Jamaat times
- **Rotating Quran Ayats** - English translations with 8-second intervals
- **Easy Navigation** - Jump to any day (1-30) with one click
- **Important Information** - Niyat, Dua, Fitrana, Qur'an Khatam
- **Eid al-Fitr Info** - Eid day reminder

## Prayer Schedule

| Event | Date |
|-------|------|
| Ramadhaan 1 (First Fast) | Thursday, 19 Feb 2026 |
| Ramadhaan 30 (Last Fast) | Friday, 20 Mar 2026 |
| Eid al-Fitr | Saturday, 21 Mar 2026 |

**Source:** Airport Masjid - The Islamic Educational & Dawah (IED) Trust

## Location

**Airport Masjid**
91 Westney Road, Mangere, Auckland, New Zealand

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/airport-masjid-ramadhaan-1447.git
cd airport-masjid-ramadhaan-1447
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Netlify (Recommended)

1. Push this repo to GitHub
2. Connect your GitHub repo to Netlify
3. Build settings are pre-configured in `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy!

Netlify will auto-deploy whenever you push to your main branch.

## Customization

### Prayer Times Data

Edit `src/data/prayerTimes.ts` to update prayer times.

### Quran Ayats

Edit `src/data/quranAyats.ts` to add/remove verses (English only).

### Rotation Speed

Edit `src/App.tsx` - find `8000` (8 seconds) and change to your preferred milliseconds.

## License

Free to use and modify for your community!

---

**Ramadhaan Mubarak!** 🌙

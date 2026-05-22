

export const CAFES = [
  {
    id: "kopi-sudut",
    name: "Kopi Sudut",
    area: "Menteng, Jakpus",
    hours: "08:00 – 22:00",
    openHour: 8, closeHour: 22,
    crowd: "Quiet", crowdUpdatedMinsAgo: 5,
    facilities: { wifi: true, plugs: true, quiet: true },
    wifiMbps: 75, plugRatio: "1 plug / table",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80",
    lat: -6.195, lng: 106.83,
  },
  {
    id: "ruang-tenang",
    name: "Ruang Tenang Coffee",
    area: "Kemang, Jaksel",
    hours: "07:00 – 23:00",
    openHour: 7, closeHour: 23,
    crowd: "Moderate", crowdUpdatedMinsAgo: 12,
    facilities: { wifi: true, plugs: true, quiet: false },
    wifiMbps: 50, plugRatio: "1 plug / 2 tables",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    lat: -6.26, lng: 106.81,
  },
  {
    id: "fokus-bdg",
    name: "Fokus Coffee Lab",
    area: "BSD, Tangerang",
    hours: "09:00 – 21:00",
    openHour: 9, closeHour: 21,
    crowd: "Busy", crowdUpdatedMinsAgo: 3,
    facilities: { wifi: true, plugs: false, quiet: true },
    wifiMbps: 100, plugRatio: "1 plug / 4 tables",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    lat: -6.30, lng: 106.66,
  },
  {
    id: "kerja-depok",
    name: "Kerja Bareng Cafe",
    area: "Margonda, Depok",
    hours: "08:00 – 24:00",
    openHour: 8, closeHour: 24,
    crowd: "Quiet", crowdUpdatedMinsAgo: 8,
    facilities: { wifi: true, plugs: true, quiet: true },
    wifiMbps: 60, plugRatio: "1 plug / table",
    image: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=800&q=80",
    lat: -6.38, lng: 106.83,
  },
  {
    id: "deep-bekasi",
    name: "Deep Work House",
    area: "Bekasi Barat",
    hours: "10:00 – 22:00",
    openHour: 10, closeHour: 22,
    crowd: "Moderate", crowdUpdatedMinsAgo: 20,
    facilities: { wifi: true, plugs: true, quiet: true },
    wifiMbps: 80, plugRatio: "1 plug / table",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80",
    lat: -6.24, lng: 107.00,
  },
  {
    id: "studi-bogor",
    name: "Studi Kopi",
    area: "Bogor Tengah",
    hours: "07:00 – 20:00",
    openHour: 7, closeHour: 20,
    crowd: "Quiet", crowdUpdatedMinsAgo: 2,
    facilities: { wifi: true, plugs: true, quiet: false },
    wifiMbps: 40, plugRatio: "1 plug / 2 tables",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
    lat: -6.59, lng: 106.79,
  },
];

export function getCafe(id) {
  return CAFES.find((c) => c.id === id);
}

export const DEMO_HOUR = 20;
export const DEMO_MIN = 15;

export function getStatus(cafe) {
  const nowMins = DEMO_HOUR * 60 + DEMO_MIN;
  const openMins = cafe.openHour * 60;
  const closeMins = cafe.closeHour * 60;
  const isOpen = nowMins >= openMins && nowMins < closeMins;
  const minsToClose = closeMins - nowMins;
  const closingSoon = isOpen && minsToClose <= 60;
  return { isOpen, minsToClose, closingSoon };
}

export const CROWD_COLOR = {
  Quiet: "bg-crowd-low/20 text-crowd-low border-crowd-low/30",
  Moderate: "bg-crowd-mid/20 text-crowd-mid border-crowd-mid/40",
  Busy: "bg-crowd-high/15 text-crowd-high border-crowd-high/30",
};

export const CROWD_DOT = {
  Quiet: "bg-crowd-low",
  Moderate: "bg-crowd-mid",
  Busy: "bg-crowd-high",
};

export const CROWD_VAR = {
  Quiet: "var(--crowd-low)",
  Moderate: "var(--crowd-mid)",
  Busy: "var(--crowd-high)",
};

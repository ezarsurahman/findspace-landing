"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Bookmark,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Clock,
  GraduationCap,
  MapPin,
  Repeat,
  Search,
  Star,
  TrendingUp,
  Users,
  VolumeX,
  Wifi,
  Zap,
} from "lucide-react";
import { CAFES } from "@/lib/cafes";

const SHADOW_SOFT =
  "shadow-[0_4px_16px_-4px_rgba(62,37,18,0.08),0_2px_6px_-2px_rgba(62,37,18,0.06)]";
const SHADOW_CARD =
  "shadow-[0_6px_24px_-8px_rgba(62,37,18,0.12)]";

const CROWD_STYLES = {
  Quiet: "bg-[#2f8f5b1a] text-[#2f8f5b] border-[#2f8f5b33]",
  Moderate: "bg-[#cf7f2f1a] text-[#cf7f2f] border-[#cf7f2f40]",
  Busy: "bg-[#c2423426] text-[#c24234] border-[#c242344d]",
};

const CROWD_DOT_STYLES = {
  Quiet: "bg-[#2f8f5b]",
  Moderate: "bg-[#cf7f2f]",
  Busy: "bg-[#c24234]",
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offsets = sectionRefs.current.filter(Boolean).map((el) => el.offsetTop);
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = offsets.length - 1; i >= 0; i -= 1) {
        if (scrollPos >= offsets[i]) {
          setActiveSection(i);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-dvh bg-[#fbf7f1] text-[#1d1712]">
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#fbf7f1cc] backdrop-blur-xl " + SHADOW_SOFT : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-98.25 items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-[#cf7f2f] text-[#fffaf4]">
              <Search className="size-4" />
            </div>
            <span className="text-base font-bold text-[#5e3822]">FindSpace</span>
          </div>
          <button
            type="button"
            onClick={() => scrollTo(4)}
            className="rounded-full bg-[#cf7f2f] px-4 py-1.5 text-xs font-semibold text-[#fffaf4] transition hover:bg-[#cf7f2fe6]"
          >
            Get Started
          </button>
        </div>
      </nav>

      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="relative overflow-hidden px-5 pb-10 pt-28"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#cf7f2f1a] blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-40 size-64 rounded-full bg-[#d8f0ff4d] blur-3xl" />

        <div className="relative mx-auto max-w-98.25">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#cf7f2f33] bg-[#cf7f2f1a] px-3 py-1 text-[11px] font-semibold text-[#cf7f2f]">
            <Star className="size-3 fill-[#cf7f2f] text-[#cf7f2f]" />
            Now available in Jabodetabek
          </span>

          <h1 className="mt-3 text-[2.1rem] font-bold leading-[1.15] tracking-tight text-[#5e3822]">
            Stop guessing cafés. <span className="text-[#cf7f2f]">FindSpace</span> knows where to work.
          </h1>

          <p className="mt-4 text-[15px] leading-relaxed text-[#7d7368]">
            Find productive cafés with real-time crowd information, verified work facilities, and smart recommendations designed for studying and working.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link
              href="/auth"
              className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#cf7f2f] px-6 py-3.5 text-sm font-semibold text-[#fffaf4] transition hover:scale-[1.02] active:scale-[0.98] ${SHADOW_CARD}`}
            >
              Find Your Workspace
              <ChevronRight className="size-4" />
            </Link>
            <button
              type="button"
              onClick={() => scrollTo(2)}
              className="rounded-2xl border border-[#e8ded1] bg-[#fffaf4] px-5 py-3.5 text-sm font-medium text-[#1d1712] transition hover:bg-[#efe3d4]"
            >
              Learn more
            </button>
          </div>

          <div className="mt-8 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="px-5 py-14"
      >
        <div className="mx-auto max-w-98.25">
          <h2 className="text-2xl font-bold leading-snug text-[#5e3822]">
            Finding the right café <span className="text-[#cf7f2f]">shouldn&apos;t</span> be trial and error.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <PainCard icon={<Users className="size-5 text-[#c24234]" />} title="Too crowded" text="Arrive and find every seat taken." />
            <PainCard icon={<Wifi className="size-5 text-[#c24234]" />} title="WiFi dies" text="Unreliable connection mid-meeting." />
            <PainCard icon={<Zap className="size-5 text-[#c24234]" />} title="No outlets" text="Laptop battery running on fumes." />
            <PainCard icon={<VolumeX className="size-5 text-[#c24234]" />} title="Too noisy" text="Can’t focus with loud chatter." />
            <PainCard icon={<Repeat className="size-5 text-[#c24234]" />} title="Café hopping" text="Wasting time moving around." className="col-span-2" />
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="px-5 py-14"
      >
        <div className="mx-auto max-w-98.25">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#cf7f2f]">Features</span>
          <h2 className="mt-2 text-2xl font-bold text-[#5e3822]">Everything you need to stay productive</h2>

          <div className="mt-8 space-y-3">
            <FeatureRow icon={<Users className="size-5 text-[#cf7f2f]" />} title="Real-Time Crowd Level" desc="See how crowded a café is before you even leave home." />
            <FeatureRow icon={<Search className="size-5 text-[#cf7f2f]" />} title="Smart Café Discovery" desc="Find cafés based on your location and workspace needs." />
            <FeatureRow icon={<CheckCircle2 className="size-5 text-[#cf7f2f]" />} title="Productivity Labels" desc="Quiet zones, stable WiFi, plenty of sockets, comfy seats." />
            <FeatureRow icon={<Bookmark className="size-5 text-[#cf7f2f]" />} title="Saved Collection" desc="Bookmark favorites and build your personal workspace list." />
            <FeatureRow icon={<Bell className="size-5 text-[#cf7f2f]" />} title="Live Notifications" desc="Get alerted when your saved cafés become available." />
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className="relative overflow-hidden px-5 py-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#cf7f2f0d] to-transparent" />
        <div className="relative mx-auto max-w-98.25">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#cf7f2f]">Validation</span>
          <h2 className="mt-2 text-2xl font-bold text-[#5e3822]">Built for the growing work-from-café culture</h2>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <StatCard icon={<Users className="size-5 text-[#cf7f2f]" />} value="11.5M" label="Potential users in Jabodetabek" />
            <StatCard icon={<TrendingUp className="size-5 text-[#cf7f2f]" />} value="30-40%" label="Hybrid work adoption rate" />
            <StatCard icon={<GraduationCap className="size-5 text-[#cf7f2f]" />} value="Students" label="Primary user segment" />
            <StatCard icon={<Briefcase className="size-5 text-[#cf7f2f]" />} value="Remote" label="Worker-friendly ecosystem" />
          </div>

          <div className={`mt-6 space-y-3 rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-5 ${SHADOW_SOFT}`}>
            {[
              "Targeting students & hybrid workers in Jabodetabek",
              "Based on increasing hybrid work trends",
              "Productivity-focused café ecosystem",
              "Real-time crowd visibility & verified facilities",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#2f8f5b]" />
                <span className="text-sm leading-relaxed text-[#1d1712]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className="relative overflow-hidden px-5 py-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#cf7f2f1a] via-[#fbf7f1] to-[#fbf7f1]" />
        <div className="pointer-events-none absolute left-1/2 -top-20 size-80 -translate-x-1/2 rounded-full bg-[#cf7f2f1a] blur-3xl" />

        <div className="relative mx-auto max-w-98.25 text-center">
          <h2 className="text-[1.75rem] font-bold leading-snug text-[#5e3822]">Your next productive workspace starts here.</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#7d7368]">
            Join FindSpace and discover cafés that truly support your productivity.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/auth"
              className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#cf7f2f] px-8 py-4 text-base font-semibold text-[#fffaf4] transition hover:scale-[1.02] active:scale-[0.98] ${SHADOW_CARD}`}
            >
              Find Your Workspace
              <ChevronRight className="size-5" />
            </Link>
          </div>

          <p className="mt-4 text-xs text-[#7d7368]">Free to use. No credit card required.</p>
        </div>
      </section>

      <footer className="border-t border-[#e8ded1] px-5 py-8">
        <div className="mx-auto max-w-98.25 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-[#cf7f2f] text-[#fffaf4]">
              <Search className="size-3.5" />
            </div>
            <span className="text-sm font-bold text-[#5e3822]">FindSpace</span>
          </div>
          <p className="mt-2 text-xs text-[#7d7368]">Discover productive cafés across Jabodetabek.</p>
          <p className="mt-4 text-[10px] text-[#7d7368]">&copy; 2026 FindSpace. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e8ded1] bg-[#fbf7f1f2] p-4 backdrop-blur-xl sm:left-1/2 sm:max-w-98.25 sm:-translate-x-1/2">
        <Link
          href="/auth"
          className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-[#cf7f2f] py-3.5 text-sm font-semibold text-[#fffaf4] transition hover:bg-[#cf7f2fe6] active:scale-[0.98] ${SHADOW_CARD}`}
        >
          Find Your Workspace
          <ChevronRight className="size-4" />
        </Link>
      </div>

      <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`size-2 rounded-full transition-all ${
              activeSection === i ? "scale-125 bg-[#cf7f2f]" : "bg-[#e8ded1] hover:bg-[#7d7368]"
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  const cafes = CAFES.slice(0, 2);

  return (
    <div className="relative w-65 shrink-0">
      <div className={`relative overflow-hidden rounded-4xl border-[6px] border-[#5e3822cc] bg-[#fbf7f1] shadow-2xl`}>
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#5e3822cc]" />

        <div className="px-3 pb-3 pt-7">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#cf7f2f]" />
              <span className="text-[10px] font-semibold text-[#5e3822]">Menteng, Jakpus</span>
            </div>
            <span className="rounded-full bg-[#cf7f2f1a] px-2 py-0.5 text-[9px] font-semibold text-[#cf7f2f]">Open</span>
          </div>

          <div className="mb-3 flex items-center gap-2 rounded-xl border border-[#e8ded1] bg-[#f3ebe1] px-3 py-2">
            <Search className="size-3 text-[#7d7368]" />
            <span className="text-[10px] text-[#7d7368]">Search cafés...</span>
          </div>

          <div className="space-y-2.5">
            {cafes.map((cafe) => (
              <div key={cafe.id} className={`overflow-hidden rounded-xl border border-[#e8ded1] bg-[#fffaf4] ${SHADOW_SOFT}`}>
                <div className="relative h-20 w-full overflow-hidden">
                  <Image src={cafe.image} alt={cafe.name} fill sizes="260px" className="object-cover" />
                  <div className={`absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[8px] font-semibold backdrop-blur-md ${CROWD_STYLES[cafe.crowd]}`}>
                    <span className={`size-1 rounded-full ${CROWD_DOT_STYLES[cafe.crowd]}`} />
                    {cafe.crowd}
                  </div>
                </div>

                <div className="space-y-1 p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#1d1712]">{cafe.name}</span>
                    <CheckCircle2 className="size-3 text-[#cf7f2f]" />
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-[#7d7368]">
                    <span className="inline-flex items-center gap-0.5">
                      <Wifi className="size-2.5" /> {cafe.wifiMbps} Mbps
                    </span>
                    <span className="inline-flex items-center gap-0.5">
                      <Zap className="size-2.5" /> Plugs
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`absolute -right-3 top-16 rounded-xl border border-[#e8ded1] bg-[#fffaf4] px-2.5 py-2 ${SHADOW_CARD}`}>
        <div className="flex items-center gap-1.5">
          <Clock className="size-3 text-[#2f8f5b]" />
          <span className="text-[9px] font-semibold text-[#1d1712]">Updated 2m ago</span>
        </div>
      </div>
    </div>
  );
}

function PainCard({ icon, title, text, className = "" }) {
  return (
    <div className={`rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-4 transition hover:${SHADOW_CARD} ${SHADOW_SOFT} ${className}`}>
      <div className="mb-2">{icon}</div>
      <h3 className="text-sm font-semibold text-[#1d1712]">{title}</h3>
      <p className="mt-1 text-[11px] leading-relaxed text-[#7d7368]">{text}</p>
    </div>
  );
}

function FeatureRow({ icon, title, desc }) {
  return (
    <div className={`flex items-start gap-4 rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-4 transition hover:${SHADOW_CARD} ${SHADOW_SOFT}`}>
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#cf7f2f1a]">{icon}</div>
      <div>
        <h3 className="text-sm font-semibold text-[#1d1712]">{title}</h3>
        <p className="mt-0.5 text-[12px] leading-relaxed text-[#7d7368]">{desc}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className={`rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-4 text-center transition hover:${SHADOW_CARD} ${SHADOW_SOFT}`}>
      <div className="mx-auto mb-2 flex size-9 items-center justify-center rounded-lg bg-[#cf7f2f1a]">{icon}</div>
      <div className="text-xl font-bold text-[#5e3822]">{value}</div>
      <div className="mt-0.5 text-[11px] text-[#7d7368]">{label}</div>
    </div>
  );
}

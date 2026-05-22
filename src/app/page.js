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
  Moderate: "bg-[#c19b651a] text-[#c19b65] border-[#c19b6540]",
  Busy: "bg-[#f14e4c26] text-[#f14e4c] border-[#f14e4c4d]",
};

const CROWD_DOT_STYLES = {
  Quiet: "bg-[#2f8f5b]",
  Moderate: "bg-[#c19b65]",
  Busy: "bg-[#f14e4c]",
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
    <div className="relative min-h-dvh bg-[#f4f0dd] text-[#1d1712]">
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#f4f0ddcc] backdrop-blur-xl " + SHADOW_SOFT : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-98.25 items-center justify-between px-5 py-4 lg:max-w-7xl lg:px-8 lg:py-5">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#c19b65] text-[#fffaf4] lg:size-9">
              <Search className="size-4" />
            </div>
            <span className="text-base font-bold text-[#5e3822] lg:text-lg">FindSpace</span>
          </div>
          <button
            type="button"
            onClick={() => scrollTo(4)}
            className="rounded-full bg-[#c19b65] px-4 py-1.5 text-xs font-semibold text-[#fffaf4] transition hover:bg-[#c19b65e6] lg:px-5 lg:py-2 lg:text-sm"
          >
            Get Started
          </button>
        </div>
      </nav>

      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="relative overflow-hidden px-5 pb-10 pt-28 lg:px-8 lg:pb-24 lg:pt-36"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#c19b651a] blur-3xl lg:-right-10 lg:-top-10 lg:size-136 lg:bg-[#c19b6514]" />
        <div className="pointer-events-none absolute -left-20 top-40 size-64 rounded-full bg-[#d8f0ff4d] blur-3xl lg:-left-10 lg:top-24 lg:size-112 lg:bg-[#d8f0ff24]" />

        <div className="relative mx-auto max-w-98.25 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:gap-16">
          <div className="lg:max-w-xl xl:max-w-155">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#c19b6533] bg-[#c19b651a] px-3 py-1 text-[11px] font-semibold text-[#c19b65]">
              <Star className="size-3 fill-[#c19b65] text-[#c19b65]" />
              Now available in Jabodetabek
            </span>

            <h1 className="mt-3 text-[2.1rem] font-bold leading-[1.15] tracking-tight text-[#5e3822] lg:text-6xl lg:leading-[1.02]">
              Stop guessing cafés. <span className="text-[#c19b65]">FindSpace</span> knows where to work.
            </h1>

            <p className="mt-4 text-[15px] leading-relaxed text-[#7d7368] lg:mt-6 lg:max-w-xl lg:text-lg lg:leading-8">
              Find productive cafés with real-time crowd information, verified work facilities, and smart recommendations designed for studying and working.
            </p>

            <div className="mt-6 flex items-center gap-3 lg:mt-8">
              <Link
                href="/auth"
                className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c19b65] px-6 py-3.5 text-sm font-semibold text-[#fffaf4] transition hover:scale-[1.02] active:scale-[0.98] ${SHADOW_CARD}`}
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
          </div>

          <div className="mt-8 flex justify-center lg:mt-0 lg:flex-1 lg:justify-center lg:pl-0">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="relative overflow-hidden px-5 py-14 lg:px-8 lg:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#f7f0e6] via-transparent to-[#f4f0dd] lg:from-[#f7f0e6] lg:via-[#f4ede0] lg:to-[#f4f0dd]" />
        <div className="pointer-events-none absolute -right-24 top-16 size-72 rounded-full bg-[#c19b650f] blur-3xl lg:size-96" />
        <div className="pointer-events-none absolute -left-20 bottom-0 size-64 rounded-full bg-[#d8f0ff26] blur-3xl lg:size-80" />

        <div className="relative mx-auto max-w-98.25 lg:max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c19b65]">Problems</span>
            <h2 className="mt-2 text-2xl font-bold leading-snug text-[#5e3822] lg:text-4xl lg:leading-tight">
              Finding the right café <span className="text-[#c19b65]">shouldn&apos;t</span> be trial and error.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#7d7368] lg:max-w-xl lg:text-lg lg:leading-8">
              FindSpace is built for the moments that make work feel frustrating: bad WiFi, noisy rooms, and the waste of showing up unprepared.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-10 lg:grid-cols-5 lg:gap-4 lg:auto-rows-fr">
            <PainCard icon={<Users className="size-5 text-[#f14e4c]" />} title="Too crowded" text="Arrive and find every seat taken." className="lg:col-span-2 lg:-translate-y-2 lg:-rotate-1" />
            <PainCard icon={<Wifi className="size-5 text-[#f14e4c]" />} title="WiFi dies" text="Unreliable connection mid-meeting." className="lg:translate-y-4 lg:rotate-1" />
            <PainCard icon={<Zap className="size-5 text-[#f14e4c]" />} title="No outlets" text="Laptop battery running on fumes." className="lg:-translate-y-3" />
            <PainCard icon={<VolumeX className="size-5 text-[#f14e4c]" />} title="Too noisy" text="Can’t focus with loud chatter." className="lg:translate-y-6 lg:rotate-[1.5deg]" />
            <PainCard icon={<Repeat className="size-5 text-[#f14e4c]" />} title="Café hopping" text="Wasting time moving around." className="col-span-2 lg:col-span-2 lg:-translate-y-1" />
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="relative overflow-hidden px-5 py-14 lg:px-8 lg:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#f4f0dd] via-[#f8f3e9] to-[#f4f0dd] lg:from-[#f3ecdf] lg:via-[#f8f4eb] lg:to-[#f4f0dd]" />
        <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-[#c19b650f] blur-3xl lg:size-96" />
        <div className="pointer-events-none absolute right-0 top-1/3 size-64 rounded-full bg-[#d8f0ff22] blur-3xl lg:size-80" />

        <div className="relative mx-auto max-w-98.25 lg:max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c19b65]">Features</span>
            <h2 className="mt-2 text-2xl font-bold text-[#5e3822] lg:text-4xl lg:leading-tight">Everything you need to stay productive</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#7d7368] lg:max-w-xl lg:text-lg lg:leading-8">
              The product should be visible here, not just described. These previews mirror the actual app experience so the section feels alive and useful.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-12 lg:auto-rows-[minmax(180px,auto)]">
            <FeatureShowcaseCard
              className="lg:col-span-7 lg:row-span-2"
              title="Real-Time Crowd Level"
              desc="See how crowded a café is before you leave home."
              accent="Crowd"
              icon={<Users className="size-5 text-[#c19b65]" />}
              preview={<CrowdPreview />}
            />
            <FeatureShowcaseCard
              className="lg:col-span-5"
              title="Smart Café Discovery"
              desc="Search cafés with location-aware discovery and workspace filters."
              accent="Discovery"
              icon={<Search className="size-5 text-[#c19b65]" />}
              preview={<SearchPreview />}
            />
            <FeatureShowcaseCard
              className="lg:col-span-4"
              title="Productivity Labels"
              desc="At a glance, understand WiFi, sockets, and quiet-zone quality."
              accent="Labels"
              icon={<CheckCircle2 className="size-5 text-[#c19b65]" />}
              preview={<LabelsPreview />}
            />
            <FeatureShowcaseCard
              className="lg:col-span-4"
              title="Saved Collection"
              desc="Keep your favorite workspace cafés organized and ready."
              accent="Saved"
              icon={<Bookmark className="size-5 text-[#c19b65]" />}
              preview={<SavedPreview />}
            />
            <FeatureShowcaseCard
              className="lg:col-span-4"
              title="Live Notifications"
              desc="Get alerted the moment a saved café becomes available again."
              accent="Alerts"
              icon={<Bell className="size-5 text-[#c19b65]" />}
              preview={<NotificationPreview />}
            />
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className="relative overflow-hidden px-5 py-14 lg:px-8 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#c19b650d] to-transparent" />
        <div className="relative mx-auto max-w-98.25 lg:max-w-7xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c19b65]">Validation</span>
          <h2 className="mt-2 text-2xl font-bold text-[#5e3822]">Built for the growing work-from-café culture</h2>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            <StatCard icon={<Users className="size-5 text-[#c19b65]" />} value="11.5M" label="Potential users in Jabodetabek" />
            <StatCard icon={<TrendingUp className="size-5 text-[#c19b65]" />} value="30-40%" label="Hybrid work adoption rate" />
            <StatCard icon={<GraduationCap className="size-5 text-[#c19b65]" />} value="Students" label="Primary user segment" />
            <StatCard icon={<Briefcase className="size-5 text-[#c19b65]" />} value="Remote" label="Worker-friendly ecosystem" />
          </div>

          <div className={`mt-6 space-y-3 rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-5 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 lg:p-6 ${SHADOW_SOFT}`}>
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
        className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#c19b651a] via-[#f4f0dd] to-[#f4f0dd] lg:from-[#c19b650f]" />
        <div className="pointer-events-none absolute left-1/2 -top-20 size-80 -translate-x-1/2 rounded-full bg-[#c19b651a] blur-3xl lg:size-152 lg:bg-[#c19b650f]" />

        <div className="relative mx-auto max-w-98.25 text-center lg:max-w-5xl">
          <h2 className="text-[1.75rem] font-bold leading-snug text-[#5e3822]">Your next productive workspace starts here.</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#7d7368]">
            Join FindSpace and discover cafés that truly support your productivity.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/auth"
              className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c19b65] px-8 py-4 text-base font-semibold text-[#fffaf4] transition hover:scale-[1.02] active:scale-[0.98] ${SHADOW_CARD}`}
            >
              Find Your Workspace
              <ChevronRight className="size-5" />
            </Link>
          </div>

          <p className="mt-4 text-xs text-[#7d7368]">Free to use. No credit card required.</p>
        </div>
      </section>

      <footer className="border-t border-[#e8ded1] px-5 py-8 pb-24 lg:px-8 lg:pb-10">
        <div className="mx-auto max-w-98.25 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-[#c19b65] text-[#fffaf4]">
              <Search className="size-3.5" />
            </div>
            <span className="text-sm font-bold text-[#5e3822]">FindSpace</span>
          </div>
          <p className="mt-2 text-xs text-[#7d7368]">Discover productive cafés across Jabodetabek.</p>
          <p className="mt-4 text-[10px] text-[#7d7368]">&copy; 2026 FindSpace. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e8ded1] bg-[#f4f0ddf2] p-4 backdrop-blur-xl lg:hidden">
        <Link
          href="/auth"
          className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c19b65] py-3.5 text-sm font-semibold text-[#fffaf4] transition hover:bg-[#c19b65e6] active:scale-[0.98] ${SHADOW_CARD}`}
        >
          Find Your Workspace
          <ChevronRight className="size-4" />
        </Link>
      </div>

      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`size-2 rounded-full transition-all ${
              activeSection === i ? "scale-125 bg-[#c19b65]" : "bg-[#e8ded1] hover:bg-[#7d7368]"
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
    <div className="relative w-65 shrink-0 lg:w-96 lg:scale-[1.18] lg:-translate-y-2 lg:origin-center">
      <div className="relative overflow-hidden rounded-4xl border-[6px] border-[#604d3f] bg-[#f4f0dd] shadow-2xl">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#604d3f]" />

        <div className="px-3 pb-3 pt-7">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#c19b65]" />
              <span className="text-[10px] font-semibold text-[#5e3822]">Menteng, Jakpus</span>
            </div>
            <span className="rounded-full bg-[#c19b651a] px-2 py-0.5 text-[9px] font-semibold text-[#c19b65]">Open</span>
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
                    <CheckCircle2 className="size-3 text-[#c19b65]" />
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
    <div className={`rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-4 transition duration-300 hover:-translate-y-1 hover:${SHADOW_CARD} hover:scale-[1.01] ${SHADOW_SOFT} ${className}`}>
      <div className="mb-2">{icon}</div>
      <h3 className="text-sm font-semibold text-[#1d1712]">{title}</h3>
      <p className="mt-1 text-[11px] leading-relaxed text-[#7d7368]">{text}</p>
    </div>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <div className={`rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-4 text-center transition duration-300 hover:-translate-y-1 hover:${SHADOW_CARD} hover:scale-[1.01] ${SHADOW_SOFT}`}>
      <div className="mx-auto mb-2 flex size-9 items-center justify-center rounded-lg bg-[#c19b651a]">{icon}</div>
      <div className="text-xl font-bold text-[#5e3822]">{value}</div>
      <div className="mt-0.5 text-[11px] text-[#7d7368]">{label}</div>
    </div>
  );
}

function FeatureShowcaseCard({ className = "", title, desc, accent, icon, preview }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-[#e8ded1] bg-[#fffaf4] p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:${SHADOW_CARD} ${SHADOW_SOFT} ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#c19b651a]">{icon}</div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c19b65]">{accent}</span>
            <h3 className="mt-1 text-lg font-semibold text-[#1d1712] lg:text-xl">{title}</h3>
          </div>
        </div>
        <span className="rounded-full border border-[#c19b6533] bg-[#c19b6514] px-2.5 py-1 text-[10px] font-semibold text-[#c19b65]">
          Preview
        </span>
      </div>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#7d7368] lg:text-[15px]">
        {desc}
      </p>

      <div className="mt-5 rounded-2xl border border-[#e8ded1] bg-[#f8f3ea] p-3 sm:p-4">
        {preview}
      </div>
    </article>
  );
}

function CrowdPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3">
        <div>
          <div className="text-xs font-semibold text-[#5e3822]">Kopi Sudut</div>
          <div className="mt-1 text-[10px] text-[#7d7368]">Menteng, Jakpus</div>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${CROWD_STYLES.Quiet}`}>
          Quiet
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Quiet", active: true },
          { label: "Moderate" },
          { label: "Busy" },
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl border p-3 text-center transition ${item.active ? "border-[#2f8f5b33] bg-[#2f8f5b12]" : "border-[#e8ded1] bg-[#fffaf4]"}`}
          >
            <div className={`mx-auto size-2 rounded-full ${CROWD_DOT_STYLES[item.label]}`} />
            <div className="mt-2 text-[10px] font-semibold text-[#1d1712]">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-2 rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3">
        <div className="flex items-center justify-between text-[10px] text-[#7d7368]">
          <span>Live occupancy</span>
          <span>24% full</span>
        </div>
        <div className="h-2 rounded-full bg-[#efe3d4]">
          <div className="h-2 w-1/4 rounded-full bg-[#2f8f5b]" />
        </div>
      </div>
    </div>
  );
}

function SearchPreview() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-[#e8ded1] bg-[#fffaf4] px-3 py-2.5">
        <div className="flex items-center gap-2 text-[#7d7368]">
          <Search className="size-3.5" />
          <span className="text-[10px]">Search cafés near Menteng...</span>
        </div>
      </div>

      <div className="flex gap-2 overflow-hidden">
        {[
          "Quiet",
          "WiFi 50+ Mbps",
          "Sockets",
        ].map((filter, index) => (
          <span
            key={filter}
            className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-semibold ${index === 0 ? "bg-[#c19b651a] text-[#c19b65]" : "bg-[#fffaf4] text-[#7d7368]"}`}
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="space-y-2">
        {[
          { name: "Kopi Sudut", meta: "Quiet • 75 Mbps" },
          { name: "Ruang Tenang", meta: "Moderate • 50 Mbps" },
        ].map((cafe) => (
          <div key={cafe.name} className="flex items-center justify-between rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3">
            <div>
              <div className="text-xs font-semibold text-[#1d1712]">{cafe.name}</div>
              <div className="mt-1 text-[10px] text-[#7d7368]">{cafe.meta}</div>
            </div>
            <ChevronRight className="size-4 text-[#c19b65]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LabelsPreview() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "WiFi", value: "Stable", tone: "text-[#2f8f5b]" },
          { label: "Sockets", value: "Plenty", tone: "text-[#c19b65]" },
          { label: "Noise", value: "Low", tone: "text-[#2f8f5b]" },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3 text-center">
            <div className="text-[10px] text-[#7d7368]">{item.label}</div>
            <div className={`mt-1 text-xs font-semibold ${item.tone}`}>{item.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3">
        <div className="flex items-center justify-between text-[10px] text-[#7d7368]">
          <span>Productivity score</span>
          <span>92/100</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-[#efe3d4]">
          <div className="h-2 w-[92%] rounded-full bg-[#c19b65]" />
        </div>
      </div>
    </div>
  );
}

function SavedPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-[#c19b651a]">
          <Bookmark className="size-4 text-[#c19b65]" />
        </div>
        <div>
          <div className="text-xs font-semibold text-[#1d1712]">Saved Collection</div>
          <div className="mt-1 text-[10px] text-[#7d7368]">3 cafés ready for work</div>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { name: "Kopi Sudut", note: "Quiet • Favorite" },
          { name: "Deep Work House", note: "Near your route" },
        ].map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3">
            <div>
              <div className="text-xs font-semibold text-[#1d1712]">{item.name}</div>
              <div className="mt-1 text-[10px] text-[#7d7368]">{item.note}</div>
            </div>
            <div className="size-2 rounded-full bg-[#c19b65]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificationPreview() {
  return (
    <div className="relative space-y-3">
      <div className="rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-[#1d1712]">Live Notifications</div>
            <div className="mt-1 text-[10px] text-[#7d7368]">Alert when seats open up</div>
          </div>
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#2f8f5b12] text-[#2f8f5b]">
            <Bell className="size-4" />
          </div>
        </div>
      </div>

      <div className="absolute right-2 top-10 w-[85%] rounded-2xl border border-[#e8ded1] bg-[#fffaf4] p-3 shadow-[0_18px_30px_-18px_rgba(62,37,18,0.25)]">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 size-2 rounded-full bg-[#2f8f5b]" />
          <div className="flex-1">
            <div className="text-xs font-semibold text-[#1d1712]">Kopi Sudut is quieter now</div>
            <div className="mt-1 text-[10px] leading-relaxed text-[#7d7368]">Crowd dropped to Quiet. Tap to open the listing.</div>
          </div>
        </div>
      </div>
      <div className="h-14" />
    </div>
  );
}

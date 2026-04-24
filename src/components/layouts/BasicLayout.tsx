import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { LayoutProps } from "../../types/Layout";

export const BasicLayout = ({
  location,
  time,
  date,
  rsvp_name,
}: LayoutProps) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-amber-50 via-orange-50 to-rose-100 px-6 py-10 text-zinc-900 sm:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 animate-pulse rounded-full bg-amber-300/30 blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-100px] h-80 w-80 animate-pulse rounded-full bg-rose-300/30 blur-3xl [animation-delay:350ms]" />
      </div>

      <section className="relative mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
            <Sparkles size={16} />
            You're Invited
          </span>
          <Link
            to="/stats"
            className="text-sm font-semibold text-amber-900 transition hover:text-amber-700"
          >
            Community stats
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
            RCF BBQ 2026
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            Join us for a laid-back day of grilled food, good company, and
            games. Bring your appetite and your best summer vibe.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-zinc-600">
              <CalendarDays size={16} />
              Date
            </div>
            <p className="font-bold text-zinc-900">{date}</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-zinc-600">
              <Clock3 size={16} />
              Time
            </div>
            <p className="font-bold text-zinc-900">{time}</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-zinc-600">
              <MapPin size={16} />
              Location
            </div>
            <p className="font-bold text-zinc-900">{location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-zinc-900 px-5 py-4 text-zinc-100 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-zinc-300">RSVP with</p>
          <p className="text-lg font-bold">{rsvp_name}</p>
        </div>
      </section>
    </main>
  );
};

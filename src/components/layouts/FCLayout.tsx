import React from "react";
import fcBackground from "../../assets/fc-bbq-grill.png";
import { Coins, Gem, Shield, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import fcLogo from "../../assets/rcf-logo.png";
import { useTheme } from "../../providers/ThemeProvider";
import { useUser } from "../../providers/UserProvider";

function TopBar() {
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", onClick: () => navigate("/"), selected: true },
    { label: "RSVP", onClick: () => {}, encouraged: true },
    { label: "Community Stats", onClick: () => navigate("/stats") },
  ];
  return (
    <header className="absolute left-0 right-0 top-0 z-20 flex h-[72px] items-center justify-between  px-[72px] pt-0 text-white backdrop-blur-lg">
      <div className="flex items-start gap-10">
        <img src={fcLogo} alt="FC Logo" className="w-12 h-12" />
        <nav className="flex h-[48px] items-center gap-9 text-[20px] font-black tracking-[-0.03em] text-white/55 bac">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`${item.selected ? "text-white" : item.encouraged ? "text-emerald-300" : "text-white/55"} hover:text-white transition-colors duration-200 cursor-pointer`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-start gap-8 pt-3 text-[17px] font-bold text-white/85">
        <div className="flex items-center gap-2">
          <Coins size={18} className="text-zinc-300" />
          <span>346,756</span>
        </div>
        <div className="flex items-center gap-2">
          <Gem size={18} className="text-emerald-300" />
          <span>0</span>
        </div>
        <div className="-mt-1 space-y-2 text-right">
          <div className="text-[18px] font-bold text-white/60">
            LVL 1{" "}
            <span className="mx-2 rounded-md border border-sky-300/60 bg-sky-500/25 px-1.5 py-0.5 text-[11px] font-black text-sky-100">
              XP
            </span>
            <span className="text-white/90">
              {" "}
              Come and enjoy a day of food, games, and fun!
            </span>
          </div>
          <div className="flex items-center justify-end gap-2 text-[17px] text-white/90">
            <span className="rounded-md bg-sky-500 px-1.5 py-0.5 text-[14px] font-black text-white shadow-[0_0_12px_rgba(14,165,233,0.8)]">
              10
            </span>
            <span>Skill Points Available</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function ClubCard() {
  return (
    <section className="absolute bottom-[120px] left-[88px] top-[92px] z-10 w-[515px] overflow-hidden rounded-b-lg bg-black/72 text-white shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-[2px]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-emerald-400/[0.035]" />
      <div className="relative flex h-full flex-col items-center justify-center px-10 pb-14">
        <img src={fcLogo} alt="FC Logo" className="w-16 h-16" />

        <h1 className="mt-8 text-center text-[52px] font-black leading-none tracking-[-0.04em]">
          RCF BBQ 2026
        </h1>

        <p className="mt-8 text-[20px] font-semibold text-white/80">
          Saturday, June 6th, 2026
        </p>

        <div className="mt-7 flex items-center gap-3 text-[25px] font-bold text-white/85">
          <Shield size={28} className="fill-amber-900/40 text-amber-500" />
          <span>245 Etheridge Ave, Milton, ON</span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[26px] font-black text-white/95">
          <Trophy size={29} className="fill-white text-white" />
          <span>10,000</span>
        </div>
      </div>
    </section>
  );
}

function EnterClubButton() {
  const { handleRSVP } = useUser();
  return (
    <button
      onClick={handleRSVP}
      className="absolute bottom-12 left-[232px] z-20 flex items-center gap-4 rounded-full bg-white py-3 pl-4 pr-8 text-[20px] font-black text-zinc-950 shadow-[0_16px_45px_rgba(0,0,0,0.6)] transition hover:scale-[1.02] hover:bg-emerald-50"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-200 text-[31px] font-black leading-none text-zinc-800">
        A
      </span>
      RSVP
    </button>
  );
}

export default function FCLayout() {
  const { setTheme } = useTheme();
  return (
    <main className="relative min-h-screen overflow-hidden bg-black font-sans text-white">
      <img
        src={fcBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-transparent to-black/10" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.75)]" />
      <TopBar />
      <ClubCard />
      <EnterClubButton />
      <button
        onClick={() => setTheme("basic")}
        className="absolute bottom-10 right-10 rounded border border-white/35 bg-gray-900/60 px-4 py-3 cursor-pointer hover:bg-cyan-500/20"
      >
        EXIT THEME
      </button>{" "}
    </main>
  );
}

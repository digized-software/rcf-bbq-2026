import { useNavigate } from "react-router-dom";
import rocketLeagueBackground from "../../assets/rl-bbq-grill.png";
import { useTheme } from "../../providers/ThemeProvider";
import rcfLogo from "../../assets/rcf-logo.png";
import { useUser } from "../../providers/UserProvider";

function MenuButton({ label, selected = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative h-10 w-[360px] text-left uppercase tracking-wide ${onClick ? "cursor-pointer" : ""} ${selected ? "bg-gradient-to-r from-white via-cyan-100 to-white shadow-[0_0_22px_rgba(125,225,255,0.65)]" : "bg-black/90 group-hover:bg-black/85 shadow-[inset_0_0_18px_rgba(60,190,255,0.12)]"}`}
      style={{
        clipPath: "polygon(0 0, 96% 0, 100% 50%, 96% 100%, 0 100%, 3% 50%)",
      }}
    >
      <div
        className={[
          "absolute inset-0 transition-all duration-200",
          selected
            ? "bg-gradient-to-r from-white via-cyan-100 to-white shadow-[0_0_22px_rgba(125,225,255,0.65)]"
            : "bg-black/90 group-hover:bg-black/85 shadow-[inset_0_0_18px_rgba(60,190,255,0.12)]",
        ].join(" ")}
      />
      <div
        className={[
          "absolute inset-y-0 left-0 w-1",
          selected ? "bg-sky-300" : "bg-sky-500/40",
        ].join(" ")}
      />
      <div className="relative flex h-full items-center gap-2 px-5 font-semibold">
        {selected && (
          <span className="grid h-6 w-6 place-items-center rounded-full border border-sky-400 bg-sky-300/40 text-sm text-sky-700 shadow-[0_0_8px_rgba(56,189,248,0.9)]">
            ×
          </span>
        )}
        <span className={selected ? "text-sky-800" : "text-white/95"}>
          {label}
        </span>
      </div>
    </button>
  );
}

function ProfileCard() {
  return (
    <div className="absolute bottom-0 left-0 flex h-[92px] w-[440px] items-center bg-black/55 pr-5 shadow-[0_-1px_0_rgba(78,205,255,0.45),0_0_22px_rgba(0,0,0,0.8)] backdrop-blur-sm">
      <div className="relative ml-5 h-[78px] w-[78px] rounded-lg border-4 border-white bg-slate-900 shadow-[0_0_12px_rgba(255,255,255,0.7)]">
        <img
          src={rcfLogo}
          alt="RCF Logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 min-w-0">
        <div className="text-2xl font-medium leading-none text-white drop-shadow">
          RCF BBQ 2026
        </div>
        <div className="mt-1 text-sm font-bold tracking-wide text-slate-300">
          Saturday, June 6th, 2026
        </div>
      </div>

      <div className="ml-auto h-full w-20 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:9px_9px]" />
      </div>
    </div>
  );
}

function NewsTab() {
  return (
    <div
      className="absolute right-0 top-1/2 h-[180px] w-[54px] -translate-y-1/2 bg-black/85 shadow-[0_0_24px_rgba(0,170,255,0.25)]"
      style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 38% 100%, 0 50%)" }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-3 pl-3">
        <div className="[writing-mode:vertical-rl] rotate-180 text-2xl font-light tracking-[0.18em] text-white">
          NEWS
        </div>
        <div className="grid h-8 w-8 place-items-center rounded-full border-2 border-emerald-400/80 text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]">
          △
        </div>
      </div>
    </div>
  );
}

function BottomPrompt() {
  const { setTheme } = useTheme();
  return (
    <div className="absolute bottom-[112px] left-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
      <p className="mb-5 text-xl font-medium">
        Join us for a day of food, games, and fun!
      </p>
      <div
        onClick={() => setTheme("basic")}
        className="flex items-center gap-2 text-base font-semibold uppercase cursor-pointer"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-rose-500 bg-black/45 text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.7)]">
          ○
        </span>
        <span>EXIT THEME</span>
      </div>
    </div>
  );
}

export default function RocketLeagueMenuUI() {
  const navigate = useNavigate();
  const { handleRSVP } = useUser();
  const menuItems = [
    { label: "RSVP", onClick: handleRSVP, selected: true },
    { label: "2026-06-06" },
    { label: "245 Etheridge Ave" },
    { label: "Milton, ON" },
    { label: "5:00 PM" },
    { label: "Community Stats", onClick: () => navigate("/stats") },
  ];
  return (
    <main className="relative h-screen min-h-[720px] w-full overflow-hidden bg-slate-950 font-sans text-white">
      <img
        src={rocketLeagueBackground}
        alt="stadium background"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_52%,transparent_0,transparent_22%,rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400/70 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

      <section className="absolute left-8 top-[50%] -translate-y-1/2">
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <MenuButton
              key={item.label}
              label={item.label}
              selected={item.selected}
              onClick={item.onClick}
            />
          ))}
        </div>
      </section>

      <BottomPrompt />
      <ProfileCard />
      <NewsTab />
    </main>
  );
}

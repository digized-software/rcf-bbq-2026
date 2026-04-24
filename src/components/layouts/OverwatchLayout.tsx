import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Medal,
  ShoppingBag,
} from "lucide-react";
import { useTheme } from "../../providers/ThemeProvider";
import { useNavigate } from "react-router-dom";
import overwatchBbq from "../../assets/overwatch-bbq-grill.png";
import { useUser } from "../../providers/UserProvider";
const carouselItems = [
  {
    title: "RCF BBQ 2025",
    subtitle: "",
    active: false,
    gradient: "from-slate-300 via-blue-500 to-violet-900",
  },
  {
    title: "RCF Iftar 2026",
    subtitle: "",
    active: false,
    gradient: "from-rose-600 via-fuchsia-500 to-cyan-400",
  },
  {
    title: "RCF BBQ 2026",
    subtitle: "2026-06-06",
    active: true,
    gradient: "from-black via-slate-950 to-cyan-950",
  },
  {
    title: "???",
    subtitle: "",
    active: false,
    gradient: "from-stone-900 via-red-950 to-black",
  },
  {
    title: "RCF BBQ 2027",
    subtitle: "",
    active: false,
    gradient: "from-slate-300 via-blue-500 to-violet-900",
  },
];

function TopNav() {
  const navigate = useNavigate();
  const { handleRSVP } = useUser();
  return (
    <header className="absolute left-0 right-0 top-0 z-30 flex h-16 items-center bg-[#10182b]/95 text-white shadow-2xl">
      <button
        onClick={() => navigate("/")}
        className="flex h-full w-14 items-center cursor-pointer justify-center bg-cyan-600/90 hover:bg-cyan-500"
      >
        <Home size={23} fill="currentColor" />
      </button>

      <nav className="flex h-full items-center gap-1 px-3">
        <button
          onClick={() => navigate("/")}
          className="relative h-full  cursor-pointer px-5 text-sm font-black tracking-wide text-white/90 transition hover:bg-white/10"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/stats")}
          className="relative h-full cursor-pointer px-5 text-sm font-black tracking-wide text-white/90 transition hover:bg-white/10"
        >
          Community stats
        </button>
      </nav>

      <div
        onClick={handleRSVP}
        className="absolute left-1/2 top-0 h-[76px] w-[310px] -translate-x-1/2 bg-cyan-500/95 shadow-[0_0_35px_rgba(34,211,238,.55)] [clip-path:polygon(10%_0,90%_0,78%_100%,22%_100%)]"
      >
        <div className="mx-auto flex h-[68px] w-[286px] cursor-pointer items-center justify-center gap-3 bg-gradient-to-b from-sky-500 to-blue-700 text-white [clip-path:polygon(8%_0,92%_0,80%_100%,20%_100%)]">
          <span className="-skew-x-6 text-4xl font-black italic tracking-wide">
            RSVP
          </span>
        </div>
      </div>

      {/* <div className="ml-auto flex h-full items-center gap-5 pr-5 text-sm font-black">
        <div className="flex items-center gap-1 text-cyan-200">
          <Gem size={16} />0
        </div>
        <div className="flex items-center gap-1 text-yellow-300">
          <Coins size={18} />
          600
        </div>
        <div className="flex items-center gap-1 text-slate-200">
          <ShoppingBag size={17} />0
        </div>
        <Medal size={19} className="text-slate-100" />
        <Bell size={18} className="text-slate-100" />
        <div className="flex items-center gap-1">
          <Users size={19} />0
        </div>
        <div className="h-12 w-12 rounded-sm bg-gradient-to-br from-fuchsia-500 via-purple-800 to-emerald-400 ring-2 ring-white/10" />
        <Settings size={22} />
      </div> */}
    </header>
  );
}

function MainBanner() {
  const { setTheme } = useTheme();
  return (
    <main className="h-dvh min-h-dvh overflow-hidden bg-[#080c16] pt-16 text-white">
      <div className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-sm">
        <img
          src={overwatchBbq}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,.48),transparent_4%),linear-gradient(105deg,rgba(141,16,36,.95)_0%,rgba(219,38,119,.78)_34%,rgba(7,11,22,.96)_49%,rgba(6,182,212,.85)_52%,rgba(15,23,42,.98)_100%)]" />
      <div className="absolute inset-y-16 left-[48%] z-0 w-6 rotate-6 bg-white/80 blur-[1px]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.42)_27%,rgba(0,0,0,.04)_53%,rgba(0,0,0,.54)_86%,rgba(0,0,0,.92)_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" /> */}

      <section className="relative z-10 px-12 pt-10 backdrop w-2xl h-svh rounded-lg bg-black/20 drop-shadow-2xl">
        <p className="mb-7 -skew-x-6 text-4xl font-black italic tracking-wide text-white/95 text-shadow-lg">
          Saturday, June 6th, 2026
        </p>

        <div className="max-w-xl">
          <span className="mb-5 inline-block rounded-sm bg-violet-700 px-4 py-2 text-sm font-black shadow-lg">
            EVENT
          </span>
          <h1 className="-skew-x-6 text-7xl font-black italic leading-none tracking-tight drop-shadow-2xl">
            RCF BBQ 2026
          </h1>
          <p className="mt-8 max-w-[520px] text-lg font-bold leading-relaxed text-white/85 drop-shadow">
            Come and enjoy a day of food, games, and fun!
          </p>
        </div>
      </section>

      <section className="absolute bottom-[86px] left-0 right-0 z-20 flex items-center justify-center gap-4 px-24">
        <button className="grid h-10 w-10 place-items-center rounded bg-white text-slate-900 shadow-lg">
          <ChevronLeft size={20} />
        </button>
        <div className="flex w-full max-w-[1400px] items-end justify-center gap-4">
          {carouselItems.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              className={`group relative h-[126px] flex-1 overflow-hidden rounded-lg 
                bg-gradient-to-br ${item.gradient} text-left shadow-2xl transition  
                 ${item.active ? "max-w-[320px] ring-4 ring-cyan-400 hover:-translate-y-1 cursor-pointer" : "max-w-[270px] ring-1 ring-white/20"}`}
            >
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute left-5 top-8">
                {item.active ? (
                  <div className="-skew-x-6 text-3xl font-black italic text-yellow-300">
                    {item.title}
                  </div>
                ) : (
                  <div className="text-base font-black text-white">
                    {item.title}
                  </div>
                )}
                {item.subtitle && (
                  <div className="mt-2 text-sm font-black text-white/90">
                    {item.subtitle}
                  </div>
                )}
              </div>
              {index !== 2 && (
                <div className="absolute right-6 top-4 h-20 w-20 rounded-full bg-white/35 blur-sm transition group-hover:scale-110" />
              )}
            </button>
          ))}
        </div>
        <button className="grid h-10 w-10 place-items-center rounded bg-white text-slate-900 shadow-lg">
          <ChevronRight size={20} />
        </button>
      </section>

      <aside className="absolute right-9 top-[150px] z-20 flex flex-col items-center gap-5">
        {[CalendarDays, ShoppingBag, CalendarDays, Medal].map((Icon, index) => (
          <button
            key={index}
            className="grid h-16 w-16 place-items-center rounded-full bg-slate-950/60 text-white ring-2 ring-white/15 backdrop-blur transition hover:bg-cyan-500/20"
          >
            <Icon size={25} />
          </button>
        ))}
        <div className="h-px w-16 bg-white/20" />
        <button className="grid h-14 w-14 place-items-center text-white">
          <ChevronDown size={34} strokeWidth={4} />
        </button>
      </aside>

      <footer className="absolute bottom-10 left-5 right-5 z-20 flex items-end justify-between text-white/90">
        <div className="flex items-center gap-2 text-sm font-black">
          <span className="rounded border border-white/35 bg-slate-950/60 px-3 py-2 text-xs">
            ENTER
          </span>
          <span>CHAT</span>
        </div>
        <div className="flex items-center gap-5 text-sm font-black cursor-pointer">
          <button
            onClick={() => setTheme("basic")}
            className="rounded border border-white/35 bg-slate-950/60 px-4 py-3 cursor-pointer hover:bg-cyan-500/20"
          >
            EXIT THEME
          </button>
        </div>
      </footer>
    </main>
  );
}

export const OverwatchLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <TopNav />
      <MainBanner />
    </div>
  );
};

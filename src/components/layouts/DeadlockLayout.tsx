import deadlockBackground from "../../assets/deadlock-bbq-grill.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import { useUser } from "../../providers/UserProvider";
export const DeadlockLayout = () => {
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const { handleRSVP } = useUser();
  const menuItems = [
    { label: "RSVP", badge: "RECOMMENDED", onClick: handleRSVP },
    { label: "Community Stats", onClick: () => navigate("/stats") },
    { label: "2026-06-06", badge: "Date" },
    { label: "245 Etheridge Ave", badge: "Location" },
    { label: "Milton, ON", badge: "City" },
    { label: "5:00 PM", badge: "Time" },
  ];

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#07100f] text-white">
      <img
        src={deadlockBackground}
        alt="Dark city alley background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/25 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />

      <section className="relative z-10 flex h-full flex-col justify-between px-12 py-10">
        <div className="max-w-md">
          <div className="mb-9 flex flex-col items-start gap-2">
            <div className="ml-14 grid h-12 w-12 place-items-center rounded-full border-2 border-stone-300/80 bg-black/30 shadow-[0_0_18px_rgba(255,255,255,0.25)]">
              <div className="h-7 w-7 rounded-full border border-stone-200/90 bg-[conic-gradient(from_45deg,transparent_0_20%,rgba(255,255,255,.85)_20%_28%,transparent_28%_45%,rgba(255,255,255,.85)_45%_53%,transparent_53%_70%,rgba(255,255,255,.85)_70%_78%,transparent_78%)]" />
            </div>

            <div className="font-serif text-5xl font-black uppercase leading-none tracking-[-0.08em] text-stone-100 drop-shadow-[0_3px_2px_rgba(0,0,0,0.9)]">
              RCF BBQ 2026
            </div>
            <div className="ml-16 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-300/80">
              Saturday, June 6th, 2026
            </div>
          </div>

          <nav className="space-y-5">
            {menuItems.map((item) => (
              <button
                onClick={item.onClick}
                key={item.label}
                className={`group flex items-center gap-4 text-left font-serif text-[32px] font-black leading-none tracking-[-0.04em] text-stone-50 drop-shadow-[0_3px_2px_rgba(0,0,0,0.9)] transition 
    ${item.onClick ? "hover:translate-x-2 hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 cursor-pointer" : ""}`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="rounded-sm bg-lime-300 px-2 py-1 font-sans text-[9px] font-black tracking-wide text-[#1f3214] shadow-md">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <footer className="flex items-end justify-between text-stone-200/80">
          <div className="space-y-3 text-sm font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] cursor-pointer">
            <button
              onClick={() => setTheme("basic")}
              className="flex items-center gap-2 transition hover:text-white cursor-pointer"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full border border-stone-300/80 text-[10px]">
                ⚙
              </span>
              Exit Theme
            </button>
          </div>
        </footer>
      </section>

      <div className="absolute bottom-8 left-0 h-24 w-72 bg-gradient-to-r from-amber-100/10 via-amber-200/5 to-transparent blur-2xl" />
    </main>
  );
};

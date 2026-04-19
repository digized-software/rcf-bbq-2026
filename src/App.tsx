import { Input } from "./components/Input";
import { useTheme } from "./providers/ThemeProvider";
import { PageLayout } from "./components/layouts/PageLayout";

const bbq_info = {
  location: "245 Etheridge Ave, Milton, ON",
  time: "5:00 PM",
  date: "2026-06-05",
};

export const App = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <div>
        <button onClick={() => setTheme("overwatch")}>Overwatch</button>
        <button onClick={() => setTheme("valorant")}>Valorant</button>
        <button onClick={() => setTheme("deadlock")}>Deadlock</button>
        <button onClick={() => setTheme("rocket-league")}>Rocket League</button>
        <button onClick={() => setTheme("halo")}>Halo</button>
        <button onClick={() => setTheme("fc-2025")}>FC 2025</button>
        <button onClick={() => setTheme("basic")}>Basic</button>
      </div>
      <PageLayout {...bbq_info} rsvp_name={<Input />} />
    </>
  );
};

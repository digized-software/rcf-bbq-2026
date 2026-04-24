import { Link } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import type { LayoutProps } from "../../types/Layout";
import { OverwatchLayout } from "./OverwatchLayout";
import { DeadlockLayout } from "./DeadlockLayout";
import FCLayout from "./FCLayout";
import { BasicLayout } from "./BasicLayout";
import RocketLeagueLayout from "./RocketLeagueLayout";

export const PageLayout = ({
  location,
  time,
  date,
  rsvp_name,
}: LayoutProps) => {
  const { theme, setTheme } = useTheme();
  if (theme === "overwatch") {
    return <OverwatchLayout />;
  }
  if (theme === "deadlock") {
    return <DeadlockLayout />;
  }
  if (theme === "fc-2025") {
    return <FCLayout />;
  }
  if (theme === "rocket-league") {
    return <RocketLeagueLayout />;
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <Link
        to="/stats"
        style={{ marginRight: "1rem", color: "#2563eb", fontWeight: 600 }}
      >
        Community stats
      </Link>
      <BasicLayout
        location={location}
        time={time}
        date={date}
        rsvp_name={rsvp_name}
      />
      <button onClick={() => setTheme("overwatch")}>Overwatch</button>
      <button onClick={() => setTheme("deadlock")}>Deadlock</button>
      <button onClick={() => setTheme("rocket-league")}>Rocket League</button>
      <button onClick={() => setTheme("fc-2025")}>FC 2025</button>
      <button onClick={() => setTheme("basic")}>Basic</button>
      {location} {time} {date} {rsvp_name}
    </div>
  );
};

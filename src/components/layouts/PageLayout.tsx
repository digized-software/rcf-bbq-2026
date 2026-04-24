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
  const { theme } = useTheme();
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
    <BasicLayout
      location={location}
      time={time}
      date={date}
      rsvp_name={rsvp_name}
    />
  );
};

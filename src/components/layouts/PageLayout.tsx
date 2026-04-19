import { useTheme } from "../../providers/ThemeProvider";
import type { LayoutProps } from "../../types/Layout";
import { OverwatchLayout } from "./OverwatchLayout";

export const PageLayout = ({
  location,
  time,
  date,
  rsvp_name,
}: LayoutProps) => {
  const { theme } = useTheme();
  if (theme === "overwatch") {
    return (
      <OverwatchLayout
        location={location}
        time={time}
        date={date}
        rsvp_name={rsvp_name}
      />
    );
  }
  return (
    <div style={{ backgroundColor: "white" }}>
      {location} {time} {date} {rsvp_name}
    </div>
  );
};

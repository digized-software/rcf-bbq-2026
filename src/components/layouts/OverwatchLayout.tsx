import type { LayoutProps } from "../../types/Layout";

export const OverwatchLayout = ({
  location,
  time,
  date,
  rsvp_name,
}: LayoutProps) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      {location}
      <main>
        {time} {date}{" "}
      </main>
      {rsvp_name}
    </div>
  );
};

import { useRef, useState } from "react";
import { useTheme } from "../providers/ThemeProvider";

export const Input = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLInputElement>(null);
  if (theme === "overwatch") {
    return <OverwatchInput ref={ref} />;
  }
  return <BasicInput ref={ref} />;
};

const OverwatchInput = () => {
  return (
    <input
      type="text"
      placeholder="Callsign / name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const BasicInput = () => {
  return <input type="text" placeholder="Callsign / name" />;
};

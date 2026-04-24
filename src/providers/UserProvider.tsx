import { createContext, useContext, useState } from "react";

type User = {
  discord_username: string;
  setDiscordUsername: (discord_username: string) => void;
  handleRSVP: () => void;
};

const UserContext = createContext<User>({
  discord_username: "",
  setDiscordUsername: () => {},
  handleRSVP: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [discord_username, setDiscordUsername] = useState("");
  const handleRSVP = () => {
    //TODO: Implement RSVP logic
    console.log("RSVP", discord_username);
  };
  return (
    <UserContext.Provider
      value={{ discord_username, setDiscordUsername, handleRSVP }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext);
};

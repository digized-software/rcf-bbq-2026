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
    if (!discord_username) {
      return;
    }
    fetch(import.meta.env.VITE_GAS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
      body: JSON.stringify({ name: discord_username }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
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

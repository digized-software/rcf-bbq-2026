import { useTheme } from "../providers/ThemeProvider";
import userFavoriteGamesLoader from "../assets/user_favorite_games_loader.json";
import type { Theme as ThemeType } from "../providers/ThemeProvider";
import { useUser } from "../providers/UserProvider";

export const Input = () => {
  const { setTheme } = useTheme();
  const { discord_username, setDiscordUsername } = useUser();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscordUsername(e.target.value);
    const user = userFavoriteGamesLoader[e.target.value.toLowerCase()];
    if (user) {
      setTheme(user.favorite_game as ThemeType);
    }
  };
  return (
    <input
      type="text"
      placeholder="discord username"
      value={discord_username}
      onChange={handleChange}
    />
  );
};

import { useTheme } from "../providers/ThemeProvider";
import userFavoriteGamesLoader from "../assets/user_favorite_games_loader.json";
import type { Theme as ThemeType } from "../providers/ThemeProvider";
import { useUser } from "../providers/UserProvider";

const userFavoriteGames = Object.entries(userFavoriteGamesLoader).reduce(
  (acc, [user, game]) => {
    acc[user.toLowerCase()] = game.favorite_game as ThemeType;
    return acc;
  },
  {} as Record<string, string>,
);
export const Input = () => {
  const { setTheme } = useTheme();
  const { discord_username, setDiscordUsername } = useUser();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscordUsername(e.target.value);

    const user =
      userFavoriteGames[
        e.target.value.toLowerCase() as keyof typeof userFavoriteGames
      ];
    if (user) {
      setTheme(user as ThemeType);
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

import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { UserProvider } from "./providers/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>,
);

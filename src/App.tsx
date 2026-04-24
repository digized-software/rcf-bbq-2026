import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const StatsPage = lazy(() => import("./pages/StatsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

export const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>
      }
    />
    <Route
      path="/stats"
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <StatsPage />
        </Suspense>
      }
    />
  </Routes>
);

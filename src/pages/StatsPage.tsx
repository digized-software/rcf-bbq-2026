import { useEffect, useState, type ComponentType, type CSSProperties } from "react";
import type { Data, Layout } from "plotly.js";
import PlotImport from "react-plotly.js";
import { Link } from "react-router-dom";
import dailyMessageCounts from "../assets/daily_message_counts.json";
import authorMessageCounts from "../assets/author_message_counts.json";
import overallGameMentions from "../assets/overall_game_mentions.json";
import userGameMentions from "../assets/user_game_mentions.json";
import userGamePca from "../assets/user_game_pca.json";
import wordMapSvg from "../assets/word_map.svg?raw";

import "./stats-page.css";

type PlotProps = {
  data: Data[];
  layout: Partial<Layout>;
  config?: Record<string, unknown>;
  style?: CSSProperties;
  useResizeHandler?: boolean;
};

const Plot: ComponentType<PlotProps> =
  typeof PlotImport === "function"
    ? (PlotImport as ComponentType<PlotProps>)
    : (PlotImport as { default: ComponentType<PlotProps> }).default;

type FigureJson = { data: Data[]; layout: Partial<Layout> };

const asFigure = (json: unknown): FigureJson => json as FigureJson;

const responsiveLayout = (layout: Partial<Layout>): Partial<Layout> => ({
  ...layout,
  autosize: true,
});

const plotConfig = {
  responsive: true,
  displayModeBar: true,
  displaylogo: false,
} as const;

const MOBILE_BREAKPOINT_PX = 768;

const useIsMobile = () => {
  const getIsMobile = () =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`).matches
      : false;

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT_PX}px)`,
    );

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

const Chart = ({
  figure,
  height,
  mobileHeight,
}: {
  figure: FigureJson;
  height: number;
  mobileHeight: number;
}) => {
  const isMobile = useIsMobile();

  return (
    <Plot
      data={figure.data}
      layout={{
        ...responsiveLayout(figure.layout),
        height: isMobile ? mobileHeight : height,
        margin: figure.layout.margin ?? { t: 48, r: 20, b: 48, l: 56 },
      }}
      config={plotConfig}
      style={{ width: "100%" }}
      useResizeHandler
    />
  );
};

export default function StatsPage() {
  return (
    <div className="stats-page">
      <nav className="stats-nav">
        <Link to="/">← Back to BBQ</Link>
      </nav>

      <header className="stats-header">
        <h1>Community stats</h1>
        <p>Discord activity and game mentions from exported analytics.</p>
      </header>

      <section className="stats-panel">
        <h2>Word map</h2>
        <div
          className="stats-word-map"
          dangerouslySetInnerHTML={{ __html: wordMapSvg }}
        />
      </section>

      <section className="stats-panel">
        <h2>Daily message counts</h2>
        <Chart figure={asFigure(dailyMessageCounts)} height={420} mobileHeight={320} />
      </section>

      <section className="stats-panel">
        <h2>Most active users</h2>
        <Chart figure={asFigure(authorMessageCounts)} height={720} mobileHeight={520} />
      </section>

      <section className="stats-panel">
        <h2>Overall game mentions</h2>
        <Chart figure={asFigure(overallGameMentions)} height={440} mobileHeight={340} />
      </section>

      <section className="stats-panel">
        <h2>Top games mentioned by user</h2>
        <Chart figure={asFigure(userGameMentions)} height={720} mobileHeight={520} />
      </section>

      <section className="stats-panel">
        <h2>User game preference map (PCA)</h2>
        <Chart figure={asFigure(userGamePca)} height={640} mobileHeight={440} />
      </section>
    </div>
  );
}

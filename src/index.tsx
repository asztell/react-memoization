import React from "react";
import { createRoot } from "react-dom/client";
import { GrandParent } from "./components";
import { StatsProvider } from "./contexts";
import "./styles.scss";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StatsProvider>
      <GrandParent></GrandParent>
    </StatsProvider>
  </React.StrictMode>
);

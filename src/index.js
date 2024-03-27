import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import FundingPage from "./funding-page/funding-page";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <FundingPage />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import Home from "./pages/Home/Home";
import { GlobalStyled } from "./GlobalStyled";
// import Main from "./components/Main";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";
// import WordCloudWrap from "./pages/Home/components/WordCloudWrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <GlobalStyled />
    <Router />
    </HelmetProvider>
  </React.StrictMode>
);

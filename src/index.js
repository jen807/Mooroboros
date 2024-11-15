import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import Home from "./pages/Home/Home";
import { GlobalStyled } from "./GlobalStyled";
import Main from "./components/Main";
// import WordCloudWrap from "./pages/Home/components/WordCloudWrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Main />
  </React.StrictMode>
);

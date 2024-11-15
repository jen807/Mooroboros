import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  pcPadding: "10%",
  moPadding: "20px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing: border-box;
}

body{
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: -1px;
    background: linear-gradient(to bottom, #08BAF8, #0381F0);
    color: white;
}

img{
    display: block;
    width: 100%;
}

a{
    text-decoration: none;
}

`;

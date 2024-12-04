import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import bg from "../images/website-bg-large.jpg";

type GlobalProps = {
  theme: typeof theme;
};

//Need type definitions
const GlobalStyle = createGlobalStyle<GlobalProps>`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: ${(p) => p.theme.fontSize};
}

body {
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.fontColor};
  background-image: url(${bg});
  background-repeat: repeat-y;
  background-size: 100% auto;
  margin: 0;
}

h1 {
  font-family: ${(props) => props.theme.ff.title};
  font-size: ${(p) => p.theme.fs.font_xxl}; 
}

h2 {
  font-family: ${(props) => props.theme.ff.title};
  font-size: ${(p) => p.theme.fs.font_xl}; 
}

h3 {
  font-family: ${(props) => props.theme.ff.primary};
  font-weight: ${(p) => p.theme.fw.fw_regular}; 
  font-size: ${(p) => p.theme.fs.font_lg}; 
}

a {
  font-weight: ${(p) => p.theme.fw.fw_semibold};
  color: ${(p) => p.theme.colors.primary};
  text-decoration: none;
}

/*Scrollbar styles*/

/* Track */
::-webkit-scrollbar {
  width: 7px; /* Set the width of the scrollbar */
  height: 7px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #a0a0a0; /* Set the color of the scrollbar handle */
  border-radius: 3px; /* Add rounded corners to the handle */
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #808080; /* Set the color of the handle on hover */
}

/* Track on hover */
::-webkit-scrollbar-track:hover {
  background-color: #f0f0f0; /* Set the color of the track on hover */
}

/* Handle when dragging */
::-webkit-scrollbar-thumb:active {
 background-color: #606060; /* Set the color of the handle when dragging */
}
`;

export default GlobalStyle;

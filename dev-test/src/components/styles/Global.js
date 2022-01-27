import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rosario:wght@300&display=swap');

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Rosario;
    background: #EFEFEF;
}

code {
    font-family: Rosario;
}
h2{
    margin:0px;
}
`

export default GlobalStyles;
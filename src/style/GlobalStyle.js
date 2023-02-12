import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Do Hyeon', sans-serif;
    }

    ::-webkit-scrollbar { 
        display: none;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100vw;
    }

    body {
        font-size: calc(60% + .8vmin);
        font-family: 'Montserrat', sans-serif;
    }
`;
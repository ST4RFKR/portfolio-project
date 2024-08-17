import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    :after,
    :before {
        margin: 0;
        padding: 0;

    }

    html {
        //font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        background-color: ${Theme.colors.mainBg};
        color: ${Theme.colors.mainText}

    }

    ul, ol {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${Theme.colors.mainText};
        cursor: pointer;

    }

    button {
        background-color: ${Theme.colors.transparent};
        border: none;
        cursor: pointer;
    }
    section:nth-of-type(odd){
        background-color: ${Theme.colors.mainBg};

    }
    section:nth-of-type(even){
        background-color: ${Theme.colors.secondBg};
    }

`

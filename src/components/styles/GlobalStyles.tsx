import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    :after,
    :before {
        margin: 0;
        padding: 0;
        
    }
    html{
        //font-size: 62.5%;
    }

    body {
        font-family: 'Poppins',sans-serif;
        box-sizing: border-box;
        background-color: ${Theme.colors.mainBg};
        color:${Theme.colors.mainText}

    }
    ul,ol{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: ${Theme.colors.mainText}

    }
    button{
        padding: 0;
        margin: 0;
        border: none;
        cursor: pointer;
    }
    
`

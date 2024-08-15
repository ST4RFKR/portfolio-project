import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./components/styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {Theme} from "./components/styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function GlobalStyles() {
    return null;
}
root.render(


    <ThemeProvider theme={Theme}>
        <App />
        <GlobalStyle></GlobalStyle>
    </ThemeProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

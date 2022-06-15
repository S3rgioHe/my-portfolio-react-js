import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    * {
        box-sizing: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: #222327;
        --purple: #820ad1;
    }
`;
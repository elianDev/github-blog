import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme["base-background"]};
    color: ${({ theme }) => theme["base-text"]};
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["base-text"]};
  }

  .container {
    max-width: 54rem;
    margin: 0 auto;
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #a31418;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }

  #root {
    min-height: 100vh;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
  }
`;
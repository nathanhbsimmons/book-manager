import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import App from "../components/App";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#694ED7' },
    secondary: { main: '#C137A2' },
    background: { main: '#FFE8FA' }
  },
});

document.addEventListener("DOMContentLoaded", () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});

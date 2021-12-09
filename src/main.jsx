import React from "react";
import ReactDOM from "react-dom";
import { Column } from "./components/Column";
import { Link } from "./components/Link";
import { styled } from "./style";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./useTheme";

function App() {
  return (
    <ThemeProvider>
      <Column align="center" justify="center" css={{ height: "100%" }}>
        <ThemeToggle css={{ position: "absolute", top: "$20", right: "$20" }} />
        <Hero>Welcome!</Hero>
        <p>
          Edit <Code>src/main.jsx</Code> and save to reload.
        </p>
        <p>
          Learn{" "}
          <Link href="https://vitejs.dev" newtab>
            Vite
          </Link>{" "}
          <Link href="https://eslint.org" newtab>
            ESLint
          </Link>{" "}
          <Link href="https://reactjs.org" newtab>
            React
          </Link>{" "}
          <Link href="https://stitches.dev" newtab>
            Stitches
          </Link>{" "}
          <Link href="https://www.radix-ui.com" newtab>
            Radix (Primitives, Colors, Icons)
          </Link>
        </p>
      </Column>
    </ThemeProvider>
  );
}

const Hero = styled("header", {
  font: "$hero",
  paddingBottom: "$20",
});

const Code = styled("code", {
  fontFamily: "$mono",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

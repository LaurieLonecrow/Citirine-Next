import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Gilda Display, Forum;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

:root {
  --purple: #3f53ab;
  --emerald: #1b4d4a;
  --rose: #d47c8b;
  --lightrose: #edc9bd;
  --white: #f1f1f1;
  --cream: #f8f3e6;
  --orange: #ff8426;
  --black: #1a1a1a;
}
`
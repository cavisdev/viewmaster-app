import { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Body";
import { Page } from "./styles/App.styles";
import { GlobalStyle } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header />
        <Main />
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;

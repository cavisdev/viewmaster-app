import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
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

import React from "react";
import Footer from "./components/sharedComponents/Footer";
import Header from "./components/sharedComponents/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./resources/styles/GlobalStyle";
import theme from "./resources/styles/theme";
import { AppContextProvider } from "./state/contexts/AppContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./components/baseComponents/ScrollToTop";
import MobileWidthGuard from "./components/sharedComponents/MobileWidthGuard";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <GlobalStyle theme={theme} />
        <MobileWidthGuard>
          <div className="App">
            <BrowserRouter>
              <ScrollToTop />
              <Header />
              <Routes>
                {routes.map((route: any) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </MobileWidthGuard>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import ThemeProvider from "./appBase/theme/ThemeProvider";
import Routes from "./routes/Routes";
import "@fontsource/poppins/300.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

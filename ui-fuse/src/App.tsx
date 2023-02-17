import { RecoilRoot } from "recoil";

import ThemeProvider from "./appBase/theme/ThemeProvider";
import NavigationScroll from "./components/common/layout/NavigationScroll";
import Routes from "./routes";
import "@fontsource/poppins/400.css";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;

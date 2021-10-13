import { useState } from "react";
import Splash from "./SplashScreen.jsx";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "mediumblue",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "magenta",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
import { GlobalStyle } from "./style/GlobalStyle";
import { NavigationBar } from "./components/NavigationBar";
import { Background } from "./components/Background";
import { Home } from "./components/Home";

export function App() {
  return (
    <>
      <Background />
      <Home/>
      <NavigationBar/>
      <GlobalStyle/>
    </>
  )
}

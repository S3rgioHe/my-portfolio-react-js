import { GlobalStyle } from "./style/GlobalStyle";
import { NavigationBar } from "./components/NavigationBar";
import { Background } from "./components/Background";
import { Pages } from "./components/Pages";
import { useState } from "react";

export function App() {

  
  const [page, setPage] = useState(0);

  return (
    <>
      <Pages page={page}/>
      <Background />
      <NavigationBar page={page} handleSetPage={setPage}/>
      <GlobalStyle/>
    </>
  )
}

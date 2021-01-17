import React, { Fragment } from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
/*
export interface AppProps {} */

const App: React.SFC /* <AppProps> */ = () => {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Router from "./routes/Router";
import SebedimContextProvider from "./context/Context";

function App() {
  return (
    <div className="max-w-[1550px] mx-auto">
      <SebedimContextProvider>
        <Router />
      </SebedimContextProvider>
    </div>
  );
}

export default App;

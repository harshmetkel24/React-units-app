import React from "react";
import { Route, Routes } from "react-router-dom";
import SI from "./Components/SI-units";
import Error from "./Components/error";
import Conversions from "./Components/conversions";

function App() {
  return (
    <main>
      <Routes>
        {/* here we have used exact keyword to tell the browser that just look for '/' in url. 
              If don't do this then it will take other things like http://localhost:3000 as the url */}
        <Route path="/" element={<SI />} />
        <Route path="/conversions" element={<Conversions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;

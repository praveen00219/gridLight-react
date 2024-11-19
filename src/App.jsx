import { useState } from "react";

import "./App.css";
import GridLights from "./components/GridLights";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <GridLights />
      </div>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Sky from "./pages/sky";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sky" element={<Sky />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Sky from "./pages/sky";
import Question from "./pages/questions";
import Question2 from "./pages/questions2";
import Question3 from "./pages/questions3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sky" element={<Sky />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/questions2" element={<Question2 />} />
        <Route path="/questions3" element={<Question3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
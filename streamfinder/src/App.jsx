import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/notFound";
import Index from "./pages/index";

function App() {
  return(
  <BrowserRouter basename="/streamfinder">
    <Routes>
      <Route path="/404" element={<NotFound />} />
      <Route path="/" element={<Index/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Fauzan from "./pages/Fauzan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/fauzan-tok" element={<Fauzan />} />
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import Fauzan from "./pages/Fauzan";
import OchaNovelinoSukina from './pages/OchaNovelinoSukina';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/fauzan-tok" element={<Fauzan />} />
      <Route path="/ocha-novelino-sukina" element={<OchaNovelinoSukina />} />
    </Routes>
  );
}

export default App;
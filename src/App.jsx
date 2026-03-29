import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NamaAnda from './pages/nama-anda'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NamaAnda />} />
        <Route path="/mochamad-miftahul-huda" element={<NamaAnda />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

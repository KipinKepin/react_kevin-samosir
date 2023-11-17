import './App.css';
import OpenAI from './components/OpenAI';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/open' element={<OpenAI />} />
      </Routes>
    </Router>
  );
}

export default App;

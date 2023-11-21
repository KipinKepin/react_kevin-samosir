import Quote from "./Quote";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;

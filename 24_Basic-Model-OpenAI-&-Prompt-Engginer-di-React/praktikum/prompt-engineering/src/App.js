import './App.css';
import { BrowserRoute as Router, Routes, Route } from 'react-router-dom'
import QnAForm from './components/QnAForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<QnAForm />} />
      </Routes>
    </Router>
  );
}

export default App;

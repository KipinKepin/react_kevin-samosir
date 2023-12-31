import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/CreateProduct/LandingPage";
import CreateProduct from "./components/CreateProduct/CreateProduct"
import ProductDetail from "./components/CreateProduct/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

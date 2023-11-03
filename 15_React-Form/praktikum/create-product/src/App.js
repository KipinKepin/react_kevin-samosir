import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/CreateProduct/LandingPage";
import CreateProduct from "./components/CreateProduct/CreateProduct"
import ProductDetail from "./components/CreateProduct/ProductDetail";
import Register from "./components/CreateProduct/Register";
import Login from "./components/CreateProduct/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

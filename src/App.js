import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductCard from './components/productCard/productCard';
import PrimarySearchAppBar from './components/appBar/appbar';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<ProductCard/>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="product/:id" element={<h1>vista de producto</h1>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Routes>
    </div>
  );
}

export default App;

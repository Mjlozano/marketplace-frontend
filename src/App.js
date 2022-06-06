import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './views/mainPage/mainPage';
import MainPageAdmin from './views/mainPage/mainPageAdmin';
import PrimarySearchAppBar from './components/appBar/appbar';
import LoginView from './views/login/loginView';
import NewUser from './components/loginForm/LoginNewUser';
import ProcutForm from './components/ProductForm/ProductForm'
import Cart from './views/cart/cartPage';

function App() {

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<MainPage titulo="¡Bienvenido!"/>} />
        <Route path="/admin" element={<MainPageAdmin/>} />
        <Route path="/new-product" element={<ProcutForm/>} />
        <Route path="login" element={<LoginView/>} />
        <Route path="new-user" element={<NewUser/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="product/:id" element={<h1>vista de producto</h1>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './views/mainPage/mainPage';
import PrimarySearchAppBar from './components/appBar/appbar';
import LoginView from './views/login/loginView';
import NewUser from './components/loginForm/LoginNewUser';

function App() {

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="login" element={<LoginView/>} />
        <Route path="new-user" element={<NewUser/>} />
        <Route path="product/:id" element={<h1>vista de producto</h1>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
      </Routes>
    </div>
  );
}

export default App;

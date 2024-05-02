import {BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import './App.css';
import Layout from "./pages/Layout";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Layout/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import DashBoard from "./pages/dashboard";
import Contact from "./pages/contact";
import { ToastContainer } from "react-toastify";
import Detail from "./pages/detail";
import AddPage from "./pages/add";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <ToastContainer position="top-right" autoClose={2000} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/employee/add" element={<AddPage />} />
                    <Route path="/employee/edit/:id" element={<AddPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

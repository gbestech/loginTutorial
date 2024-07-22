import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Product from "./pages/Product";
import Report from "./pages/Report";
import Sales from "./pages/Sales";
import Stockin from "./pages/Stockin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/inventory" Component={Inventory} />
          <Route path="/product" Component={Product} />
          <Route path="/reports" Component={Report} />
          <Route path="/sales" Component={Sales} />
          <Route path="/stock" Component={Stockin} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

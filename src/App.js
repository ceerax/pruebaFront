import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuyerView } from "./components/BuyerView";
import { SellerView } from "./components/SellerView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/buyer" element={<BuyerView />} />
        <Route path="/seller" element={<SellerView />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

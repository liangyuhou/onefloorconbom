
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import EnterPage from "./components/EnterPage";
import ProductPage from "./components/ProductPage";
import ProductView from "./components/ProductView";
import ProductView2 from "./components/ProductView2";
import ShoppingCart1 from "./components/ShoppingCart1";
import ShoppingCart2 from "./components/ShoppingCart2";

function App() {
  return (
    <div className="App">
        <Router>
                <Routes>
        <Route exact path="/" element={<EnterPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/product/1" element={<ProductPage />} />
        <Route exact path="/productview1" element={<ProductView />} />
        <Route exact path="/productview2" element={<ProductView2 />} />
        <Route exact path="/shoppingcart" element={<ShoppingCart1 />} />
        <Route exact path="/shoppingcart2" element={<ShoppingCart2 />} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;


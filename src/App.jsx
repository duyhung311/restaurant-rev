import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/plist' element={< ProductList />}></Route>
        <Route exact path='/cart' element={< Cart />}></Route>
        <Route exact path='/pdetail' element={< ProductDetail />}></Route>
      </Routes>      
    </Router>
  );
};

export default App;
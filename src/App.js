import "./App.css";
import Home from "./screens/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MyOrder from "./screens/MyOrder";
import About from "./screens/About";

import { CartProvider } from "./components/ContextReducer";
function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route> */}
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Model from "../../Model";
import Cart from "../../screens/Cart";
import { useCart } from "../ContextReducer";

export default function Navbar() {
  // const [search, setSearch] = useState("");
  // console.log("Hello");
  let data = useCart();

  const [cartView, setCartView] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const openMenu = () => {
    document.getElementById('menu').style.left = '0%';
  };

  const closeMenu = () => {
    document.getElementById('menu').style.left = '-100%';
  };

  return (
    <nav>
      <button onClick={openMenu} className="menu-btn open">
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="logo">
        <img src="img/m7.png" alt="logo" className="logo-img" />
        <div className="title">Nodo</div>
      </div>
      <ul id="menu">
        <button onClick={closeMenu} className="menu-btn close">
          <i className="fa-solid fa-x"></i>
        </button>
       
        <li>
          <Link to="/">
            <i className="fa-solid fa-house-chimney nav-icon"></i>Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa-regular fa-address-card nav-icon"></i>About
          </Link>
        </li>
        {localStorage.getItem("authToken") ? (
          <li>
            <Link to="/myOrder">
              <i className="fa-solid fa-box-open nav-icon"></i>My Orders
            </Link>
          </li>
        ) : (
          ""
        )}
        {!localStorage.getItem("authToken") ? (
          <>
            <li>
              <Link to="/login" className="button">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="button">
                SignUp
              </Link>
            </li>
          </>
        ) : (
          <>
            <li onClick={() => { setCartView(true); }}>
             <i className="fa-solid fa-bag-shopping color"></i>{data.length === 0 ? "" :<span className="cart-num"> {data.length} </span>}
            </li>
            {cartView ? (
              <Model onClose={() => setCartView(false)}>
                <Cart />
              </Model>
            ) : null}
            <div onClick={handleLogout} className="button logout-btn">Logout</div>
          </>
        )}
      </ul>
    </nav>
  );
}

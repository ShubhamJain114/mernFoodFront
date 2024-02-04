import React from "react";
import { useCart, useDispatchCart } from "../../components/ContextReducer";
import "./style.css";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div className="cart-mt">
       <img src="img/empty-cart.webp" alt="empty-img" />
        <h1 className="mt">This Cart is Empty!</h1>
      </div>
    );
  }

  const handleCheckout = async () => {
    try {
      let userEmail = localStorage.getItem("userEmail");
      // let response = await fetch("http://localhost:5000/api/orderData"
      let response = await fetch ("https://mern-food-fpmn.onrender.com/api/orderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });
      // console.log("Order response", response);
      if (response.status === 200) {
        dispatch({ type: "DROP" });
      }
      alert("order placed successfully")
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      <div id="cart">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          
          <tbody>
            {data.map((food, index) => (
              <tr key={food.id}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button type="button">
                    {/* <img
                      src="{trash}"
                      alt="delete"
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    /> */}
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    ></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div>
          <h1>Total Price: {totalPrice} /-</h1>
        </div>
        <div>
          <button type="button" onClick={handleCheckout}>
            {" "}
            Check Out
          </button>
        </div> */}
      </div>
<hr />
      <div id="sub-total">
            <h3>Cart Totals</h3>
            <table>
              <thead>
                <tr>
                    <td>Cart SubTotal</td>
                    <td>Rs. {totalPrice}</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>

                <tr>
                    <td><strong> Total</strong></td>
                    <td><strong>Rs. {totalPrice} </strong></td>
                </tr>
                </tbody>
            </table>

            <button className="normal"  onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./style.css";
export default function MyOrder() {
  const [orderData, setOrderData] = useState("");
  const fetchMyOrder = async () => {
    try {
      // console.log(localStorage.getItem("userEmail"));
      await fetch("https://mern-food-fpmn.onrender.com/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      }).then(async (res) => {
        let response = await res.json();
        await setOrderData(response);
        // console.log("Response from server:", response);
      });
    } catch (error) {
      // console.error("Error during fetchMyOrder:", error);
    }
  };
  useEffect(() => {
    fetchMyOrder();
    // console.log("helloo",orderData);
  }, {});
  return (
    <>
      <div className="nav-con">
        <Navbar />
      </div>
      <div className="order-heading">
     
        <h1>My Orders</h1>
      </div>
      <div className="myOrderContainer">
        {Object.keys(orderData).length !== 0 ? ( //orderData !=={}
          Array(orderData).map((data) => {
            return data.orderData ? (
              data.orderData.order_data
                .slice(0)
                .reverse()
                .map((item) => {
                  return item.map((arrayData) => {
                    
                    return (
                      <div className="box">
                        {arrayData.Order_date ? (
                          <div>
                            <br />
                            {(data = arrayData.Order_date)}
                            <hr />
                          </div>
                        ) : (
                          <div className="OrderData">
                            <div>
                              {/* <img src="{arrayData.img}" alt="..." /> */}
                              <div className="order-body">
                                <h5>{arrayData.name}</h5>
                                 
                                  <div>Qty: {arrayData.qty}</div>
                                  <div>{arrayData.size}</div>
                                  <div>{data}</div>
                                  <div>RS. {arrayData.price}</div>
                                </div>
                           
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  });
                })
            ) : (
              <div className="message">
                you don't have anything please order something 1
              </div>
            );
          })
        ) : (
          <div className="message">
            you don't have anything please order something{" "}
          </div>
        )}
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Link as ScrollLink,
//   Element,
//   animateScroll as scroll,
// } from "react-scroll";
import {
  Link as ScrollLink,
  } from "react-scroll";

import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import "./style.css";
export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://mern-food-fpmn.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <header className="head-container">
        <div className="head-l">
          <span className="quote fade-in">
            <h2>
              {" "}
              Best & Fastest <span>Delivery</span>
            </h2>
            <span>in Your Place</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus ?
            </p>
            <div className="btn">
              <ScrollLink
                to="explore"
                smooth={true}
                duration={500}
                className="b"
              >
                Order Now
              </ScrollLink>
              <ScrollLink
                to="explore"
                smooth={true}
                duration={500}
                className="b"
              >
                Explore More
              </ScrollLink>
            </div>
          </span>
        </div>

        <div className="head-r">
          <img src="img/header.png" alt="img" />
          <span className="slogen">
            <span>Let's</span>
            <span>Share😉</span>
            <span>Together...</span>
          </span>
        </div>
      </header>
      <section className="sec-1">
        <div className="see-m">
          <h1 className="heading">OUR REGULAR FOOD</h1>
          {/* <Link to className="see-more">See More...</Link> */}
          <div className="searchBox">
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <i className="search-icon fa-solid fa-search"></i>
            {/* <button className='search-btn' type='submit'>Search</button> */}
          </div>
        </div>
        <div className="second">
          <div className="container-1" id="explore">
            {foodCat.length !== 0 ? (
              foodCat.map((data) => {
                return (
                  <div key={data._id} className="card-cat">
                    <h1>{data.CategoryName}</h1>
                    <br />
                    <div className="card-row">
                      {foodItem.length !== 0 ? (
                        foodItem
                          .filter(
                            (item) =>
                              item.CategoryName === data.CategoryName &&
                              item.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                          )
                          .map((filterItems) => {
                            return (
                              <div key={filterItems._id} className="">
                                <Card
                                  foodItem={filterItems}
                                  options={filterItems.options[0]}
                                />
                              </div>
                            );
                          })
                      ) : (
                        <div>No such Data Found</div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No such Category Found</div>
            )}
          </div>
        </div>
      </section>
      <section className="section-4">
        <h1 className="heading"> WHY CHOOSE US</h1>
        <div className="fourth">
          <img src="img/cc1.png" alt="img" className="sec-4-img" />
          <div className="fourth-box">
            <div className="box2">
              <i className="fa-solid fa-truck-fast"></i>
              <h1>FAST DELIVERY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti modi earum velit reiciendis rem
              </p>
            </div>
            <div className="box2">
              <i className="fa-solid fa-truck-fast"></i>
              <h1>BEST QUALITY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti modi earum velit reiciendis rem
              </p>
            </div>
            <div className="box2">
              <i className="fa-solid fa-truck-fast"></i>
              <h1>HEALTHY FOOD</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti modi earum velit reiciendis rem
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <Footer />
     
    </div>
  );
}

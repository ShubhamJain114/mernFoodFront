import React from 'react'
import Navbar from '../../components/Navbar'
import "./style.css";
export default function About() {
  return (
    <>
   <div>
    <Navbar/>
   </div>
   <div className='about'>
    <img src="img/banner.jpg" alt="background-img" />
    <div className='about-des'>
    <h1>About Us</h1>
    <p>
Welcome to Nodo - Your Culinary Companion!
<br />
At Nodo, we believe in more than just delivering food; we strive to bring delightful culinary experiences to your doorstep. Our journey began with a simple passion for good food and a commitment to make dining convenient, enjoyable, and memorable.
<br />
Our Mission: Savoring Every Moment
<br />
Our mission is to redefine the way you experience food delivery. We understand the joy that comes from savoring a delicious meal, whether it's a comforting home-cooked dish or an exotic cuisine from around the world. That's why we've dedicated ourselves to curating a diverse range of culinary delights, prepared with love and delivered with care.
<br />
Why Choose Nodo?
<br />
Curated Menus: Our team of food enthusiasts scours the city to discover hidden gems and local favorites. We bring you carefully curated menus featuring the finest flavors and freshest ingredients.
<br />
Fast and Reliable Delivery: We know your time is precious, and hunger can't wait. That's why we've streamlined our delivery process to ensure your food reaches you hot and fresh, right on time.
<br />
Exceptional Quality: Quality is at the heart of everything we do. From selecting the best restaurants to partnering with top-notch chefs, we are committed to delivering a dining experience that exceeds your expectations.
<br />
Customer-Centric Approach: Your satisfaction is our priority. Our customer support team is always ready to assist you, ensuring a smooth and enjoyable journey from menu selection to the last bite.
<br />
Join Us on this Culinary Adventure!
<br />
Whether you're a busy professional, a foodie exploring new flavors, or a family seeking convenient dining options, Nodo is here to make your culinary dreams a reality. Join us on this gastronomic adventure, and let us be your trusted companion in every meal.
<br />
Thank you for choosing Nodo. We look forward to serving you with passion, flavor, and a touch of culinary magic!</p>
    </div>
   </div>
   </>
  )
}

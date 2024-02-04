import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div id='footer-con'>
      <footer id="footer" className="section-p1">
        <div className="col">
          <img src="" alt="logo" id="logo" />
          <h4>contact</h4>
          <p>
            <strong>address: </strong>papa ki pari
          </p>
          <p>
            <strong>phone: </strong>9121768590
          </p>
          <p>
            <strong>hours: </strong>1:00 pm
          </p>

          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fa-brands fa-pinterest"></i>

              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <Link to="">AboutUs</Link>
          <Link to="">Delivery information</Link>
          <Link to="">Privacy policy</Link>
          <Link to="">Terms & Condition</Link>
          <Link to="">Contact Us</Link>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <Link to="">Sign In</Link>
          <Link to="">View Cart</Link>
          <Link to="">My Wishlist</Link>
          <Link to="">Track my order</Link>
          <Link to="">Help</Link>
        </div>

        <div id="map">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5414.450115503496!2d77.42592832248364!3d23.23309149821953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42674cd1e311%3A0x5de763e9d7cd5c51!2sDB%20Mall%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1705373463798!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="copyright">
          <p>2024, flower flower flower &copy</p>
        </div>
      </footer>

    </div>
  )
}

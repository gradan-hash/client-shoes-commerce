import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="top"></div>

        <div className="item">
          <h2>Categories</h2>
          <span>Men's Shoes</span>
          <span>Women's Shoes</span>
          <span>Airmaxs</span>
          <span>Aiforce1</span>
          <span>Jordans</span>
        </div>
        <div className="item">
          <h2>Links</h2>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>FAQs</span>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>

        <div className="item">
          <h2>About</h2>
          <span>
            Twice Thrift Store is a leading online retailer of high-quality,
            affordable shoes and sneakers. We are committed to providing our
            customers with a wide selection of products at unbeatable prices,
            and we pride ourselves on our excellent customer service.
          </span>
        </div>

        <div className="item">
          <h2>Contact</h2>
          <span>Email: info@twicethriftstore.com</span>
          <span>Phone: 1-800-123-4567</span>
          <span>Address: 123 Main Street, Anytown USA</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Twice Thrift Store</span>
          <span className="copyright">
            © 2023 Twice Thrift Store. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="Accepted Payment Methods"></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;

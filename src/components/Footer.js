import React from "react";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <p>Delhi, India</p>
              <IoIosAirplane size={20} style={{ color: "#fff" }} />
              <p>Hyderabad, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              +91 9318464610
            </h4>
          </div>
          <div className="phone">
            <h4>
              <Link to="mailto:divyangdheer11@gmail.com">
                <FaMailBulk
                  size={20}
                  style={{
                    color: "#fff",
                    marginRight: "2rem",
                  }}
                />
                divyangdheer11@gmail.com
              </Link>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Follow me</h4>
          <p>Connect with me on my social media handle.</p>
          <div className="social">
            <Link
              to="https://www.github.com/ddheer29"
              className="facebook social"
              target="_blank"
            >
              <FaGithub
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/divyang-dheer-5731b51b3/"
              className="facebook social"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link
              to="https://twitter.com/ddheer22"
              className="facebook social"
              target="_blank"
            >
              <FaTwitter
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

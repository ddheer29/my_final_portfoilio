import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{
                            color:
                                "#fff", marginRight: "2rem"
                        }} />
                        <div>
                            <p>Delhi, India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{
                                color:
                                    "#fff", marginRight: "2rem"
                            }} />9211-9211-69
                        </h4>
                    </div>
                    <div className="phone">
                        <h4>
                        <Link to="mailto:divyangdheer@hotmail.com" target='_blank' >
                            <FaMailBulk size={20} style={{
                                color:
                                    "#fff", marginRight: "2rem"
                            }} />divyangdheer@hotmail.com
                        </Link>
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Follow me</h4>
                    <p>Connect with me on my social media handle.</p>
                    <div className="social">
                        <Link to='https://www.facebook.com/'
                            className="facebook social" target='_blank'>
                            <FaFacebook size={20} style={{
                            color: "#fff", marginRight: "2rem",
                            cursor: "pointer"
                        }}/>
                        </Link>
                        <Link to="https://twitter.com/d_dheer29"
                            className="facebook social" target='_blank'>
                            <FaTwitter size={20} style={{
                            color: "#fff", marginRight: "2rem",
                            cursor: "pointer"
                        }} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/divyang-dheer-5731b51b3/"
                            className="facebook social" target='_blank'>
                            <FaLinkedin size={20} style={{
                            color: "#fff", marginRight: "2rem",
                            cursor: "pointer"
                        }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
// www.linkedin.com/in/divyang-dheer-5731b51b3
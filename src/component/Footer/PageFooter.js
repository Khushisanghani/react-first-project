import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import './PageFooter.css';
import { Link } from "react-router-dom";
function PageFooter(){
    return(
        <>
        <footer className="footer-container">
        <div className="footer-main">
            <div className="footer-col-1">
                <h3>About Us</h3>
                <p>We are provide products and service to our customers.</p>
            </div>
            <div className="footer-col-2">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/term">Terms</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-col-3">
                <h3>Follow Us</h3>
                 <a href="/"><FaInstagram /></a>
                 <a href="/"><FaXTwitter /></a>
                 <a href="/"><FaFacebookSquare /></a>
            </div>
        </div>
        <div><hr/><p className="copytext">2024 code with yousaf.All Rights Reserved.</p></div>
        </footer>
        </>  
    )
}
export default PageFooter;
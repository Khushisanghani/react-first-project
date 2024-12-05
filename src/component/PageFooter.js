import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import './PageFooter.css';
function PageFooter(){
    return(
        <footer className="footer-container">
        <div className="footer-main">
            <div className="footer-col-1">
                <h3>About Us</h3>
                <p>We are provide products and service to our customers.</p>
            </div>
            <div className="footer-col-2">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Contact</a></li>
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
    )
}
export default PageFooter;
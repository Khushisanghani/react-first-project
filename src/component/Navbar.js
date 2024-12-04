import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
function Navbar(){
    const[isOpen,setIsOpen]=useState(false);
    const toggelMenu =() =>{
        setIsOpen(!isOpen);
    }
    return(
        <>
            <header>
            <div className="container">
            <nav>
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                    <ul className={isOpen ? "nav-link active" : "nav-link"}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Services</a>
                        </li>
                        <li>
                            <a href="/">Terms</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                    <div className="icon" onClick={toggelMenu}>
                    <FaBars />
                    </div>
            </nav>
            </div>
            </header>
            <section>
                <div className="containar">
                    <div className="contat">
                        <h2>contant</h2>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Navbar;
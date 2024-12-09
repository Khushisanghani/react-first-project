import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
// import { LuFlower } from "react-icons/lu";
import { Link} from "react-router-dom";
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
                    <h2>WebDesign</h2>
                    {/* <LuFlower /> */}
                </div>
                    <ul className={isOpen ? "nav-link active" : "nav-link"}>
                        <li>
                            <Link to="/" className={(IsActive)=>IsActive ? "active-link":""}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/term">Term</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
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
                    </div>
                </div>
            </section>
        </>
    )
}
export default Navbar;
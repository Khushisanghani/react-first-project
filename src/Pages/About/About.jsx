import React from 'react';
import aboutimg from "../../asserts/about.png";
import "./About.css"
function About(){
    return(
        <>
        <div className='heading'>
            <h1>About us</h1>
            <hr/> 
            <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
        </div>
        <div className='about-container'>
        <section className='about'>
            <div className='about-image'>
                <img src={aboutimg} alt="" />
            </div>
            <div className='about-content'>
                <h2>Creating React js Web site</h2>
                <p>React, also known as ReactJS, is a popular and powerful JavaScript library used for building dynamic and interactive user interfaces, primarily for single-page applications (SPAs). It was developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, reusable components, and active community support.</p>
            </div>
        </section>
        </div>
        </>
    )
}
export default About;
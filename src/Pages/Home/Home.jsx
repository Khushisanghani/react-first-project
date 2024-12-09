import React from 'react';
import img from "../../../src/asserts/bhimg1.webp";
import './Home.css';
function Home(){
    return (
        
        <div>
            <p className='font'>Welcome to out website</p>
            <div><img src={img} alt='' className='home-img'/>
            </div>
        </div>
    )
}
export default Home;
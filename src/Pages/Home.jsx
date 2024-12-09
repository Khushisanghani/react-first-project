import React from 'react';
import img from '../asserts/bhimg1.webp';
import './Home.css';
function Home(){
    return (

        <div>
            <div><img src={img} alt='' className='home-img'/>
            </div>
        </div>
    )
}
export default Home;
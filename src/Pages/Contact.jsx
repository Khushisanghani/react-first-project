import React from 'react';
import './Contact.css';
function Contact(){
    return(
        <form>
        <p>Contact Us</p>
        <input type="text" placeholder='Enter Your Name' className='input'/><br/>
        <input type="text" placeholder='Enter Your Email' className='input-email'/><br/>
        <input type="text" placeholder='Enter Subject' className='input-subject'/><br/>
        <input type='textarea' placeholder='Type Massage' className='input-subject'/><br/>
        <button className='button'>Send Message</button>
        </form>
    )
}
export default Contact;
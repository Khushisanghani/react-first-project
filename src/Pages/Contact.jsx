import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'
function Contact(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fc02d359-086e-4460-8195-fd0c1d153049");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };
    return(
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact form</h2>
                <div className='input-box'>
                    <label>Full name : </label>
                    <input type='text'name='Name' className='field' placeholder='Enter your name' required/>
                </div>
                <div className='input-box'>
                    <label>Email Address : </label>
                    <input type='email'name='Email' className='field' placeholder='Enter your email' required/>
                </div>
                <div className='input-box'>
                    <label>Your Message : </label>
                    <textarea name='Message' id='' className='field-msg' placeholder='Enter Your Message' required></textarea>
                </div>
                <button type='submit'> Send Message</button>
            </form>
        </section>
    )
}
export default Contact;
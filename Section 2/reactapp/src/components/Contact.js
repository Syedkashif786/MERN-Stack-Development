import React from 'react';
import './contact.css';

const Contact = () => {
    return (

<div class="container">
<div class = "col-md-7"> 
        <h1>Let's talk about everything!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, laudantium?</p>
    {/* </div> */}
    <div class="col-md-5">
        <div class="form w-100">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <input type="text" placeholder='Phone Number' />
            <textarea name="message" id="mess" cols="30" rows="10"placeholder='Write your message'></textarea>
            <button class = "btn btn-primary">Send Message</button>

        </div>
    </div>
</div>
</div>


    )
}

export default Contact;
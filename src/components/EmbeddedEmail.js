import React from 'react';
import * as emailjs from 'emailjs-com';

export default function EmbeddedEmail() {

  function sendEmail(e) {
    e.persist()
    e.preventDefault();

    emailjs.sendForm('service_1zy5lti', 'template_cs28wy7', e.target, 'user_Upry4F88HN7Of3qUtaM5s')
      .then((result) => {
          alert('email sent successfully');
      }, (error) => {
          alert('error sending email');
      });

    e.target.reset()
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
        <input type='hidden' name='contact_number' />
        <div className='input-group'>
            <label for='name'>Name</label>
            <input id='name' type='text' name='sender_name' placeholder='Your name'/> 
        </div>
        <div className='input-group'>
            <label for='email'>Email</label>
            <input id='email' type='email' name='sender_email' placeholder='Your email' />
        </div>
        <div className='input-group'>
            <label for='message'>Message</label>
            <textarea id='message' name='message' placeholder="Let's talk about it..."/>  
        </div>
        <div className='input-group'>
            <button className='email-button' type='submit'>send</button>
        </div>
    </form>
  );
}
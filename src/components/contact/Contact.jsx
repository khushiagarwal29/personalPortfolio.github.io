import { useState } from 'react';
import './contact.scss'

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
        <input type="text"placeholder="Enter your Name" />
          <input type="text" placeholder="Enter your Email" />
          <textarea placeholder="Enter your Message"></textarea>
          <button type="submit">Send Email</button>
          {message && <span>Thanks for your Email.</span>}
        </form>
      </div>
    </div>
  )
}

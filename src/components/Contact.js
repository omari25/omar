import React from 'react'

function Contact() {
  return (
    <div className='contact-div' id='contact'>
      <p id='the-bold-h1'>My <span className='colored-name'>Contact</span></p>
      <p style={{textAlign: "center", fontSize: "18px"}}>I'd love to hear from you! Reach out to me via:</p>
      <div className='contact-information'>
        <div className='contact-icons'>
          <div className='contact-icons-one-div'>
            <i class="fa-solid fa-location-dot" id='location-icon'></i>
            <div className='contact-icons-text'>
              <p style={{fontSize: "24px", fontWeight: "bold", marginBottom: "12px"}}>Address</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className='contact-icons-one-div'>
            <i class="fa-solid fa-phone"></i>
            <div className='contact-icons-text'>
              <p style={{fontSize: "24px", fontWeight: "bold", marginBottom: "12px"}}>Call Me</p>
              <p>+254 725 375 325</p>
            </div>
          </div>
          <div className='contact-icons-one-div'>
            <i class="fa-solid fa-envelope"></i>
            <div className='contact-icons-text'>
              <p style={{fontSize: "24px", fontWeight: "bold", marginBottom: "12px"}}>Email Me</p>
              <p>omarmahat702@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='contact-form'>
            <form action="">
              <div id='form-inputs-top'>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
              </div>
              <textarea name="" id="form-textarea" placeholder='Message'></textarea>
              <button type="submit" className='about-me-btn' id='submit-btn'>Send Message</button>
            </form>
        </div>
      </div>
      <div class="embeded-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35869063734!2d36.68257916444629!3d-1.3028602789703072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1698820084868!5m2!1sen!2ske" width="100%" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
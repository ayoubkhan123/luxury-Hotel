import React from 'react';
import ContactImagee from '../components/ContactImage/ContactImagee';
import ContactInput from "../components/Contact/Contact";


const Contact = () => {
  return (
    <div><ContactImagee/>
    <ContactInput/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51424.93482213728!2d74.8131646744482!3d36.335133791880935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e8a9dd2c71141f%3A0xa2be2ddae7aadd31!2sAttabad%20Lake!5e0!3m2!1sen!2s!4v1650456503830!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact
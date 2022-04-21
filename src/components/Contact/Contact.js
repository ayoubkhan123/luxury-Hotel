import React,{useRef,useState} from 'react';
import useStyle from "./ContactStyle";
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import emailjs from "emailjs-com";

const Contact = () => {
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_c9ol0er', 'template_f8ug3fe', form.current,
      'ZwVSUMz1u5z74S1AS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setEmail("");
    setName("");
    setMessage("");
    setNumber("");
    };
  return (
    <div className={classes.contact_main}>

<div className={classes.inputs}>
  <form className={classes.root} ref={form} onSubmit={sendEmail}>
  <p>Full Name</p>
      <TextField id="filled-basic" required value={name} onChange={(e) => setName(e.target.value)}  type="text" label="Full Name" variant="filled" />
      <p>Email</p>
      <TextField id="filled-basic" required value={email}  onChange={(e) => setEmail(e.target.value)}  type="email" label="Email Address" variant="filled" />
      <p>Phone</p>
      <TextField id="filled-basic" required value={number}  onChange={(e) => setNumber(e.target.value)} type="number" label="Phone #" variant="filled" />
      <p>Message</p>
      <TextField id="filled-basic" required value={message}  onChange={(e) => setMessage(e.target.value)} type="message" label="Say hello to us" variant="filled"  multiline rows={8}  />
      <span>
      <Button variant="contained" type="submit" value="Send"  color="primary">Send Message</Button>
</span>
    </form>
    </div>


    <div className={classes.contact_text}>
      <h1>Contact Info</h1>
        <h4>Address</h4>
        <h5>203 Fake St. Mountain View, San<br/> Francisco, California, USA</h5>
        <h4>Phone</h4>
        <h5>03465066304</h5>
        <h4>Email Address</h4>
        <h5>ayubbkhan05@gmail.com</h5>
    </div>

    </div>
  )
}

export default Contact
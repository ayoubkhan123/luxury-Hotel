import React from 'react';
import useStyle from "./FooterStyle";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const classes = useStyle();
    let navigate = useNavigate();
  function handleClick() {
    navigate('/contact')
  }
  return (
    <>
    <div className={classes.footer_main}> 
            <div>
                <h5>About</h5>
                <p>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Repellat quos rem ullam,<br/> placeat amet.</p>
                <button onClick={handleClick}>Read More</button>
            </div>
                    <div>
                        <h5>Quick Menu</h5>
                        <p>About</p>
                        <p>Services</p>
                        <p>Approach</p>
                        <p>Sustainability</p>
                        <p>News</p>
                        <p>Careers</p>
                    </div>

            <div>
           
                <h5>Ministries</h5>
                <p> Children </p>
                <p>Women</p>
                <p>Bible Study</p>
                <p>Church</p>
                <p>Missionaries</p>
            </div>
                    <div> 
                    <h5>Social Icons</h5>
                    <div className={classes.icons}>
                   <a href> <FacebookIcon/></a>
                   <a href>  <TwitterIcon/></a>
                   <a href>  <InstagramIcon/></a>
                   <a href>  <LinkedInIcon/></a>
                    </div>
                    </div>
                    <div className={classes.bottom_text}>
      <h6>Copyright © 2022 All Rights Reserved | Owned by AYub khan</h6>
    </div>
    </div>
    </>
  )
}

export default Footer;

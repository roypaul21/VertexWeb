import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdFax } from "react-icons/md";

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Footer() {
    useEffect(() => {
        Aos.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            animatedClassName: 'aos-animate',
            offset: 120, 
            delay: 0,
            duration: 400,
            easing: 'ease-in-sine',
            once: false,
            mirror: false,
        })
    },[])
    return(
        <section className="footer-section" id="footerSection">
            <div className="footer-section-content">
                <div className="footer-section-git">
                    <div className="footer-section-header" data-aos="fade-down" >
                        <h1>GET IN TOUCH</h1>
                    </div>
                    <div className="footer-section-text" data-aos="fade-right" data-aos-delay="100">
                        <p> <IoLocation /> Address: Abu Dhabi, United Arab Emirates ,P.O. Box 294149</p>
                        <p> <MdEmail /> Email: info@vertex-med.com</p>
                        <p> <FaPhoneAlt /> Phone: +971 2 887 0667</p>
                        <p> <MdFax /> FAX: +971 2 887 06 67</p>
                    </div>
                    <div className="footer-section-icon" data-aos="fade-right" data-aos-delay="200">
                        <a href="">
                            <FaFacebookSquare id="footer-icon" className="icon-fb" color="white"/>
                        </a>
                        <a href="">
                            <FaXTwitter id="footer-icon" className="icon-x" color="white"/>
                        </a>
                        <a href="">
                            <FaLinkedin id="footer-icon" className="icon-link" color="white"/>
                        </a>
                        <a href="">
                            <IoLogoYoutube id="footer-icon" className="icon-yt" color="white"/>
                        </a>
                    </div>
                </div>

                <div className="footer-section-contact" data-aos="fade-left" data-aos-delay="400">
                    <div className="footer-section-contact-column">
                       <input type="text" placeholder="Name" />
                       <input type="text" placeholder="Mobile Numnber" />
                    </div>
                    <div className="footer-section-contact-column">
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="footer-section-contact-column">
                        <input type="text" placeholder="Inquiry" />
                    </div>
                    <div className="footer-section-contact-column">
                        <textarea type="text" placeholder="Message" />
                    </div>       
                    <div className="footer-section-contact-column">
                        <button>SEND</button>
                    </div>        
                </div>
            </div>
        </section>
    )
}
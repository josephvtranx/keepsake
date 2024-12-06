import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Contact() {
    return(
        <>
            <Navbar/>
            <div class="contact-box">
                <div class="contact-text">
                    <p> Contact us at xxx-xxx-xxxx 
                        <br /><br />
                    <a href="mailto:keepsake@gmail.com">keepsake@gmail.com</a>
                    </p>
                </div>
            </div>
            <Navbar />
            
            
        </>
    );
}

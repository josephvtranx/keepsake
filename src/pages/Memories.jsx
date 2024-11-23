import React from "react";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";

const timelineData = [
    { time: "1934", imgSrc: "dummy-img/soundboard.JPG", alt: "Memory 1" },
    { time: "1934", imgSrc: "dummy-img/beach.jpg", alt: "Memory 2" },
    { time: "1934", imgSrc: "dummy-img/jesshiking.JPG", alt: "Memory 3" },
    { time: "1934", imgSrc: "dummy-img/ally.JPG", alt: "Memory 4" },
    { time: "1934", imgSrc: "dummy-img/Bananna.JPG", alt: "Memory 5" },
    { time: "1934", imgSrc: "dummy-img/hill.JPG", alt: "Memory 6" },
    { time: "1934", imgSrc: "dummy-img/Jeju.JPG", alt: "Memory 7" },
    { time: "1934", imgSrc: "dummy-img/JRbirthday.JPG", alt: "Memory 8" },
    { time: "1934", imgSrc: "dummy-img/SF.JPG", alt: "Memory 9" },
    { time: "1934", imgSrc: "dummy-img/SF2.JPG", alt: "Memory 10" },
  ];

export default function Memories() {
    return(
        <>
            <Navbar/>
            <div class="contact-box">
                <div class="contact-text">
                    <p>MEMORIES PAGE
                    <a href="mailto:keepsake@gmail.com">keepsake@gmail.com</a>
                    </p>
                </div>
            </div>

        
        </>
    );
}

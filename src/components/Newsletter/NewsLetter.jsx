import React from "react";
import "./NewsLetter.css";



const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive offers on your Email</h1>
            <p>Subscribe to our newsletter</p>
            <hr />
            <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
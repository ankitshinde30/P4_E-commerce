import React from "react";
import "./Offer.css";
import exclusive from "../Assets/exclusive_image.png";



const Offer = () => {
    return (
        <div className="offer">
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>Get the best deals on your favorite items</p>
                <button>Check Now</button>
            </div>
            <div className="offer-right">
              <img src={exclusive} alt="Exclusive Image" />
            </div>
        </div>
    );
}

export default Offer;   
import React from "react";
import styles from './Hero.module.css'; // Make sure the file name matches exactly
import hand_icon from "../Assets/hand_icon.png";
import hero_img from "../Assets/hero_image.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-left"]}>
        <h2>New Arrivals Only</h2>
        <div className={styles["hero-hand-icon"]}>
          <p>New</p>
          <img src={hand_icon} alt="Hand Icon" />
        </div>
        <p>Collection</p>
        <p>for Everyone</p>
        <div className={styles["hero-latest-btn"]}>
          <div>Latest collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
      <div className={styles["hero-right"]}>
        <img src={hero_img} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;

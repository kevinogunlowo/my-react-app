// Importing React to enable the use of JSX in this component
import React from "react";

// Importing CSS module to style the About component using scoped class names
import styles from "./About.module.css";

// Importing a utility function `getImageUrl` to generate the URL for images
import { getImageUrl } from "../../utils.js";

// Exporting the About component as a named export
export const About = () => {
  // Returning JSX that represents the layout and content of the About section
  return (
    // Defining a <section> element with a class from the CSS module and an ID of "about"
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>    
      <div className={styles.content}>  
        <img
          src={getImageUrl("hero/herroImage.png")} // Path to the "hero" image
          alt="Me sitting with a laptop" // Alt text for accessibility
          className={styles.aboutImage} // Styling the image with the CSS module class
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} /> {/* Corrected the path */}
            <div className={styles.aboutItemText}>
              <h3>About me</h3>
              <p>
                My name is Kevin Ogunlowo, and I’m a passionate software engineer.
                I specialize in creating responsive and user-friendly applications 
                with a focus on clean, modern design and robust functionality. 
                I’m always eager to learn new technologies and improve my skills 
                to deliver high-quality work.
              </p>
              <p>
                You can view my detailed resume or portfolio by 
                {/* The link opens in a new tab to view my resume */}
                <a href={getImageUrl("hero/Resume.pdf")} target="_blank" rel="noopener noreferrer">
                  clicking here
                </a>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

// Importing necessary dependencies from React and the CSS module
import React, { useState } from "react";
import styles from "./Contact.module.css"; // Importing scoped CSS for the Contact component
import { getImageUrl } from "../../utils.js"; // Importing utility function to retrieve image URLs

// Exporting the Contact component as a named export
export const Contact = () => {
  // Initializing state using useState hook to store form data
  const [formData, setFormData] = useState({
    firstName: "", // First name input field state
    lastName: "",  // Last name input field state
    contactNumber: "",  // Contact number input field state
    email: "",  // Email input field state
    message: ""  // Message textarea input state
  });

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring name and value from the event target
    setFormData((prevData) => ({
      ...prevData, // Merging existing form data with the new input value
      [name]: value // Updating the specific field based on the input name
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    console.log("Form submitted:", formData); // Logging the form data (can be replaced with API submission)
    window.location.href = "/"; // Redirecting the user to the home page after submission
  };

  // JSX structure to render the Contact form and other elements
  return (
    <section id="contact" className={styles.container}>
      {/* Wrapping the form in a styled container */}
      <div className={styles.formContainer}>
        
        {/* Form heading */}
        <h2>Contact Me</h2>
        {/* Brief message encouraging users to reach out */}
        <p>Feel free to reach out with any questions or opportunities!</p>
        
        {/* The contact form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          
          {/* First Name input field */}
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text" // Input type for text
              id="firstName" // Unique identifier for the first name field
              name="firstName" // Name attribute used to identify the field
              value={formData.firstName} // Value of the first name from the formData state
              onChange={handleChange} // Calls the handleChange function when the input changes
              required // Makes this field required
              className={styles.input} // Applying the scoped CSS class
            />
          </div>

          {/* Last Name input field */}
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          {/* Contact Number input field */}
          <div className={styles.formGroup}>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel" // Input type for phone numbers
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          {/* Email Address input field */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email" // Input type for email addresses
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          {/* Message textarea input */}
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message" // Unique identifier for the message field
              name="message" // Name attribute for the message field
              value={formData.message} // Value of the message from formData
              onChange={handleChange} // Calls handleChange on input
              required // Makes this field required
              className={styles.textarea} // Applying the scoped CSS class
            />
          </div>

          {/* Submit button */}
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>

      {/* Contact links section */}
      <ul className={styles.links}>
        
        {/* Email contact item */}
        <li className={styles.linkItem}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /> {/* Email icon */}
          <a href="mailto:kevinogunlowo273@gmail.com">Kevinogunlowo273@gmail.com</a> {/* Email link */}
        </li>

        {/* LinkedIn contact item */}
        <li className={styles.linkItem}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" /> {/* LinkedIn icon */}
          <a href="https://www.linkedin.com/in/kevin-ogunlowo/">/in/kevin-ogunlowo/</a> {/* LinkedIn profile link */}
        </li>

        {/* GitHub contact item */}
        <li className={styles.linkItem}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /> {/* GitHub icon */}
          <a href="https://github.com/kevinogunlowo">github.com/myname</a> {/* GitHub profile link */}
        </li>
      </ul>
    </section>
  );
};

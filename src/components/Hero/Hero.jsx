import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kevin</h1>
        <p className={styles.description}>
        My mission is to showcase my creativity, skills, and dedication through thoughtfully designed projects that reflect my passion for innovation and continuous learning. Through this portfolio, I aim to provide a clear representation of my technical expertise, problem-solving abilities, and commitment to excellence, while seeking opportunities to collaborate on meaningful projects that drive positive impact.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

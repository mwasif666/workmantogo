// AccordionComponent.js
import React, { useState } from "react";
import styles from "./AccordionComponent.module.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../assets/images/mobile.jpeg";
import FormSection from "../pages/Layout7/FormSection";

const AccordionCustomer = () => {
  return (
    <section className={styles.accordionSection} id="customer">
      <div className="container">
        <h1 className={styles.CustomCare}>Customer Care Centre</h1>
        <div className={styles.accordionContainer}>
          <div className={styles.googeMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28963.398586601397!2d66.97720793430877!3d24.849336215878193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315fb5ab8d371%3A0x60a9dd83400060a9!2sEbrahim%20Building%D8%8C%2020%2C%20West%20Wharf%20Road%2C%20W%20Wharf%20Rd%2C%20West%20Wharf%20Karachi%2C%2074700%2C%20Pakistan!5e0!3m2!1sen!2s!4v1754996926687!5m2!1sen!2s"
              width="100%"
              height="800"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.Formsection}>
              <FormSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionCustomer;

import React, { useState } from "react";
import styles from "./QuoteSection.module.css";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import Img1 from "../../assets/images/banner/1.jpeg";
import { Copy } from "../../component/Copy";

const FormSection = () => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    // Hide the toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className={`my-5 mx-lg-5 mx-2 ${styles.FormSec}`}>
      <div className="row g-5">
        {/* Get A Quote */}
        <div className="col-12 col-lg-12">
          <div className={styles.cardBox}>
            <div className="row g-0">
              <div className="col-md-12 d-flex align-items-center ">
                <div className={styles.cardContent}>
                  <h3 className="mb-3 text-center">Let's Connect</h3>

                  {/* Contact Information Section */}

                  <div className={`row ${styles.contactInfo}`}>
                    <div className="col-lg-6">
                      <div className={styles.FormQuote1}>
                        <div className="d-flex justify-content-between align-items-center mb-0">
                          <span className={styles.spanlabel}>Phone:</span>
                        </div>
                        <div className={styles.FormQuote}>
                          <span>+92-21-323149812</span>
                          <button
                            className={styles.copyButton}
                            onClick={() => copyToClipboard("+92-21-323149812")}
                          >
                            <Copy />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className={styles.FormQuote1}>
                        <div className="d-flex justify-content-between align-items-center mb-0">
                          <span className={styles.spanlabel}>Fax:</span>
                        </div>
                        <div className={styles.FormQuote}>
                          <span>32314948</span>
                          <button
                            className={styles.copyButton}
                            onClick={() => copyToClipboard("32314948")}
                          >
                            <Copy />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className={styles.FormQuote1}>
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <span className={styles.spanlabel}>Email:</span>
                      </div>
                      <div className={styles.FormQuote}>
                        <span>bdnecyber.net.pk</span>
                        <button
                          className={styles.copyButton}
                          onClick={() => copyToClipboard("bdnecyber.net.pk")}
                        >
                          <Copy />
                        </button>
                      </div>
                    </div>

                    <div className={styles.FormQuote1}>
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <span className={styles.spanlabel}>Address:</span>
                      </div>
                      <div className={styles.FormQuote}>
                        <span>
                          1st Floor, 17-19 Ebrahim Building (Reor), West Whorf
                          Road, Karachi, Sindh, Pakistan
                        </span>
                        <button
                          className={styles.copyButton}
                          onClick={() =>
                            copyToClipboard(
                              "1st Floor, 17-19 Ebrahim Building (Reor), West Whorf Road, Karachi, Sindh, Pakistan"
                            )
                          }
                        >
                          <Copy />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>Text copied successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default FormSection;

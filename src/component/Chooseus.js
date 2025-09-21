import React from "react";
import styles from "./Chooseus.module.css";
import imgsvg from "./../assets/images/services/Icon.svg";
import img1 from "./../assets/images/services/choose us.png";

const Chooseus = () => {
  return (
    <>
      <section className={`${styles.wrap} py-5`}>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-4">
            <div className="col-lg-6 pe-lg-5">
              <div className={styles.kicker}>
                <img src={imgsvg} alt="" />
                About Us
              </div>

              <h1 className={styles.headingmain}>
                Your All-in-One
                <span className=""> Partner for </span> Home & Commercial{" "}
                <span className=""> Repairs </span>
              </h1>
              <div>
                <p>
                  Welcome to Work Man to Go– your go to place for finding
                  trusted local tradespeople. Whether you need a plumber to fix
                  a leak, an electrician to keep the lights on, a roofer for
                  repairs, or a carpenter for your next project, we’ve got you
                  covered.
                </p>
                <br />

                <p>
                  We know how stressful it can be trying to find the right
                  person for the job. That’s why we’ve built a simple and
                  reliable one stop shop that connect..
                </p>
              </div>
              {/* <div className="btns">
                <a href="#book" className={styles.ctaBtn}>
                  Book A Service Now
                </a>
              </div> */}
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className={styles.img_box}>
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chooseus;

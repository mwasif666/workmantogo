import React from "react";
import styles from "./Services.module.css";
import img1 from "./../assets/images/services/1.png";
import img2 from "./../assets/images/services/2.png";
import img3 from "./../assets/images/services/3.png";
import img4 from "./../assets/images/services/4.png";
import img5 from "./../assets/images/services/5.png";
import imgsvg from "./../assets/images/services/Icon.svg";

const servicesTop = [
  {
    title: "Carpentry",
    img: img1,
    desc: "Custom woodwork, trim, built-ins, repairs, and more.",
  },
  {
    title: "Roofing",
    highlight: true,
    img: img2,
    desc: "Leak repairs, new roof installation, and long-lasting maintenance.",
  },
  {
    title: "Electrical",
    img: img3,
    desc: "Panels, outlets, lighting installs, and safety inspections.",
  },
  {
    title: "Hvac",
    img: img4,
    desc: "Furnace, A/C installs, tune-ups, efficiency upgrades.",
  },
  {
    title: "Plumbing",
    img: img5,
    desc: "Leak fixes, fixture installs, water heaters, and more.",
  },
];

function ServiceCard({ title, img, desc, highlight }) {
  return (
    <div className={`${styles.card} ${highlight ? styles.cardHighlight : ""}`}>
      <img src={img} alt={title} className={styles.cardImg} />
      <div className={styles.shadowInset} />
      <div className={styles.cardLabel}>
        <span className={styles.cardTitle}>{title}</span>
      </div>
      <div className={styles.hoverOverlay} aria-hidden="true">
        <div className={styles.overlayContent}>
          <div className={styles.overlayTitle}>{title}</div>
          <p className="mb-2">{desc}</p>
          {/* <a href="#" className={styles.learnMore}>
            Learn More →
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className={`${styles.wrap}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div>
            <div className={styles.kicker}>
              <img src={imgsvg} alt="" />
              Our Services
            </div>
            <h1 className={styles.h2}>
              Handyman &amp; Repair{" "}
              <span className={styles.h2Light}>
                Services <br /> We Offer
              </span>
            </h1>
          </div>
          <a href="#book" className={styles.ctaBtn}>
            Book A Service Now
          </a>
        </div>

        <div className="row g-4 mb-3 justify-content-center">
          {servicesTop.map((s) => (
            <div key={s.title} className="col-12 col-md-4">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

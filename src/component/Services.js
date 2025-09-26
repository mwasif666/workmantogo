"use client";
import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import imgsvg from "./../assets/images/services/Icon.svg";
import axios from "axios";

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
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://dashboard.workmentogo.ca/getAllServices"
        );
        setServices(response.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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

        {loading ? (
          <p className="text-center">Loading services...</p>
        ) : (
          <div className="row g-4 mb-3 justify-content-center">
            {services.map((s) => (
              <div key={s.id} className="col-12 col-md-4">
                <ServiceCard
                  title={s.name}
                  img={s.image}
                  desc={s.description}
                  highlight={s.highlight || false}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

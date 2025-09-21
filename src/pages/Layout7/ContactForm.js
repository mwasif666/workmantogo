import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Form, Button } from "react-bootstrap";
import { DatePicker } from "antd";
import UploadFile from "./Upload";

const ContactForm = () => {
  const onDateChange = (value, dateString) => {
    console.log("Selected Date & Time: ", dateString);
  };

  return (
    <div className={`${styles.contactSection} container`}>
      <div className="text-center mb-4">
        <h1 className={styles.heading}>Get In Touch</h1>
        <p className={styles.subText}>We're here to help you 24/7.</p>
      </div>

      <div className={`${styles.formCard} p-4`}>
        <Form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" />
            </div>
            <div className="col-md-6 mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="(123) 456-7890" />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" />
            </div>
            <div className="col-md-6 mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Services</Form.Label>
              <Form.Select>
                <option>Roofing</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Painting</option>
              </Form.Select>
            </div>
            <div className="col-md-6 mb-3">
              <Form.Label>Select a Date and Time</Form.Label>
              <DatePicker
                showTime
                onChange={onDateChange}
                className="form-control"
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-12 mb-3">
              <Form.Label>Problem</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing"
              />
            </div>

            <UploadFile />

            <div className="col-12 text-center">
              <Button type="submit" className={styles.submitBtn}>
                Book Services Now
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;

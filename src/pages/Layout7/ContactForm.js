"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Form, Button } from "react-bootstrap";
import { DatePicker, message } from "antd";
import axios from "axios";
import UploadFile from "./Upload";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service_id: "",
    preferred_datetime: "",
    problem: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onDateChange = (value, dateString) => {
    setFormData({ ...formData, preferred_datetime: dateString });
  };

  const handleFileUpload = (files) => {
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("address", formData.address);
      data.append("service_id", formData.service_id);
      data.append("preferred_datetime", formData.preferred_datetime);
      data.append("problem", formData.problem);

      formData.images.forEach((file) => {
        data.append("images[]", file);
      });

      const response = await axios.post(
        "http://dashboard.workmentogo.ca/save_request",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      message.success("Service booked successfully!");
      console.log("API Response:", response.data);

      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        service_id: "",
        preferred_datetime: "",
        problem: "",
        images: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`${styles.contactSection} container`}>
      <div className="text-center mb-4">
        <h1 className={styles.heading}>Get In Touch</h1>
        <p className={styles.subText}>We're here to help you 24/7.</p>
      </div>

      <div className={`${styles.formCard} p-4`}>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Services</Form.Label>
              <Form.Select
                name="service_id"
                value={formData.service_id}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option value="1">Roofing</option>
                <option value="2">Plumbing</option>
                <option value="3">Electrical</option>
                <option value="4">Painting</option>
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
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Describe your issue..."
              />
            </div>

            <UploadFile onUpload={handleFileUpload} />

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

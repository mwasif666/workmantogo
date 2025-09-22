import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLink from "../Footer/Footer_link";

// Footer Image
import footer_image from "../../assets/images/footer.png";
import logolight from "../../assets/images/logo-white.png";

// Social Icons (FontAwesome)
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer className="footer">
          <Container>
            <Row>
              <Col lg={4} className="text-start">
                <div className="mb-1">
                  <Link to="#">
                    <img
                      src={logolight}
                      alt=""
                      className=""
                      height="auto"
                      width="150px"
                    />
                  </Link>
                  <p
                    className="text-white-50 mb-4"
                    style={{
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    Welcome to Work Man to Go– your go to place for finding
                    trusted local tradespeople. Whether you need a plumber to
                    fix a leak, an electrician to keep the lights on, a roofer
                    for repairs, or a carpenter for your next project, we’ve got
                    you covered.
                  </p>
                </div>
              </Col>

              {/* General */}
              <Col lg={2} xs={6}>
                <div className="mt-4 mt-lg-0">
                  <h4 className="text-white font-size-18 mb-3">General</h4>
                  <ul className="list-unstyled footer-sub-menu">
                    <li>
                      <Link className="footer-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/service">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/booking">
                        Booking
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              {/* Services */}
              <Col lg={2} xs={6}>
                <div className="mt-4 mt-lg-0">
                  <h4 className="text-white font-size-18 mb-3">Services</h4>
                  <ul className="list-unstyled footer-sub-menu">
                    <li>
                      <Link className="footer-link" to="/service">
                        Carpentry
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/service">
                        Roofing
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/service">
                        Electrical
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/service">
                        Hvac
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-link" to="/service">
                        Plumbing
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              {/* Contact Us */}
              <Col lg={4} xs={12}>
                <div className="d-flex justify-content-center">
                  <div className="mt-4 mt-lg-0">
                    <h4 className="text-white font-size-18 mb-3">Contact Us</h4>
                    <ul className="list-unstyled footer-sub-menu text-white-50">
                      <li>
                        <strong>Phone:</strong> <br />
                        <a href="tel:+1(437)5877072710" className="footer-link">
                          +1(437)5877072710
                        </a>
                      </li>
                      <li className="mt-2">
                        <strong>Email:</strong> <br />
                        <a
                          href="mailto:info@workmentogo.ca"
                          className="footer-link"
                        >
                          info@workmentogo.ca
                        </a>
                      </li>
                      <li className="mt-2">
                        <strong>Address:</strong> <br />
                        Office address 4221, 23b street NE, T2E 7V9
                      </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="d-flex mt-3">
                      <a
                        href="https://facebook.com"
                        className="me-3 text-white fs-5"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="https://twitter.com"
                        className="me-3 text-white fs-5"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="https://linkedin.com"
                        className="me-3 text-white fs-5"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href="https://instagram.com"
                        className="text-white fs-5"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Footer Bottom Links */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;

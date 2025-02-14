import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Portfolio" /> */}
            {/* <p><i className="fas fa-phone-alt"></i> <strong> +91 - 9000411575</strong></p> */}
            {/* <p><i className="fas fa-envelope"></i> <strong>saisampath.kothapalli@gmail.com</strong></p> */}
            <p>
              <i className="fas fa-phone-alt"></i> 
              <strong>
                <a 
                  href="tel:+919000411575" 
                  style={{ 
                    textDecoration: "none", 
                    color: "inherit", 
                    cursor: "pointer" 
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                  onMouseOut={(e) => e.target.style.textDecoration = "none"}
                >
                  +91 - 9000411575
                </a>
              </strong>
            </p>
            <p>
              <i className="fas fa-envelope"></i> 
              <strong>
                <a 
                  href="mailto:saisampath.kothapalli@gmail.com" 
                  style={{ 
                    textDecoration: "none", 
                    color: "inherit", 
                    cursor: "pointer" 
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                  onMouseOut={(e) => e.target.style.textDecoration = "none"}
                >
                  saisampath.kothapalli@gmail.com
                </a>
              </strong>
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sampath-kumar-bb519b160/" target = "_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/sampath-kothapalli" target = "_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>

              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

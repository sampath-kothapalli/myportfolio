import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";  // Optional: if you still want to display an image
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" style={{ width: "75%" }}/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Information</h2>
                  <p><i className="fas fa-user"></i> <strong> Kothapalli Sai Sampath Kumar</strong></p>
                  <p><i className="fas fa-phone-alt"></i> <strong> +91 - 9000411575</strong></p>
                  <p><i className="fas fa-envelope"></i> <strong>saisampath.kothapalli@gmail.com</strong></p>
                  <p><i className="fas fa-map-marker-alt"></i> <strong>Hyderabad, India</strong></p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

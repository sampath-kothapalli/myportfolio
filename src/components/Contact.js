import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  
  //   try {
  //     let response = await fetch("https://script.google.com/macros/s/AKfycbybbam3Fqx9iwQkmjTwdFwdxatb7KkW-J6rAiwx5iX0o87k1MzueW2v-ql7UB4NsKgCXw/exec", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formDetails),
  //       mode: "no-cors",  // ✅ Fix for CORS issues
  //     });
  
  //     console.log("API Response:", response);
  
  //     // Since "no-cors" prevents reading the response, assume success
  //     setStatus({ success: true, message: "Message sent successfully!" });
  //     setFormDetails(formInitialDetails);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setStatus({ success: false, message: "Failed to connect to the server." });
  //   }
  
  //   setButtonText("Send");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    try {
      let response = await fetch("https://script.google.com/macros/s/AKfycbz4-rtspoAfATwbKn-Yobv-62K1UVWL7AuXWUeQMqlCC52Y8sGKt1ef-W4a4OX8T7NFtA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
        mode: "no-cors",  // ✅ Fix for CORS issues
      });

      console.log("API Response:", response);
  
      // Since "no-cors" prevents reading the response, assume success
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormDetails(formInitialDetails);
    } catch (error) {
      console.error("Error:", error);
      setStatus({ success: false, message: "Failed to connect to the server." });
    }
  
    //   let result = await response.json();
    //   console.log("API Response:", result);
  
    //   if (result.status === "Success") {
    //     setStatus({ success: true, message: "Message sent successfully!" });
    //     setFormDetails(formInitialDetails);
    //   } else {
    //     setStatus({ success: false, message: result.message || "Something went wrong." });
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   setStatus({ success: false, message: "Failed to connect to the server." });
    // }
  
    setButtonText("Send");
  };
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                  style={{ width: "75%" }}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName} // ✅ Fixed Typo
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

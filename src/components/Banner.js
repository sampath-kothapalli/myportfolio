import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/myimage.jpg";  // Your image path
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';  // Keep animate.css for text animations
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["[Data Analyst]"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Image on the left side without animation */}
          <Col xs={12} md={6} xl={4}>
            <img src={headerImg} alt="Header Img" style={{ width: "90%" }} />
          </Col>

          {/* Text on the right side with fade-in animation */}
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Sampath Kumar`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "[Data Analyst]" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a data enthusiast driven by a passion for transforming raw data into actionable insights that drive business success. My journey into data analytics stems from a deep curiosity to solve complex challenges and uncover meaningful trends.
                  </p>
                  <p>
                    Looking ahead, I am eager to take on a Data Analyst role, where I can combine my technical skills, analytical mindset, and collaborative approach to deliver impactful business outcomes. I’m dedicated to continuous learning and am excited to contribute to the data-driven transformation of businesses. Let’s connect and collaborate to unlock value through data-driven strategies!
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

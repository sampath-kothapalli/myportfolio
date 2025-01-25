import sql from "../assets/img/sql.png";
import tableau from "../assets/img/tableau.png";
import visualisation from "../assets/img/visualisation.png";
import analysis from "../assets/img/data-analyst.jpg";
import excel from "../assets/img/excel.png";
import Python from "../assets/img/python.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp-1.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p><br /> </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={sql} alt="SQL" className="skill-icon" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={tableau} alt="Tableau" className="skill-icon" />
                  <h5>Tableau</h5>
                </div>
                <div className="item">
                  <img src={Python} alt="Python" className="skill-icon" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={visualisation} alt="Data Visualization" className="skill-icon" />
                  <h5>Data Visualization</h5>
                </div>
                <div className="item">
                  <img src={analysis} alt="Data Analysis" className="skill-icon" />
                  <h5>Data Analysis</h5>
                </div>
                <div className="item">
                  <img src={excel} alt="MS Excel" className="skill-icon" />
                  <h5>MS Excel</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

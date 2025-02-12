import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pythonprojImg1 from "../assets/img/python-project-1.png";
import pythonprojImg2 from "../assets/img/python-project-2.jpg";
import pythonprojImg3 from "../assets/img/python-project-3.jpg";
import pythonprojImg4 from "../assets/img/python-project-4.jpg";
import pythonprojImg5 from "../assets/img/yulu.jpg"
import sqlprojImg1 from "../assets/img/sql-project-1.jpeg";
import sqlprojImg2 from "../assets/img/python-project-3.jpg";
import tableauprojImg1 from "../assets/img/dashboard-1.png";
import tableauprojImg2 from "../assets/img/dashboard-2.png";
import tableauprojImg3 from "../assets/img/dashboard-3.png";
import tableauprojImg4 from "../assets/img/dashboard-4.png";
import tableauprojImg5 from "../assets/img/dashboard-5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const pythonProjects = [
    {
      title: "CRM Analysis",
      description: "This project explores customer behavior in a large e-commerce dataset, uncovering comprehensive CRM data analysis, data preprocessing and EDA techniques to refine customer interaction, and implemented RFM scoring for dynamic customer segmentation, revealing actionable insights on purchasing patterns",
      imgUrl: pythonprojImg4,
      githubLink: "https://github.com/sampath-kothapalli/crm-analysis/blob/main/README.md",
    },
    {
      title: "Yulu Bike-Sharing Data Analysis: EDA & Hypothesis Testing",
      description: "This project explores Yulu bike rental data to analyze user demand, seasonal trends, and environmental influences on ride volume. Additionally, hypothesis testing was performed to statistically validate key assumptions regarding rental patterns.",
      imgUrl: pythonprojImg5,
      githubLink: "https://github.com/sampath-kothapalli/bike-sharing-data-analysis/blob/main/README.md",
    },
    {
      title: "Netflix Visualization for Content Strategy",
      description: "Analyzing the data and generate insights that could help Netflix in deciding which type of shows/movies to produce and how they can grow the business in different countries.",
      imgUrl: pythonprojImg1,
      githubLink: "https://github.com/sampath-kothapalli/netflix-visualization/blob/main/README.md",
    },
    {
      title: "Customer Profiling of Aerofit Treadmill",
      description: "Creating comprehensive customer profiles for each AeroFit treadmill product through descriptive analytics. Analyzing conditional and marginal probabilities to discern customer characteristics, facilitating improved product recommendations and informed business decisions.",
      imgUrl: pythonprojImg2,
      githubLink: "https://github.com/sampath-kothapalli/customer-profiling-for-treadmill",
    },
    {
      title: "Walmart Data Analysis",
      description: "Comprehensive analysis of customer purchase behavior during the Black Friday sales event at Walmart Inc. Extracting valuable insights that can assist the management team at Walmart Inc. in making data-driven decisions.",
      imgUrl: pythonprojImg3,
      githubLink: "https://github.com/sampath-kothapalli/walmart",
    },

  ];

  const tableauProjects = [
    {
      title: "Tableau Dashboard for Sales & Profit Analysis",
      description: "The dashboard offers a comprehensive analysis of various KPIs such as sales trends, top customers, and product categories. Users can explore data extensively by region, category, or segment. Equipped with filters, the dashboard allows for customized views catering to different business needs.",
      imgUrl: tableauprojImg1,
      githubLink: "https://public.tableau.com/app/profile/sai.sampath.kumar.kothapalli/viz/SuperstoreSalesProfitAnalysis_17032689183530/Dashboard1",
    },
    {
      title: "Wine Sales Insights",
      description: "Created a dynamic Tableau Dashboard for insights into of Australia's wine sales revenue , providing a comprehensive view of the market.",
      imgUrl: tableauprojImg2,
      githubLink: "https://public.tableau.com/app/profile/sai.sampath.kumar.kothapalli/viz/AustraliasWineRevenueInsights/Dashboard1",
    },
    {
      title: "HR Insights Dashboard",
      description: "Created a dynamic Tableau Dashboard to seamlessly facilitate user exploration of HR insights, providing a comprehensive overview of human resources data.",
      imgUrl: tableauprojImg3,
      githubLink: "https://public.tableau.com/app/profile/sai.sampath.kumar.kothapalli/viz/HRInsightsDashboard_17029204910890/Dashboard1",
    },
    {
      title: "Netflix Insights",
      description: "	Created a dynamic Tableau Dashboard facilitating user exploration of Netflix movie insights seamlessly",
      imgUrl: tableauprojImg4,
      githubLink: "https://public.tableau.com/app/profile/sai.sampath.kumar.kothapalli/viz/NetflixInsights_17026618666560/Dashboard1",
    },
    {
      title: "Retail Store Sales Analysis",
      description: "CSales Dashboard empowers emerging businesses with actionable insights, paving the way for strategic growth and enhanced profitability",
      imgUrl: tableauprojImg5,
      githubLink: "https://public.tableau.com/app/profile/sai.sampath.kumar.kothapalli/viz/RetailStoreInteractiveInsights/InteractiveDashboard",
    },
  ];

  const sqlProjects = [
    {
      title: "Ecommerce Sales Trends (SQL)",
      description: "This project emphasize on exploratory data analysis (EDA) and hypothesis testing on two comprehensive datasets one containing information on customers visiting the shopping site for purchase and another that has demographic, purchase, and marketing information about the group of people.",
      imgUrl: sqlprojImg1,
      githubLink: "https://github.com/sampath-kothapalli/ecommerce-sales-trends",
    },
    {
      title: "SQL Data Aggregation",
      description: "Complex Query Writing",
      imgUrl: pythonprojImg1,
      githubLink: "https://github.com/username/sql-aggregation",
    },
  ];

  const machineLearningProjects = [
    {
      title: "Will be added soon",
      description: "Linear regression Model",
      imgUrl: pythonprojImg2,
      githubLink: "",
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A curated collection of data analysis projects showcasing my expertise in data cleaning, exploratory analysis, and insightful visualization, delivering actionable insights to solve complex business challenges.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 d-flex justify-content-center align-items-center" id="pills-tab"> */}
                    <Nav variant="pills" className="nav-pills mb-5 d-flex justify-content-between flex-wrap" id="pills-tab">

                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="first">Python</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="second">Tableau</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="third">SQL</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="flex-fill text-center">
                        <Nav.Link eventKey="fourth">Machine Learning</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Python Tab */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            pythonProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      {/* Tableau Tab */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            tableauProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      {/* SQL Tab */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            sqlProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      {/* Machine Learning Tab */}
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {
                            machineLearningProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

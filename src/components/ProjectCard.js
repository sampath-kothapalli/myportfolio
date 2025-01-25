import { Col } from "react-bootstrap";



export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  const descriptionParts = description.split("Skills Used:");
  return (
    <Col xs={12} md={6} className="mb-4">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
        <h4>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h4>
          <p style={{ color: "white" }}>{descriptionParts}</p>
          {descriptionParts[1] && <p style={{ color: "white" }}><strong>Skills Used:</strong> {descriptionParts[1]}</p>}
        </div>
      </div>
    </Col>
  );
};

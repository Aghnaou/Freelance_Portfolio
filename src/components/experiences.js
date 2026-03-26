import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experiences = () => {
  const [selectedExp, setSelectedExp] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Java Developer - Research Assistant",
      company: "Oracle",
      location: "Casablanca, Morocco",
      period: "January 2025 - September 2025",
      type: "Internship",
      description: [
        "Designed and implemented a backend feature allowing users to unlink Intercompany Cross Charge Journals (ICCJs) directly from the NetSuite interface.",
        "Ensured financial data integrity by respecting accounting period constraints, permission rules, and guaranteeing atomicity of database operations.",
        "Set up a comprehensive testing strategy: unit tests, component tests and E2E tests, ensuring the reliability of the feature in production."
      ],
      technologies: ["Java", "NetSuite ERP", "SuiteQL", "Oracle Database", "JUnit", "Mockito", "Git", "GitLab", "Jira", "TeamCity"]
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "Royal Air Maroc",
      location: "Casablanca, Morocco",
      period: "June 2024 - August 2024",
      type: "Internship",
      description: [
        "Built a web application aimed at promoting sustainable tourism and natural destinations.",
        "Exploration and booking of eco-friendly trips through interactive itineraries.",
        "User management with secure authentication and real-time reviews.",
        "Integration of secure online payments for bookings."
      ],
      technologies: ["NodeJs", "Express", "MongoDB", "Mongoose", "Pug", "Visual Studio", "Git", "Github"]
    }
  ];

  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Professional Experience</h2>
                  <p>
                    Discover my professional journey through my experiences at Oracle and Royal Air Maroc.
                    Each role helped me develop strong skills in software development,
                    from backend design to complex system integration.
                  </p>
                  <div className="experience-content">
                    <Row>
                      <Col md={4}>
                        <div className="experience-tabs">
                          {experiences.map((exp, index) => (
                            <div
                              key={exp.id}
                              className={`experience-tab ${selectedExp === index ? 'active' : ''}`}
                              onClick={() => setSelectedExp(index)}
                            >
                              <h5>{exp.title}</h5>
                              <span className="company">{exp.company}</span>
                              <span className="period">{exp.period}</span>
                            </div>
                          ))}
                        </div>
                      </Col>
                      <Col md={8}>
                        <div className="experience-details">
                          <div className="experience-header">
                            <h3>{experiences[selectedExp].title}</h3>
                            <div className="experience-meta">
                              <span className="company-name">{experiences[selectedExp].company}</span>
                              <span className="location">{experiences[selectedExp].location}</span>
                              <span className="period">{experiences[selectedExp].period}</span>
                              <span className="type">{experiences[selectedExp].type}</span>
                            </div>
                          </div>
                          <div className="experience-description">
                            <h4>Key responsibilities:</h4>
                            <ul>
                              {experiences[selectedExp].description.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="experience-technologies">
                            <h4>Technologies used:</h4>
                            <div className="tech-tags">
                              {experiences[selectedExp].technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

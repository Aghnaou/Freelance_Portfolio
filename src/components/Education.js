import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Academic Background</h2>
                  <p>My academic journey that built a solid foundation in software engineering.</p>
                  <div className="education-timeline">
                    <div className="education-card">
                      <div className="education-year">2022 — 2025</div>
                      <div className="education-content">
                        <h3>Software Engineering Degree</h3>
                        <h4>National Institute of Posts and Telecommunications (INPT)</h4>
                        <p>In-depth training in software solution design and development, backend/frontend development, database management and application integration.</p>
                        <div className="education-tags">
                          <span>Java</span><span>Spring Boot</span><span>Angular</span>
                          <span>Microservices</span><span>AI</span>
                        </div>
                      </div>
                    </div>
                    <div className="education-card">
                      <div className="education-year">2020 — 2022</div>
                      <div className="education-content">
                        <h3>CPGE — Preparatory Classes MP</h3>
                        <h4>Lycée Réda Slaoui · Agadir</h4>
                        <p>Intensive preparatory classes for engineering schools, Mathematics and Physics track. Rigorous training in mathematics, physics and algorithms.</p>
                        <div className="education-tags">
                          <span>Mathematics</span><span>Physics</span><span>Algorithms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

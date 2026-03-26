import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} sm={12} className="footer-brand">
            <img src={logo2} alt="Mohamed Aghnaou" className="footer-logo" />
            <h4>MOHAMED AGHNAOU</h4>
            <p className="footer-subtitle">AI Integration Engineer · Freelancer</p>
            <p className="footer-description">
              I build intelligent AI systems, RAG pipelines and full-stack web apps
              that solve real business problems. Available for freelance projects worldwide.
            </p>
          </Col>

          <Col lg={4} md={6} sm={12} className="footer-contact">
            <h5>Contact</h5>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:aghnaoumohamed@gmail.com">aghnaoumohamed@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+212762557446">+212 762 557 446</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Morocco · Available Worldwide</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://www.linkedin.com/in/mohamed-aghnaou" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🏆</span>
                <a href="https://www.upwork.com/freelancers/~yourprofile" target="_blank" rel="noopener noreferrer">Hire me on Upwork</a>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} sm={12} className="footer-links">
            <h5>Availability</h5>
            <div className="opportunity-status">
              <div className="status-indicator">
                <span className="status-dot available"></span>
                <span>Available for Projects · $20/hr</span>
              </div>
              <p className="status-description">
                Open to freelance projects in AI integration, RAG systems, fullstack development
                and LLM integrations. I respond within a few hours.
              </p>
            </div>
            <h5>Navigation</h5>
            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experiences">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#connect">Hire Me</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={6} className="footer-social">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamed-aghnaou" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/aghnaoumohamed" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              <a href="mailto:aghnaoumohamed@gmail.com"><img src={navIcon3} alt="Email" /></a>
            </div>
          </Col>
          <Col md={6} className="footer-copyright">
            <p>&copy; 2025 Mohamed Aghnaou. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

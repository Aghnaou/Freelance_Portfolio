import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profil from "../assets/img/profil3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["AI Integration Engineer", "RAG & Chatbot Builder", "Fullstack Developer", "Java & Python Expert"];
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      setText(updatedText);
      if (isDeleting) setDelta(prevDelta => prevDelta / 2);
      if (!isDeleting && updatedText === fullText) { setIsDeleting(true); setDelta(period); }
      else if (isDeleting && updatedText === '') { setIsDeleting(false); setLoopNum(loopNum + 1); setDelta(500); }
    }
    let ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, period])

  return (
    <section className="banner modern-banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                <div className="banner-content">
                  <div className="banner-badges">
                    <span className="available-badge">🟢 Available for Projects</span>
                    <span className="rate-badge">💰 $20/hr</span>
                  </div>

                  <h1 className="modern-title">
                    <span className="greeting">Hi! I'm</span>
                    <span className="name-highlight">MOHAMED AGHNAOU</span>
                    <span className="role-container">
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </span>
                  </h1>

                  <div className="description-container">
                    <p className="main-description">
                      Is your business sitting on data it can't use? I turn it into <strong>intelligent AI systems</strong>. I build <strong>AI chatbots, RAG pipelines</strong> and <strong>smart APIs</strong> that connect to your real systems — not just demo toys. With experience at <strong>Oracle</strong> building enterprise-grade solutions inside NetSuite ERP, I deliver production-ready code that scales.
                    </p>
                    <div className="expertise-highlights">
                      <div className="highlight-item">
                        <span className="highlight-icon">🤖</span>
                        <span>AI Chatbots connected to your data (RAG + LangChain + OpenAI)</span>
                      </div>
                      <div className="highlight-item">
                        <span className="highlight-icon">⚙️</span>
                        <span>LLM integrations into existing Java / Python backends</span>
                      </div>
                      <div className="highlight-item">
                        <span className="highlight-icon">💻</span>
                        <span>Full-stack web apps (React, Angular, Spring Boot, Node.js)</span>
                      </div>
                      <div className="highlight-item">
                        <span className="highlight-icon">🌍</span>
                        <span>Communicates clearly in English, French & Arabic</span>
                      </div>
                    </div>
                  </div>

                  <div className="banner-buttons">
                    <a href="#connect" className="hire-btn">📩 Hire Me</a>
                    <button onClick={() => {
                      const link = document.createElement('a');
                      link.href = 'CV_MOHAMED_AGHNAOU.pdf';
                      link.download = 'CV_Mohamed_Aghnaou.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }} className="cv-btn">📄 Download CV</button>
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <div className="profile-image-container">
                    <img src={profil} alt="Mohamed Aghnaou" className="profile-image"/>
                    <div className="image-decoration"></div>
                    <div className="upwork-badge">
                      <span className="upwork-icon">🏆</span>
                      <div>
                        <div className="upwork-title">Available</div>
                        <div className="upwork-sub">AI Integration Engineer</div>
                      </div>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

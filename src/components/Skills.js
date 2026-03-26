import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedCards, setAnimatedCards] = useState(new Set());

  const skillsData = [
    { id: 1, title: "Generative AI & LLM", category: "ai", level: 88, icon: "🤖", color: "#0ea5e9", description: "LLM, Prompt Engineering, RAG, Multimodal AI, OpenAI API, LLaMA, Spring AI, LangChain" },
    { id: 2, title: "AI Agents & Automation", category: "ai", level: 85, icon: "🧠", color: "#06b6d4", description: "Agentic AI, Model Context Protocol (MCP), Tool Calling, workflow orchestration, FAISS, ChromaDB" },
    { id: 3, title: "Backend Development", category: "backend", level: 90, icon: "⚙️", color: "#0284c7", description: "Java, JEE, Spring Boot, Spring Security, Spring Cloud, Spring Data, Keycloak, NodeJs, Express, FastAPI" },
    { id: 4, title: "Frontend Development", category: "frontend", level: 85, icon: "💻", color: "#38bdf8", description: "Angular, ReactJs, Next.js, HTML, Tailwind CSS, Bootstrap" },
    { id: 5, title: "DevOps & Cloud", category: "devops", level: 80, icon: "🐳", color: "#0891b2", description: "Docker, Kubernetes, Kafka, GitLab CI/CD, Jenkins" },
    { id: 6, title: "Databases", category: "database", level: 88, icon: "🗄️", color: "#0e7490", description: "PostgreSQL, MySQL, MongoDB, Oracle Database, SQL Server, Vector DBs (FAISS, ChromaDB)" },
    { id: 7, title: "Software Architecture", category: "architecture", level: 83, icon: "🏗️", color: "#155e75", description: "Microservices, Event Driven Architecture, CQRS, Saga Pattern, OAuth2.0, REST APIs, GraphQL, DDD" },
    { id: 8, title: "Soft Skills", category: "soft-skills", level: 92, icon: "🌟", color: "#0ea5e9", description: "Clear communication in English, French & Arabic · Problem-solving · Fast learner · Autonomous" }
  ];

  const categories = [
    { id: "all", label: "All", icon: "🚀" },
    { id: "ai", label: "AI & LLM", icon: "🤖" },
    { id: "backend", label: "Back-End", icon: "⚙️" },
    { id: "frontend", label: "Front-End", icon: "💻" },
    { id: "devops", label: "DevOps", icon: "🐳" },
    { id: "database", label: "Databases", icon: "🗄️" },
    { id: "architecture", label: "Architecture", icon: "🏗️" },
    { id: "soft-skills", label: "Soft Skills", icon: "🌟" }
  ];

  const filteredSkills = activeCategory === "all" ? skillsData : skillsData.filter(s => s.category === activeCategory);
  const handleCardAnimation = (id) => setAnimatedCards(prev => new Set([...prev, id]));

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-bx">
                    <h2>My Tech Stack</h2>
                    <p>
                      Every tool I use is chosen to deliver real results for clients.
                      From AI pipelines to production-ready APIs — here's what I bring to your project.
                    </p>
                    <div className="skill-categories">
                      {categories.map((c) => (
                        <button key={c.id} className={`category-btn ${activeCategory === c.id ? 'active' : ''}`} onClick={() => setActiveCategory(c.id)}>
                          <span className="category-icon">{c.icon}</span>
                          <span className="category-label">{c.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="skills-grid">
                      {filteredSkills.map((skill, index) => (
                        <TrackVisibility key={skill.id} partialVisibility={true}>
                          {({ isVisible }) => {
                            if (isVisible && !animatedCards.has(skill.id)) setTimeout(() => handleCardAnimation(skill.id), index * 100);
                            return (
                              <div className={`skill-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: `${index * 0.1}s`, '--skill-color': skill.color }}>
                                <div className="skill-icon">{skill.icon}</div>
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                                <div className="skill-level">
                                  <div className="level-label"><span>Level</span><span>{skill.level}%</span></div>
                                  <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: isVisible ? `${skill.level}%` : '0%', backgroundColor: skill.color, transition: 'width 1.5s ease-in-out' }}></div>
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </TrackVisibility>
                      ))}
                    </div>
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

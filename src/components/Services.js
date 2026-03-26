import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🤖",
      title: "AI Chatbots & RAG Systems",
      description: "I build intelligent chatbots that answer questions from YOUR data — documents, databases, knowledge bases. Using RAG pipelines, LangChain and OpenAI API to give your users accurate, context-aware answers.",
      tags: ["LangChain", "OpenAI API", "RAG", "Vector DBs", "Python"],
      color: "#0ea5e9"
    },
    {
      id: 2,
      icon: "📄",
      title: "Document Intelligence",
      description: "Turn your PDFs, reports and internal docs into a searchable, queryable knowledge base. Users ask questions in plain English — the system finds the right answer instantly.",
      tags: ["PDF Parsing", "FAISS", "ChromaDB", "LLaMA", "Embeddings"],
      color: "#06b6d4"
    },
    {
      id: 3,
      icon: "⚙️",
      title: "LLM Integration into Backends",
      description: "Already have a Java or Python backend? I plug LLM capabilities directly into your existing system — adding AI features without rebuilding your whole stack.",
      tags: ["Java", "Spring Boot", "Spring AI", "Python", "FastAPI", "REST API"],
      color: "#0284c7"
    },
    {
      id: 4,
      icon: "🌐",
      title: "REST APIs & Microservices with AI",
      description: "I design and build scalable REST APIs and microservice architectures with AI capabilities built in — production-ready, well-tested and deployable with Docker.",
      tags: ["Spring Boot", "Node.js", "Docker", "PostgreSQL", "MongoDB", "MCP"],
      color: "#0891b2"
    },
    {
      id: 5,
      icon: "💻",
      title: "Fullstack Web Applications",
      description: "From idea to deployed product — I build complete web applications with modern frontends and robust backends. Clean UI, secure auth, real-time features and solid APIs.",
      tags: ["React", "Angular", "Next.js", "Spring Boot", "Node.js", "MongoDB"],
      color: "#38bdf8"
    }
  ];

  return (
    <section className="services" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>What I Build For You</h2>
                  <p>
                    I don't just write code — I understand your business problem first.
                    Here's what I can deliver for your project.
                  </p>
                  <div className="services-grid">
                    {services.map((service, index) => (
                      <TrackVisibility key={service.id} partialVisibility={true}>
                        {({ isVisible }) => (
                          <div
                            className={`service-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s`, '--service-color': service.color }}
                          >
                            <div className="service-icon">{service.icon}</div>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            <div className="service-tags">
                              {service.tags.map((tag, i) => (
                                <span key={i} className="service-tag">{tag}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </TrackVisibility>
                    ))}

                    {/* CTA card */}
                    <TrackVisibility partialVisibility={true}>
                      {({ isVisible }) => (
                        <div className={`service-card service-cta-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: '0.5s' }}>
                          <div className="service-icon">💬</div>
                          <h4>Not sure what you need?</h4>
                          <p>Tell me about your project and I'll suggest the best approach. I respond within a few hours.</p>
                          <a href="#connect" className="service-cta-btn">Let's Talk →</a>
                        </div>
                      )}
                    </TrackVisibility>
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

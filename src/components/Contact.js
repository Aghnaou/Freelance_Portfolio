import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    projectDescription: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => setFormDetails({ ...formDetails, [category]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    emailjs.send(serviceID, templateID, formDetails, userID)
      .then(() => { setButtonText("Send Message"); setFormDetails(formInitialDetails); setStatus({ success: true, message: "Message sent! I'll get back to you within a few hours." }); })
      .catch(() => { setButtonText("Send Message"); setStatus({ success: false, message: "Something went wrong, please try again." }); });
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '20px',
    color: '#fff',
    marginBottom: '8px',
    padding: '18px 26px',
    fontWeight: '500',
    fontSize: '18px',
    letterSpacing: '0.8px',
    display: 'block',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    ...inputStyle,
    borderRadius: '15px',
    resize: 'vertical',
    lineHeight: '1.6',
    fontFamily: 'inherit',
  };

  const selectStyle = {
    ...inputStyle,
    borderRadius: '20px',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23ffffff' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 20px center',
    backgroundSize: '12px',
    paddingRight: '45px',
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact" />}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Let's Work Together</h2>

                  <form onSubmit={handleSubmit} style={{ width: '100%' }}>

                    {/* Row 1: First + Last Name */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '0' }}>
                      <input
                        style={{ ...inputStyle, flex: 1 }}
                        type="text"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      />
                      <input
                        style={{ ...inputStyle, flex: 1 }}
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Last Name"
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      />
                    </div>

                    {/* Row 2: Email + Phone */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        style={{ ...inputStyle, flex: 1 }}
                        type="email"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                      />
                      <input
                        style={{ ...inputStyle, flex: 1 }}
                        type="tel"
                        value={formDetails.phone}
                        placeholder="Phone Number (optional)"
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                      />
                    </div>

                    {/* Row 3: Project Type */}
                    <select
                      style={selectStyle}
                      value={formDetails.projectType}
                      onChange={(e) => onFormUpdate('projectType', e.target.value)}
                    >
                      <option value="" disabled style={{ background: '#1a1a1a' }}>🗂️ Select Project Type</option>
                      <option value="ai-chatbot-rag" style={{ background: '#1a1a1a' }}>🤖 AI Chatbot & RAG System</option>
                      <option value="document-intelligence" style={{ background: '#1a1a1a' }}>📄 Document Intelligence (PDF / Knowledge Base Q&A)</option>
                      <option value="llm-integration" style={{ background: '#1a1a1a' }}>⚙️ LLM Integration into existing Backend</option>
                      <option value="api-microservices" style={{ background: '#1a1a1a' }}>🌐 REST API & Microservices with AI</option>
                      <option value="fullstack-app" style={{ background: '#1a1a1a' }}>💻 Fullstack Web Application</option>
                      <option value="other" style={{ background: '#1a1a1a' }}>🔧 Other</option>
                    </select>

                    {/* Row 4: Project Description — BIG */}
                    <textarea
                      style={{ ...textareaStyle, height: '200px', minHeight: '200px' }}
                      value={formDetails.projectDescription}
                      placeholder="📝 Describe your project — what problem are you solving? What do you need built? Any existing systems to integrate with?"
                      onChange={(e) => onFormUpdate('projectDescription', e.target.value)}
                    ></textarea>

                    {/* Row 5: Extra message — BIG */}
                    <textarea
                      style={{ ...textareaStyle, height: '150px', minHeight: '150px' }}
                      value={formDetails.message}
                      placeholder="💬 Anything else? (timeline, budget, questions...)"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    ></textarea>

                    {/* Submit */}
                    <button type="submit" style={{ marginTop: '10px' }}>
                      <span>{buttonText}</span>
                    </button>

                    {status.message &&
                      <p style={{ marginTop: '10px' }} className={status.success === false ? "danger" : "success"}>
                        {status.message}
                      </p>
                    }

                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
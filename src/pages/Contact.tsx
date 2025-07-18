import { useState } from "react";
import { useEnquiries } from "../hooks/useSupabase";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const Contact = () => {
  const { addEnquiry } = useEnquiries();
  const [formData, setFormData] = useState({
    parent_name: "",
    child_name: "",
    child_age: "",
    program_interest: "",
    contact_number: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await addEnquiry(formData);

      if (error) {
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
        setFormData({
          parent_name: "",
          child_name: "",
          child_age: "",
          program_interest: "",
          contact_number: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-with-background hero-contact"
        style={{ padding: "80px 0", textAlign: "center" }}
      >
        <Container>
          <div className="hero-content">
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "24px",
                color: "rgba(255,255,255,1)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,1)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                fontWeight: "500",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Get in touch with us for any inquiries, feedback, or assistance.
              We are here to help you and your child have the best experience at
              Avirat Leading Toddlers!
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information & Form */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Contact Information */}
            <Card style={{ padding: "48px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "32px",
                  color: "#292524",
                }}
              >
                Get In Touch
              </h2>

              <div style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#014A98",
                    marginBottom: "16px",
                  }}
                >
                  School Address
                </h3>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  1-A/B Gayatri Tenament
                  <br />
                  Near K.K.Nagar Cross Road
                  <br />
                  Ghatlodia, Ahmedabad - 380061
                  <br />
                  Gujarat, India
                </p>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#014A98",
                    marginBottom: "16px",
                  }}
                >
                  Contact Numbers
                </h3>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "8px",
                  }}
                >
                  <strong>Landline:</strong> 079-27600075
                </p>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  <strong>Mobile:</strong> +91-9723991122
                </p>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#014A98",
                    marginBottom: "16px",
                  }}
                >
                  Email & Website
                </h3>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "8px",
                  }}
                >
                  <strong>Email:</strong> info@aviratinternationalschools.com
                </p>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  <strong>Website:</strong> www.aviratinternationalschools.com
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#014A98",
                    marginBottom: "16px",
                  }}
                >
                  School Timings
                </h3>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "8px",
                  }}
                >
                  <strong>PG and Nursery:</strong> 9:00 AM - 12:30 PM
                </p>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "8px",
                  }}
                >
                  <strong>Jr. KG and Sr. KG:</strong> 8:00 AM - 12:30 PM
                </p>
                <p style={{ color: "#57534e", lineHeight: "1.6" }}>
                  <strong>Visiting Hours:</strong> 9:00 AM - 11:30 AM
                </p>
              </div>
            </Card>

            {/* Admission Inquiry Form */}
            <Card style={{ padding: "48px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "32px",
                  color: "#292524",
                }}
              >
                Admission Inquiry
              </h2>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div
                  style={{
                    background: "#dcfce7",
                    border: "1px solid #bbf7d0",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "24px",
                    color: "#166534",
                  }}
                >
                  <h4 style={{ margin: "0 0 8px", fontSize: "16px" }}>
                    Thank you for your inquiry!
                  </h4>
                  <p style={{ margin: "0", fontSize: "14px" }}>
                    We have received your admission inquiry and will contact you
                    within 24 hours. Our team will reach out to discuss the next
                    steps and answer any questions you may have.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  style={{
                    background: "#fee2e2",
                    border: "1px solid #fecaca",
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "24px",
                    color: "#991b1b",
                  }}
                >
                  <p style={{ margin: "0", fontSize: "14px" }}>
                    There was an error submitting your inquiry. Please try again
                    or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#292524",
                    }}
                  >
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    value={formData.parent_name}
                    onChange={(e) =>
                      setFormData({ ...formData, parent_name: e.target.value })
                    }
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      marginBottom: "20px",
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#292524",
                    }}
                  >
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    value={formData.child_name}
                    onChange={(e) =>
                      setFormData({ ...formData, child_name: e.target.value })
                    }
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      marginBottom: "20px",
                    }}
                    placeholder="Enter child's full name"
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Child's Age *
                    </label>
                    <select
                      value={formData.child_age}
                      onChange={(e) =>
                        setFormData({ ...formData, child_age: e.target.value })
                      }
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                      }}
                    >
                      <option value="">Select Age</option>
                      <option value="2">2 Years</option>
                      <option value="3">3 Years</option>
                      <option value="4">4 Years</option>
                      <option value="5">5 Years</option>
                      <option value="6">6 Years</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Program Interest *
                    </label>
                    <select
                      value={formData.program_interest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          program_interest: e.target.value,
                        })
                      }
                      required
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                      }}
                    >
                      <option value="">Select Program</option>
                      <option value="ukg">Playgroup</option>
                      <option value="nursery">Nursery</option>
                      <option value="junior-kg">Junior KG</option>
                      <option value="senior-kg">Senior KG</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#292524",
                    }}
                  >
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.contact_number}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contact_number: e.target.value,
                      })
                    }
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      marginBottom: "20px",
                    }}
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#292524",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      marginBottom: "20px",
                    }}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#292524",
                    }}
                  >
                    Message/Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      resize: "vertical",
                      marginBottom: "20px",
                      fontFamily: "inherit",
                    }}
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: isSubmitting ? "#94a3b8" : "#ff8787",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    marginTop: "16px",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </Card>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section section-bg">
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Find Us
          </h2>
          <Card style={{ padding: "24px" }}>
            <div
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6390767612284!2d72.54791437496654!3d23.073690079137954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e836f3190c783%3A0xd6d974a6a15cb597!2sAvirat%20Learning%20Tree!5e0!3m2!1sen!2sin!4v1752376840132!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
};

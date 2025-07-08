import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #dbe4ff 0%, #e5dbff 100%)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1
            style={{ fontSize: "3rem", marginBottom: "24px", color: "#292524" }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#57534e",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Get in touch with us for admissions, inquiries, or any questions
            about our programs.
          </p>
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
                  📍 1-A/B Gayatri Tenament
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
                  📞 <strong>Landline:</strong> 079-27600075
                </p>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  📱 <strong>Mobile:</strong> +91-9723991122
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
                  ✉️ <strong>Email:</strong> info@aviratinternationalschools.com
                </p>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                  }}
                >
                  🌐 <strong>Website:</strong>{" "}
                  www.aviratinternationalschools.com
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
                  🕘 <strong>Morning Session:</strong> 9:00 AM - 12:00 PM
                </p>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "8px",
                  }}
                >
                  🕐 <strong>Afternoon Session:</strong> 1:00 PM - 4:00 PM
                </p>
                <p style={{ color: "#57534e", lineHeight: "1.6" }}>
                  🕓 <strong>Extended Care:</strong> 4:00 PM - 6:00 PM
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

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
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
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
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
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                    }}
                    placeholder="Enter child's full name"
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
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
                      <option value="nursery">Nursery</option>
                      <option value="junior-kg">Junior KG</option>
                      <option value="senior-kg">Senior KG</option>
                      <option value="ukg">UKG</option>
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
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
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
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
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
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                      resize: "vertical",
                    }}
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "#ff8787",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    marginTop: "16px",
                  }}
                >
                  Submit Inquiry
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
                background: "#dbe4ff",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#014A98",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Google Maps Integration
              <br />
              (1-A/B Gayatri Tenament, Ghatlodia, Ahmedabad)
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
};

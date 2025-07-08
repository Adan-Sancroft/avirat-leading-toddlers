import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const Career = () => {
  const openings = [
    {
      title: "Preschool Teacher",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Passionate educator to nurture young minds through play-based learning and creative activities.",
    },
    {
      title: "Assistant Teacher",
      type: "Full-time",
      experience: "1-2 years",
      description:
        "Support lead teachers in classroom activities and help create a positive learning environment.",
    },
    {
      title: "Art & Craft Instructor",
      type: "Part-time",
      experience: "1-3 years",
      description:
        "Creative professional to conduct art and craft sessions for children aged 2-6 years.",
    },
    {
      title: "Music Teacher",
      type: "Part-time",
      experience: "2-5 years",
      description:
        "Music enthusiast to teach songs, rhymes, and basic musical concepts to young learners.",
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Professional development opportunities",
    "Friendly and supportive work environment",
    "Performance-based incentives",
    "Annual increments and bonuses",
    "Training and skill development programs",
  ];

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
            Join Our Team
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#57534e",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Be part of our mission to provide quality early childhood education
            and make a difference in young lives.
          </p>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Why Choose Avirat?
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Card style={{ padding: "48px", textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#014A98",
                  marginBottom: "24px",
                }}
              >
                Shape Tomorrow's Leaders Today
              </h3>
              <p
                style={{
                  color: "#57534e",
                  lineHeight: "1.8",
                  marginBottom: "32px",
                  fontSize: "1.1rem",
                }}
              >
                At Avirat Leading Toddlers, we believe our teachers are the
                foundation of quality education. Join a team that values
                creativity, innovation, and professional growth while making a
                meaningful impact on children's lives during their most
                formative years.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "24px",
                }}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "20px",
                      background: "#f8fafc",
                      borderRadius: "12px",
                      border: "2px solid #dbe4ff",
                    }}
                  >
                    <span style={{ color: "#014A98", fontWeight: "600" }}>
                      ✓ {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Current Openings */}
      <section className="section section-bg">
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Current Openings
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {openings.map((job, index) => (
              <Card key={index} style={{ padding: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "16px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#292524",
                    }}
                  >
                    {job.title}
                  </h3>
                  <span
                    style={{
                      background: "#014A98",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {job.type}
                  </span>
                </div>
                <p style={{ color: "#57534e", marginBottom: "12px" }}>
                  <strong>Experience:</strong> {job.experience}
                </p>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.6",
                    marginBottom: "24px",
                  }}
                >
                  {job.description}
                </p>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#ff8787",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Apply Now
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Process */}
      <section className="section">
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Application Process
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Card style={{ padding: "48px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "32px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#dbe4ff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      color: "#014A98",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    1
                  </div>
                  <h4 style={{ marginBottom: "8px", color: "#292524" }}>
                    Submit Application
                  </h4>
                  <p style={{ color: "#57534e", fontSize: "14px" }}>
                    Send your resume and cover letter
                  </p>
                </div>

                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#dbe4ff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      color: "#014A98",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    2
                  </div>
                  <h4 style={{ marginBottom: "8px", color: "#292524" }}>
                    Initial Screening
                  </h4>
                  <p style={{ color: "#57534e", fontSize: "14px" }}>
                    Phone/video interview
                  </p>
                </div>

                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#dbe4ff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      color: "#014A98",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    3
                  </div>
                  <h4 style={{ marginBottom: "8px", color: "#292524" }}>
                    In-person Interview
                  </h4>
                  <p style={{ color: "#57534e", fontSize: "14px" }}>
                    Meet our team and visit the school
                  </p>
                </div>

                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#dbe4ff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      color: "#014A98",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    4
                  </div>
                  <h4 style={{ marginBottom: "8px", color: "#292524" }}>
                    Welcome Aboard
                  </h4>
                  <p style={{ color: "#57534e", fontSize: "14px" }}>
                    Orientation and training
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
};

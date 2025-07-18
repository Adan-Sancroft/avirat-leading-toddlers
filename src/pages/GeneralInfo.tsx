import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { useStaff } from "../hooks/useSupabase";

export const GeneralInfo = () => {
  const { staff, loading } = useStaff();

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>Loading...</div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-with-background hero-general-info"
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
              General Information
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "rgba(255,255,255,1)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Everything you need to know about Avirat Leading Toddlers
            </p>
          </div>
        </Container>
      </section>

      {/* School Information */}
      <section
        id="school-info"
        className="section"
        style={{ backgroundColor: "#f9fdfdff" }}
      >
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            School Information
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Card style={{ padding: "48px" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "24px",
                  color: "#014A98",
                }}
              >
                About Our School
              </h3>
              <p
                style={{
                  color: "#57534e",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  fontSize: "18px",
                }}
              >
                Avirat Leading Toddlers is a premier early childhood education
                center established with the vision of providing quality
                education to children aged 2-6 years. Our school follows a
                play-based learning approach that helps children develop
                essential skills through fun and engaging activities.
              </p>
              <p
                style={{
                  color: "#57534e",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  fontSize: "18px",
                }}
              >
                We believe in nurturing each child's unique potential while
                providing a safe, supportive, and stimulating environment. Our
                curriculum is designed to promote cognitive, social, emotional,
                and physical development through age-appropriate activities and
                experiences.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "24px",
                  marginTop: "32px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    background: "#f8fafc",
                    borderRadius: "12px",
                  }}
                >
                  <h4 style={{ color: "#014A98", marginBottom: "8px" }}>
                    Established
                  </h4>
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>2017</p>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    background: "#f8fafc",
                    borderRadius: "12px",
                  }}
                >
                  <h4 style={{ color: "#014A98", marginBottom: "8px" }}>
                    Age Group
                  </h4>
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    2-6 Years
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    background: "#f8fafc",
                    borderRadius: "12px",
                  }}
                >
                  <h4 style={{ color: "#014A98", marginBottom: "8px" }}>
                    Students
                  </h4>
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>100+</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Staff List */}
      <section id="staff" className="section section-bg">
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Our Staff
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {staff.map((staffMember) => (
              <Card
                key={staffMember.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "32px 24px",
                }}
              >
                <div
                  style={{
                    width: "150px",
                    height: "180px",
                    borderRadius: "12px",
                    background: staffMember.image_url
                      ? `url(${staffMember.image_url})`
                      : "#dbe4ff",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    color: "#014A98",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {!staffMember.image_url && "Photo"}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#292524",
                    marginBottom: "8px",
                  }}
                >
                  {staffMember.name}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#014A98",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  {staffMember.designation}
                </p>
                <p style={{ fontSize: "14px", color: "#78716c" }}>
                  {staffMember.qualification}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* School Rules
      <section id="rules" className="section">
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            School Rules
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Card style={{ padding: "48px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                  gap: "32px",
                }}
              >
                <div>
                  <h3
                    style={{
                      color: "#014A98",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                    }}
                  >
                    General Rules
                  </h3>
                  <ul
                    style={{
                      color: "#57534e",
                      lineHeight: "1.8",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      All children must be accompanied by parents/guardians
                      during drop-off and pick-up
                    </li>
                    <li>School uniform is mandatory for all students</li>
                    <li>
                      Regular attendance is encouraged for better learning
                      outcomes
                    </li>
                    <li>
                      Parents and guardians must attend all parent-teacher
                      meetings
                    </li>
                    <li>
                      Parents and guardians are not allowed to visit the
                      children in class without prior permission
                    </li>
                    <li>
                      Parents are requested to inform the school in advance if
                      the child will remain absent for longer duration.
                    </li>
                    <li>
                      Please check almanac and school bag on a daily basis.
                    </li>
                    <li>Please avoid fancy hairstyles and accessories.</li>
                    <li>
                      Parents must inform about any allergies or medical
                      conditions
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* School Norms 
      <section id="norms" className="section section-bg">
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            School Norms
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Card style={{ padding: "48px" }}>
              <div style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    color: "#014A98",
                    marginBottom: "20px",
                    fontSize: "1.3rem",
                  }}
                >
                  Timing
                </h3>
                <p
                  style={{
                    color: "#57534e",
                    lineHeight: "1.8",
                    marginBottom: "16px",
                  }}
                >
                  <strong>School Timing (PG and Nursery):</strong> 9:00 AM -
                  12:30 PM
                  <br />
                  <strong>School Timing (Jr. KG and Sr. KG):</strong> 8:00 AM -
                  12:30 PM
                  <br />
                  <strong>Meeting with Director/Principal:</strong> 9:00 AM -
                  11:00 AM
                  <br />
                  <strong>Meeting with Coordinator:</strong> 9:00 AM - 11:30 AM
                </p>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    color: "#014A98",
                    marginBottom: "20px",
                    fontSize: "1.3rem",
                  }}
                >
                  Dress Code
                </h3>
                <p style={{ color: "#57534e", lineHeight: "1.8" }}>
                  All students are required to wear the prescribed school
                  uniform. Comfortable shoes are mandatory. Hair should be
                  neatly tied. The school ID card must be worn at all times.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    color: "#014A98",
                    marginBottom: "20px",
                    fontSize: "1.3rem",
                  }}
                >
                  Parent Communication
                </h3>
                <p style={{ color: "#57534e", lineHeight: "1.8" }}>
                  Regular parent-teacher meetings are conducted monthly.
                  Communication about daily school activities is regularly
                  shared with parents. Parents are also encouraged to
                  participate in school events.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section> */}

      {/* School Rules & Norms - Combined Section */}
      <section
        id="rules-norms"
        className="section"
        style={{ backgroundColor: "#f9fdfdff" }}
      >
        <Container>
          {/* <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            School Rules & Norms
          </h2> */}
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
              }}
            >
              {/* School Rules Card */}
              <Card style={{ padding: "48px" }}>
                <h3
                  style={{
                    color: "#014A98",
                    marginBottom: "24px",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  School Rules
                </h3>
                <div>
                  <h4
                    style={{
                      color: "#014A98",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                    }}
                  >
                    General Rules
                  </h4>
                  <ul
                    style={{
                      color: "#57534e",
                      lineHeight: "1.8",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  >
                    <li>
                      All children must be accompanied by parents/guardians
                      during drop-off and pick-up
                    </li>
                    <li>School uniform is mandatory for all students</li>
                    <li>
                      Regular attendance is encouraged for better learning
                      outcomes
                    </li>
                    <li>
                      Parents and guardians must attend all parent-teacher
                      meetings
                    </li>
                    <li>
                      Parents and guardians are not allowed to visit the
                      children in class without prior permission
                    </li>
                    <li>
                      Parents are requested to inform the school in advance if
                      the child will remain absent for longer duration.
                    </li>
                    <li>
                      Please check almanac and school bag on a daily basis.
                    </li>
                    <li>Please avoid fancy hairstyles and accessories.</li>
                    <li>
                      Parents must inform about any allergies or medical
                      conditions
                    </li>
                  </ul>
                </div>
              </Card>

              {/* School Norms Card */}
              <Card style={{ padding: "48px" }}>
                <h3
                  style={{
                    color: "#014A98",
                    marginBottom: "24px",
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  School Norms
                </h3>

                <div style={{ marginBottom: "32px" }}>
                  <h4
                    style={{
                      color: "#014A98",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                    }}
                  >
                    Timing
                  </h4>
                  <p
                    style={{
                      color: "#57534e",
                      lineHeight: "1.8",
                      marginBottom: "16px",
                      fontSize: "18px",
                    }}
                  >
                    <strong>School Timing (PG and Nursery):</strong> 9:00 AM -
                    12:30 PM
                    <br />
                    <strong>School Timing (Jr. KG and Sr. KG):</strong> 8:00 AM
                    - 12:30 PM
                    <br />
                    <strong>Meeting with Director/Principal:</strong> 9:00 AM -
                    11:00 AM
                    <br />
                    <strong>Meeting with Coordinator:</strong> 9:00 AM - 11:30
                    AM
                  </p>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <h4
                    style={{
                      color: "#014A98",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                    }}
                  >
                    Dress Code
                  </h4>
                  <p
                    style={{
                      color: "#57534e",
                      lineHeight: "1.8",
                      fontSize: "18px",
                    }}
                  >
                    All students are required to wear the prescribed school
                    uniform. Comfortable shoes are mandatory. Hair should be
                    neatly tied. The school ID card must be worn at all times.
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      color: "#014A98",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                    }}
                  >
                    Parent Communication
                  </h4>
                  <p
                    style={{
                      color: "#57534e",
                      lineHeight: "1.8",
                      fontSize: "18px",
                    }}
                  >
                    Regular parent-teacher meetings are conducted monthly.
                    Communication about daily school activities is regularly
                    shared with parents. Parents are also encouraged to
                    participate in school events.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Admissions */}
      <section
        id="admissions"
        className="section"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <Container>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Admissions
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Card style={{ padding: "48px" }}>
              <h3
                style={{
                  color: "#014A98",
                  marginBottom: "24px",
                  fontSize: "1.5rem",
                }}
              >
                Admission Process
              </h3>
              <div style={{ marginBottom: "32px" }}>
                <h4 style={{ color: "#292524", marginBottom: "16px" }}>
                  Eligibility Criteria
                </h4>
                <ul
                  style={{
                    color: "#57534e",
                    lineHeight: "1.8",
                    paddingLeft: "20px",
                    marginBottom: "24px",
                    fontSize: "18px",
                  }}
                >
                  <li>Playgroup: 2-3 years</li>
                  <li>Nursery: 3-4 years</li>
                  <li>Junior KG: 4-5 years</li>
                  <li>Senior KG: 5-6 years</li>
                </ul>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <h4 style={{ color: "#292524", marginBottom: "16px" }}>
                  Required Documents
                </h4>
                <ul
                  style={{
                    color: "#57534e",
                    lineHeight: "1.8",
                    paddingLeft: "20px",
                    fontSize: "18px",
                  }}
                >
                  <li>Birth Certificate</li>
                  <li>Aadhar Card</li>
                  <li>Parent ID Proof</li>
                  <li>Recent Photographs</li>
                  <li>Previous School Records (if applicable)</li>
                </ul>
              </div>

              <div style={{ textAlign: "center", marginTop: "32px" }}>
                <a
                  href="/contact"
                  className="btn btn-primary"
                  style={{ fontSize: "16px", padding: "16px 32px" }}
                >
                  Apply for Admission
                </a>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
};

import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const GeneralInfo = () => {
  // Staff data with placeholders
  const staffData = [
    {
      name: "Priya Sharma",
      designation: "Senior Teacher",
      qualification: "B.Ed, M.A",
    },
    {
      name: "Rajesh Kumar",
      designation: "Physical Education",
      qualification: "B.P.Ed",
    },
    { name: "Anita Patel", designation: "Art Teacher", qualification: "B.F.A" },
    {
      name: "Suresh Gupta",
      designation: "Music Teacher",
      qualification: "B.Mus",
    },
    {
      name: "Kavita Singh",
      designation: "Dance Teacher",
      qualification: "B.A Dance",
    },
    {
      name: "Mohan Verma",
      designation: "Sports Coach",
      qualification: "B.P.Ed",
    },
    {
      name: "Sunita Joshi",
      designation: "Nursery Teacher",
      qualification: "B.Ed",
    },
    {
      name: "Ramesh Shah",
      designation: "Security Guard",
      qualification: "12th Pass",
    },
    { name: "Geeta Rani", designation: "Ayah", qualification: "10th Pass" },
    { name: "Vijay Kumar", designation: "Peon", qualification: "8th Pass" },
    { name: "Meera Devi", designation: "Cook", qualification: "5th Pass" },
    { name: "Ashok Singh", designation: "Gardener", qualification: "8th Pass" },
    {
      name: "Ritu Sharma",
      designation: "Receptionist",
      qualification: "B.Com",
    },
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
            General Information
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#57534e" }}>
            Everything you need to know about Avirat Leading Toddlers
          </p>
        </Container>
      </section>

      {/* School Information */}
      <section id="school-info" className="section">
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
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>2015</p>
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
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>150+</p>
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
                    Teachers
                  </h4>
                  <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>15+</p>
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {staffData.map((staff, index) => (
              <Card
                key={index}
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
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "#dbe4ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    color: "#014A98",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Photo
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#292524",
                    marginBottom: "8px",
                  }}
                >
                  {staff.name}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#014A98",
                    fontWeight: "600",
                    marginBottom: "4px",
                  }}
                >
                  {staff.designation}
                </p>
                <p style={{ fontSize: "14px", color: "#78716c" }}>
                  {staff.qualification}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* School Rules */}
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
                    <li>Mobile phones are not allowed for children</li>
                    <li>
                      Parents must inform about any allergies or medical
                      conditions
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    style={{
                      color: "#014A98",
                      marginBottom: "20px",
                      fontSize: "1.3rem",
                    }}
                  >
                    Safety Rules
                  </h3>
                  <ul
                    style={{
                      color: "#57534e",
                      lineHeight: "1.8",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      Children should not bring sharp objects or toys from home
                    </li>
                    <li>Proper hygiene must be maintained at all times</li>
                    <li>
                      Emergency contact information must be updated regularly
                    </li>
                    <li>Children with fever or illness should stay at home</li>
                    <li>All visitors must register at the reception</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* School Norms */}
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
                  <strong>Morning Session:</strong> 9:00 AM - 12:00 PM
                  <br />
                  <strong>Afternoon Session:</strong> 1:00 PM - 4:00 PM
                  <br />
                  <strong>Extended Care:</strong> 4:00 PM - 6:00 PM (Optional)
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
                  neatly tied. Jewelry should be minimal and safe for young
                  children.
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
                  Regular parent-teacher meetings are conducted monthly. Daily
                  reports are shared through our communication app. Parents are
                  encouraged to participate in school events and activities.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Admissions */}
      <section id="admissions" className="section">
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
                  }}
                >
                  <li>Nursery: 2-3 years</li>
                  <li>Junior KG: 3-4 years</li>
                  <li>Senior KG: 4-5 years</li>
                  <li>UKG: 5-6 years</li>
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
                  }}
                >
                  <li>Birth Certificate</li>
                  <li>Vaccination Certificate</li>
                  <li>Recent Photographs</li>
                  <li>Previous School Records (if applicable)</li>
                  <li>Parent ID Proof</li>
                </ul>
              </div>

              <div style={{ textAlign: "center", marginTop: "32px" }}>
                <a
                  href="#contact"
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

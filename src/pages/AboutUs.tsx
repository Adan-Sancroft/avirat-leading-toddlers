import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const AboutUs = () => {
  const goals = [
    {
      title: "Strengthen Educational Foundations",
      description:
        "Provide comprehensive management solutions for schools and colleges, ensuring smooth operations and sustainable growth.",
    },
    {
      title: "Advance Institutional Development",
      description:
        "Support institutions with legal, technical, and recruitment expertise for seamless expansion and efficiency.",
    },
    {
      title: "Enhance Student & Educator Success",
      description:
        "Offer specialized counseling, mentorship, and training for students, teachers, and academic leaders.",
    },
    {
      title: "Bridge Education & Industry",
      description:
        "Introduce strategic planning and consulting services to align educational institutions with modern academic and industry standards.",
    },
    {
      title: "Promote Excellence in Learning",
      description:
        "Foster a culture of continuous improvement, research, and innovation in education through expert-driven initiatives.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <div className="hero-icon">AL</div>
          <h1>AVIRAT LEADING TODDLERS</h1>
          <p className="hero-subtitle">"Nurturing Young Minds with Care"</p>
          <p className="hero-info">Nursery to UKG • English Medium</p>
          <div className="phone-buttons">
            <a href="tel:079-27600075" className="phone-btn">
              📞 079-27600075
            </a>
            <a href="tel:+91-9723991122" className="phone-btn">
              📱 +91-9723991122
            </a>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section">
        <Container>
          <div className="two-column">
            <div>
              <div className="image-placeholder">School Building</div>
            </div>
            <div>
              <div className="section-header">
                <div className="section-icon">🎯</div>
                <h2>Our Mission</h2>
              </div>
              <div className="quote">
                "To empower educational institutions with innovative strategies,
                expert guidance, and holistic support, fostering academic
                excellence and institutional growth for a brighter future."
              </div>
              <p
                style={{
                  color: "#57534e",
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                At Avirat Leading Toddlers, we believe that every child deserves
                a nurturing environment where they can explore, learn, and grow.
                Our mission drives everything we do, from our carefully designed
                curriculum to our passionate team of educators.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section section-bg">
        <Container>
          <div className="two-column">
            <div>
              <div className="section-header">
                <div className="section-icon">👁️</div>
                <h2>Our Vision</h2>
              </div>
              <div className="quote">
                "To be a trusted leader in educational consulting, creating
                sustainable, future-ready institutions that nurture knowledge,
                innovation, and success at every level."
              </div>
              <p
                style={{
                  color: "#57534e",
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                We envision a future where every child has access to quality
                early childhood education that prepares them not just
                academically, but emotionally and socially for the challenges
                and opportunities ahead.
              </p>
            </div>
            <div>
              <div className="image-placeholder">Children Learning</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Goals Section */}
      <section className="section">
        <Container>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>
              Our Goals
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#57534e",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.7",
              }}
            >
              We are committed to achieving excellence in early childhood
              education through these fundamental goals that guide our daily
              practices and long-term vision.
            </p>
          </div>

          <div className="goals-grid">
            {goals.map((goal, index) => (
              <Card key={index} className="goal-card">
                <div className="goal-icon">
                  <span style={{ fontSize: "32px" }}>
                    {index === 0
                      ? "📚"
                      : index === 1
                      ? "👥"
                      : index === 2
                      ? "🏆"
                      : index === 3
                      ? "🎯"
                      : "❤️"}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "16px",
                    color: "#292524",
                  }}
                >
                  {goal.title}
                </h3>
                <p style={{ color: "#57534e", lineHeight: "1.6" }}>
                  {goal.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Director's Message */}
      <section id="director" className="section">
        <Container>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>
              Message from the Director
            </h2>
          </div>

          <div className="message-card">
            <div>
              <div className="message-photo">Dr. Seema Singh</div>
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <h3>Dr. Seema Singh</h3>
                <p className="message-title">Director</p>
                <p className="message-org">Avirat Learning Tree</p>
              </div>
            </div>

            <div className="message-content">
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#292524",
                  marginBottom: "24px",
                }}
              >
                Dear Avirat Learning Tree Family,
              </p>
              <p className="message-text">
                I warmly welcome you to the Annual General Meeting for the year
                2024-25. Each AGM is not just a formal gathering, but a
                reflection of the shared dreams, values, and progress we've
                achieved together.
              </p>
              <p className="message-text">
                Avirat Learning Tree is more than a playschool — it is a garden
                of dreams, where every tiny seed (our students) is nurtured with
                care, respect, and the freedom to bloom at its own pace. As
                Director, I have had the unique privilege of watching not only
                the children evolve, but also our institution grow steadily in
                vision, scope, and excellence.
              </p>
              <p className="message-text">
                As we look forward to the year ahead, our commitment remains
                rooted in continuous improvement. We aim to introduce more
                structured assessment methods while staying play-focused, and
                offer more workshops for staff development.
              </p>
              <div className="message-signature">
                <p style={{ fontWeight: "600", marginBottom: "8px" }}>
                  With heartfelt gratitude,
                </p>
                <p
                  style={{
                    color: "#014A98",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  Dr. Seema Singh
                </p>
                <p style={{ color: "#78716c" }}>
                  Director, Avirat Learning Tree
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Principal's Message */}
      <section id="principal" className="section section-bg">
        <Container>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>
              Message from the Principal
            </h2>
          </div>

          <div className="message-card">
            <div>
              <div className="message-photo">Dr. Uma Singh</div>
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <h3>Dr. Uma Singh</h3>
                <p className="message-title">Principal</p>
                <p className="message-org">Avirat Learning Tree</p>
              </div>
            </div>

            <div className="message-content">
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#292524",
                  marginBottom: "24px",
                }}
              >
                Dear Avirat Learning Tree Family,
              </p>
              <p className="message-text">
                As we gather once again for the Annual General Meeting for the
                academic year 2024-25, my heart is filled with gratitude, pride,
                and joy. This year has been yet another remarkable chapter in
                our shared journey of nurturing the early years of our
                children's education.
              </p>
              <p className="message-text">
                Playschool is more than just a starting point of education —
                it's where the very foundation of a child's personality, values,
                curiosity, and social understanding begins to form. Here at
                Avirat, we have always prioritized a child-first approach in all
                our practices.
              </p>
              <p className="message-text">
                This year, our little ones participated in a variety of hands-on
                and experiential activities that enhanced their motor skills,
                social awareness, and cognitive development. From cultural
                celebrations to life skills activities, every moment has been a
                learning opportunity filled with joy and discovery.
              </p>
              <div className="message-signature">
                <p style={{ fontWeight: "600", marginBottom: "8px" }}>
                  Warm regards,
                </p>
                <p
                  style={{
                    color: "#014A98",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  Dr. Uma Singh
                </p>
                <p style={{ color: "#78716c" }}>
                  Principal, Avirat Learning Tree
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

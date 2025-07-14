import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import {
  Target,
  Shield,
  Award,
  Globe,
  Users,
  HandHeart,
  Focus,
  Eye,
} from "lucide-react";

const goalIcons = [
  Target, // Child-Centric Learning
  Shield, // Safe and Nurturing Environment
  Award, // Integrity and Transparency
  Globe, // Holistic Development
  Users, // Inclusive Learning
  HandHeart, // Community Engagement
];

export const AboutUs = () => {
  const goals = [
    {
      title: "Child-Centric Learning",
      description:
        "Ensuring every child's individual learning needs are met through personalized, play-based education.",
    },
    {
      title: "Safe and Nurturing Environment",
      description:
        "Creating a space where children feel secure, valued, and encouraged to explore.",
    },
    {
      title: "Integrity and Transparency",
      description:
        "Upholding high standards in education, operations, and partnerships.",
    },
    {
      title: "Holistic Development",
      description:
        "Fostering cognitive, emotional, and social growth in children through expertly driven curriculum.",
    },
    {
      title: "Inclusive Learning",
      description:
        "Ensuring every child, regardless of their background or abilities, receives equal opportunities to learn and grow.",
    },
    {
      title: "Community Engagement",
      description:
        "Encouraging active participation from parents, educators, and local communities to enhance the learning experience.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-with-background hero-about-us"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <Container>
          <div className="hero-content">
            <img
              src="https://trgvnfgftnftedxiasyg.supabase.co/storage/v1/object/public/home-images//logo-main.png"
              alt="Avirat Leading Toddlers Logo"
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "24px",
                objectFit: "cover",
                margin: "0 auto 32px",
                boxShadow: "0 20px 40px rgba(1, 74, 152, 0.3)",
                display: "block",
              }}
            />
            <h1
              style={{
                fontSize: "4rem",
                marginBottom: "24px",
                color: "#292524",
              }}
            >
              AVIRAT LEADING TODDLERS
            </h1>
            <p
              className="hero-subtitle"
              style={{
                fontSize: "1.5rem",
                color: "rgba(14, 11, 72, 1)",
                fontWeight: "600",
                marginBottom: "16px",
              }}
            >
              "Nurturing Young Minds with Care"
            </p>
            <p
              className="hero-info"
              style={{
                fontSize: "1.1rem",
                color: "#000000ff",
                marginBottom: "48px",
              }}
            >
              <strong>Playgroup to UKG • English Medium</strong>
            </p>
            {/* <div
              className="phone-buttons"
              style={{
                display: "flex",
                gap: "24px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="tel:079-27600075" className="phone-btn">
                📞 079-27600075
              </a>
              <a href="tel:+91-9723991122" className="phone-btn">
                📱 +91-9723991122
              </a>
            </div> */}
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section">
        <Container>
          <div className="two-column">
            <div>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background: `url('https://trgvnfgftnftedxiasyg.supabase.co/storage/v1/object/public/home-images//children-learning1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#014A98",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              ></div>
            </div>
            <div>
              <div className="section-header">
                <div className="section-icon">
                  <Focus size={32} color="#014A98" strokeWidth={1.5} />
                </div>
                <h2>Our Mission</h2>
              </div>
              <div className="quote">
                "Knowledge is Life - Knowledge is familiarity, awareness or
                understanding of someone or something, which is acquired through
                experience or education."
              </div>
              <p
                style={{
                  color: "#57534e",
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                We at Avirat Leading Toddlers strive to provide a caring and
                happy environment to children, where they can learn and grow
                through play. We emphasize on good habits, etiquettes and
                understanding the needs of children.
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
                <div className="section-icon">
                  <Eye size={32} color="#014A98" strokeWidth={1.5} />
                </div>
                <h2>Our Vision</h2>
              </div>
              <div className="quote">
                "To create and nurture a learning culture with students,
                teachers and parents, where every child is empowered to reach
                their full potential."
              </div>
              <p
                style={{
                  color: "#57534e",
                  fontSize: "18px",
                  lineHeight: "1.7",
                }}
              >
                Children inherently love to learn and they grow by sharing their
                discoveries with each other, their teachers and parents.
                Learning begins with the self, followed by building
                relationships with nature and society. This is the journey of
                true education, and life.
              </p>
            </div>
            <div>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  background: `url('https://trgvnfgftnftedxiasyg.supabase.co/storage/v1/object/public/home-images//vision1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 55%",
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#014A98",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              ></div>
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
            {goals.map((goal, index) => {
              const IconComponent = goalIcons[index];
              return (
                <Card key={index} className="goal-card">
                  <div className="goal-icon">
                    <IconComponent
                      size={32}
                      color="#014A98"
                      strokeWidth={1.5}
                    />
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
              );
            })}
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
              <div
                className="message-photo"
                style={{
                  background: `url('https://trgvnfgftnftedxiasyg.supabase.co/storage/v1/object/public/home-images//director.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                {/* <h3>Dr. Seema Singh</h3>
                <p className="message-title">Director</p>
                <p className="message-org">Avirat Leading Toddlers</p> */}
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
                Dear Avirat Leading Toddlers Family,
              </p>
              <p className="message-text">
                Avirat is a guiding star which ushers the knowledge seekers into
                the realm of success and fame. Education is no longer confined
                only within the four walls of a classroom. All round efforts are
                required to provide qualitative, activity and value based
                education in our school.
              </p>
              <p className="message-text">
                Avirat Leading Toddlers is more than a playschool — it is a
                garden of dreams, where every tiny seed (our students) is
                nurtured with care, respect, and the freedom to bloom at its own
                pace. As Director, I have had the unique privilege of watching
                not only the children evolve, but also our institution grow
                steadily in vision, scope, and excellence.
              </p>
              <p className="message-text">
                As we look forward to the years ahead of us, our commitment
                remains rooted in continuous improvement. We aim for continuous
                improvement in structured assessment methods while staying
                play-focused, and also encourage our staff for professional
                development to ensure that we are always at the forefront of
                early childhood education.
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
                  Director, Avirat Leading Toddlers
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
              <div
                className="message-photo"
                style={{
                  background: `url('https://trgvnfgftnftedxiasyg.supabase.co/storage/v1/object/public/home-images//principal.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                {/* <h3>Dr. Uma Singh</h3>
                 <p className="message-title">Principal</p>
                <p className="message-org">Avirat Leading Toddlers</p> */}
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
                Dear Avirat Leading Toddlers Family,
              </p>
              <p className="message-text">
                My heart is filled with gratitude, pride, and joy to be a part
                of the remarkable journey that we at Avirat have embarked upon.
                It has taken the sincere efforts from both staff and parents to
                ensure the best quality for our shared journey of nurturing the
                early years of our children's education.
              </p>
              <p className="message-text">
                Playschool is more than just a starting point of education —
                it's where the very foundation of a child's personality, values,
                curiosity, and social understanding begins to form. Here at
                Avirat, we have always prioritized a child-first approach in all
                our practices.
              </p>
              <p className="message-text">
                As we continue to grow, our focus remains on providing a safe,
                nurturing, and stimulating environment where every child can
                thrive. We are committed to fostering a culture of respect,
                inclusivity, and continuous learning for both our students and
                staff.
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
                  Principal, Avirat Leading Toddlers
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

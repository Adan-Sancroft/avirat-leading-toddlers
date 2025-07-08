import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const Blogs = () => {
  const blogs = [
    {
      title: "Creating Safe Spaces for Learning",
      author: "Dr. Seema Singh",
      description:
        "The psychology behind creating nurturing environments that encourage exploration, creativity, and confidence-building in early childhood educational settings.",
    },
    {
      title: "The Importance of Play-Based Learning",
      author: "Dr. Uma Singh",
      description:
        "Exploring how play-based learning methodologies enhance cognitive development and social skills in early childhood education, creating lasting foundations for future academic success.",
    },
    {
      title: "Building Emotional Intelligence in Toddlers",
      author: "Priya Sharma",
      description:
        "Understanding the crucial role of emotional intelligence development in young children and practical strategies for nurturing empathy, self-awareness, and social connections.",
    },
    {
      title: "Art Therapy for Young Minds",
      author: "Anita Patel",
      description:
        "How creative expression through art and craft activities serves as a therapeutic tool for emotional development and stress relief in preschool children.",
    },
    {
      title: "Music and Cognitive Development",
      author: "Suresh Gupta",
      description:
        "Scientific insights into how musical activities and rhythm-based learning enhance brain development, memory retention, and language acquisition in toddlers.",
    },
    {
      title: "Outdoor Learning Adventures",
      author: "Rajesh Kumar",
      description:
        "The benefits of nature-based education and outdoor activities in promoting physical health, environmental awareness, and scientific curiosity in young learners.",
    },
    {
      title: "Parent-Teacher Partnership",
      author: "Kavita Singh",
      description:
        "Building strong collaborative relationships between families and educators to create consistent support systems for children's holistic development and growth.",
    },
    {
      title: "Nutrition and Brain Development",
      author: "Sunita Joshi",
      description:
        "Understanding the vital connection between proper nutrition and cognitive development, with practical tips for healthy eating habits in early childhood.",
    },
    {
      title: "Managing Separation Anxiety",
      author: "Mohan Verma",
      description:
        "Gentle strategies and evidence-based approaches to help children and parents navigate the transition to school and overcome separation anxiety challenges.",
    },
    {
      title: "Inclusive Education Practices",
      author: "Geeta Rani",
      description:
        "Creating welcoming and accessible learning environments that celebrate diversity and ensure every child feels valued, supported, and included in the classroom.",
    },
    {
      title: "Technology in Early Education",
      author: "Ramesh Shah",
      description:
        "Balanced approaches to integrating age-appropriate technology tools while maintaining hands-on, interactive learning experiences for young children.",
    },
    {
      title: "Preparing for Primary School",
      author: "Meera Devi",
      description:
        "Essential skills and readiness indicators that help smooth the transition from preschool to primary education, ensuring children feel confident and prepared.",
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
            Educational Blogs
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#57534e",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Insights, tips, and expert advice from our experienced educators on
            early childhood development and learning.
          </p>
        </Container>
      </section>

      {/* Blogs Grid */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {blogs.map((blog, index) => (
              <Card
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "32px 24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#292524",
                    marginBottom: "16px",
                  }}
                >
                  {blog.title}
                </h3>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "#dbe4ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: "#014A98",
                    fontWeight: "bold",
                    fontSize: "12px",
                    alignSelf: "center",
                  }}
                >
                  Author Photo
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#014A98",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  By {blog.author}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#57534e",
                    lineHeight: "1.6",
                    flexGrow: 1,
                    marginBottom: "16px",
                  }}
                >
                  {blog.description}
                </p>
                <button
                  style={{
                    padding: "8px 16px",
                    background: "#ff8787",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  Read Full Blog
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const NewspaperCoverage = () => {
  const coverage = [
    {
      title: "Best Preschool Award 2024",
      description:
        "Avirat Leading Toddlers wins the prestigious 'Best Early Childhood Education Center' award for excellence in child development and innovative teaching methods.",
    },
    {
      title: "Annual Sports Day Success",
      description:
        "Over 200 children participated in our colorful sports day event, showcasing their athletic skills and team spirit in various fun-filled competitions.",
    },
    {
      title: "Environmental Awareness Campaign",
      description:
        "Our little eco-warriors plant 100 saplings in the school garden as part of the 'Green Future' initiative, teaching environmental responsibility.",
    },
    {
      title: "Cultural Festival Celebration",
      description:
        "Students showcase diverse Indian traditions through dance, music, and art during the annual cultural festival, promoting unity in diversity.",
    },
    {
      title: "Parent Appreciation Event",
      description:
        "Heartwarming ceremony honoring parents for their support and partnership in children's education journey, strengthening school-family bonds.",
    },
    {
      title: "STEM Learning Workshop",
      description:
        "Introduction of age-appropriate science, technology, engineering, and math activities to spark curiosity and logical thinking in young minds.",
    },
    {
      title: "Community Service Project",
      description:
        "Children participate in 'Help Our Helpers' initiative, distributing food and supplies to support staff, teaching empathy and gratitude.",
    },
    {
      title: "Art Exhibition Opening",
      description:
        "Student artwork displayed in local community center, showcasing creativity and artistic development of our young learners to the public.",
    },
    {
      title: "Health & Nutrition Drive",
      description:
        "Successful implementation of healthy eating habits program with nutritionist consultation and organic meal planning for children.",
    },
    {
      title: "Reading Championship",
      description:
        "Launch of 'Little Readers' program encouraging daily reading habits, with students completing over 500 books collectively this month.",
    },
    {
      title: "Safety Drill Training",
      description:
        "Comprehensive safety education program conducted with local fire department, teaching children emergency procedures and safety awareness.",
    },
    {
      title: "Grandparents Day Special",
      description:
        "Intergenerational bonding event where grandparents share stories and traditions, creating beautiful memories and cultural connections.",
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
            Newspaper Coverage
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#57534e",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Celebrating our achievements and milestones as featured in local and
            national media publications.
          </p>
        </Container>
      </section>

      {/* Coverage Grid */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {coverage.map((article, index) => (
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
                  {article.title}
                </h3>
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    background: "#dbe4ff",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    color: "#014A98",
                    fontWeight: "bold",
                  }}
                >
                  Newspaper Photo
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#57534e",
                    lineHeight: "1.6",
                    flexGrow: 1,
                    marginBottom: "16px",
                  }}
                >
                  {article.description}
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
                  Read Full Article
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

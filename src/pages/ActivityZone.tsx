import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const ActivityZone = () => {
  const activities = [
    {
      title: "Creative Art & Craft",
      description:
        "Children explore their creativity through various art and craft activities, developing fine motor skills and artistic expression.",
    },
    {
      title: "Music & Movement",
      description:
        "Fun-filled music sessions with singing, dancing, and rhythm activities that enhance cognitive development and coordination.",
    },
    {
      title: "Story Time Magic",
      description:
        "Interactive storytelling sessions that build language skills, imagination, and listening abilities in young minds.",
    },
    {
      title: "Nature Exploration",
      description:
        "Outdoor activities and nature walks that connect children with the environment and promote scientific thinking.",
    },
    {
      title: "Building & Construction",
      description:
        "Block play and construction activities that develop spatial awareness, problem-solving, and engineering concepts.",
    },
    {
      title: "Sensory Play",
      description:
        "Hands-on sensory activities using different textures, colors, and materials to stimulate all five senses.",
    },
    {
      title: "Water Play Activities",
      description:
        "Safe and supervised water play sessions that teach basic science concepts while having fun.",
    },
    {
      title: "Dramatic Play Corner",
      description:
        "Role-playing activities that encourage social skills, communication, and emotional development.",
    },
    {
      title: "Garden to Table",
      description:
        "Simple gardening and cooking activities that teach children about healthy eating and nature.",
    },
    {
      title: "Festival Celebrations",
      description:
        "Cultural activities and festival celebrations that introduce children to traditions and diversity.",
    },
    {
      title: "Sports & Games",
      description:
        "Age-appropriate physical activities and games that promote gross motor development and teamwork.",
    },
    {
      title: "Science Experiments",
      description:
        "Simple and safe science experiments that spark curiosity and introduce basic scientific concepts.",
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
            Activity Zone
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#57534e",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Engaging and educational activities designed to nurture creativity,
            curiosity, and comprehensive development in young learners.
          </p>
        </Container>
      </section>

      {/* Activities Grid */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {activities.map((activity, index) => (
              <Card
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "32px 24px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    background: "#dbe4ff",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    color: "#014A98",
                    fontWeight: "bold",
                  }}
                >
                  Activity Photo
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#292524",
                    marginBottom: "12px",
                  }}
                >
                  {activity.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#57534e",
                    lineHeight: "1.6",
                    flexGrow: 1,
                  }}
                >
                  {activity.description}
                </p>
                <button
                  style={{
                    marginTop: "16px",
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
                  Learn More
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

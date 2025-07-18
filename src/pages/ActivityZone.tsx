import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { useActivities } from "../hooks/useSupabase";

export const ActivityZone = () => {
  const { activities, loading } = useActivities();

  // Filter only activities (not blogs or news)
  const activityList = activities.filter(
    (activity) => activity.type === "activity"
  );

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        Loading activities...
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-with-background hero-activities"
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
              Activity Zone
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                color: "rgba(255,255,255,1)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                fontWeight: "500",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Engaging and educational activities designed to nurture
              creativity, curiosity, and comprehensive development in young
              learners.
            </p>
          </div>
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
            {activityList.length > 0 ? (
              activityList.map((activity) => (
                <Card
                  key={activity.id}
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
                      background: activity.image_url
                        ? `url(${activity.image_url})`
                        : "#dbe4ff",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      color: "#014A98",
                      fontWeight: "bold",
                    }}
                  >
                    {!activity.image_url && "Activity Photo"}
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
                  <a
                    href={`/activity/${activity.slug}`}
                    style={{
                      display: "inline-block",
                      width: "auto", // ADD THIS
                      marginTop: "16px",
                      padding: "8px 16px",
                      background: "#ff8787",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Learn More
                  </a>
                </Card>
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "48px",
                  color: "#78716c",
                }}
              >
                <p>No activities found. Please check back later!</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

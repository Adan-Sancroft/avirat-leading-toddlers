import { useParams, useNavigate } from "react-router-dom";
import { useActivities } from "../hooks/useSupabase";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const ActivityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { activities, loading } = useActivities();

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>Loading...</div>
    );
  }

  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return (
      <div style={{ padding: "80px 0", textAlign: "center" }}>
        <Container>
          <h1>Activity Not Found</h1>
          <p>The activity you're looking for doesn't exist.</p>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </Container>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #dbe4ff 0%, #e5dbff 100%)",
          padding: "80px 0",
        }}
      >
        <Container>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "none",
              border: "none",
              color: "#014A98",
              marginBottom: "24px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
          <h1
            style={{ fontSize: "3rem", color: "#292524", marginBottom: "16px" }}
          >
            {activity.title}
          </h1>
          {activity.author && (
            <p style={{ fontSize: "1.2rem", color: "#57534e" }}>
              By {activity.author}
            </p>
          )}
        </Container>
      </section>

      {/* Content */}
      <section className="section">
        <Container>
          <Card
            style={{ padding: "48px", maxWidth: "800px", margin: "0 auto" }}
          >
            {activity.image_url && (
              <img
                src={activity.image_url}
                alt={activity.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "32px",
                }}
              />
            )}

            <div
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#292524",
              }}
            >
              {activity.full_content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: activity.full_content }}
                />
              ) : (
                <p>{activity.description}</p>
              )}
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
};

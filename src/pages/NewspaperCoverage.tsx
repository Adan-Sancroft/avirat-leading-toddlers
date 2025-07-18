import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { useActivities } from "../hooks/useSupabase";

export const NewspaperCoverage = () => {
  const { activities, loading } = useActivities();

  // Filter only news coverage
  const newsList = activities.filter((activity) => activity.type === "news");

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        Loading news coverage...
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
              AVIRAT TIMES
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
              Celebrating our achievements and community impact as featured in
              media publications. Discover how Avirat Leading Toddlers continues
              to make headlines for excellence in early childhood education.
            </p>
          </div>
        </Container>
      </section>

      {/* Coverage Grid */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {newsList.length > 0 ? (
              newsList.map((article) => (
                <Card
                  key={article.id}
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
                      background: article.image_url
                        ? `url(${article.image_url})`
                        : "#dbe4ff",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      color: "#014A98",
                      fontWeight: "bold",
                    }}
                  >
                    {!article.image_url && "Newspaper Photo"}
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
                  {/* <a
                    href={`/news/${article.slug}`}
                    style={{
                      display: "inline-block",
                      width: "auto",
                      padding: "8px 16px",
                      background: "#ff8787",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Read Full Article
                  </a> */}
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
                <p>No news coverage found. Please check back later!</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

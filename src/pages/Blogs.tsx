import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";
import { useActivities } from "../hooks/useSupabase";

export const Blogs = () => {
  const { activities, loading } = useActivities();

  // Filter only blogs
  const blogList = activities.filter((activity) => activity.type === "blog");

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        Loading blogs...
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
                color: "#292524",
              }}
            >
              Activity Zone
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#000",
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
            {blogList.length > 0 ? (
              blogList.map((blog) => (
                <Card
                  key={blog.id}
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
                    By {blog.author || "Admin"}
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
                  <a
                    href={`/blog/${blog.slug}`}
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
                    Read Full Blog
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
                <p>No blogs found. Please check back later!</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

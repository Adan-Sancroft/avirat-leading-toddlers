import { useAuth } from "../../hooks/useAuth";
import { useEnquiries, useStaff, useActivities } from "../../hooks/useSupabase";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { enquiries } = useEnquiries();
  const { staff } = useStaff();
  const { activities } = useActivities();

  const newEnquiries = enquiries.filter((e) => e.status === "new").length;
  const totalStaff = staff.length;
  const totalActivities = activities.length;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* Admin Header */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid #e2e8f0",
          padding: "16px 0",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(135deg, #014A98, #0066cc)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                AL
              </div>
              <div>
                <h1
                  style={{ fontSize: "1.5rem", margin: "0", color: "#292524" }}
                >
                  Admin Dashboard
                </h1>
                <p style={{ margin: "0", color: "#57534e", fontSize: "14px" }}>
                  Welcome back, {user?.email}
                </p>
              </div>
            </div>
            <Button variant="secondary" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <div style={{ padding: "32px 0" }}>
          {/* Stats Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            <Card style={{ padding: "24px", textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#014A98",
                  marginBottom: "8px",
                }}
              >
                {newEnquiries}
              </div>
              <p style={{ color: "#57534e", fontSize: "16px", margin: "0" }}>
                New Enquiries
              </p>
            </Card>

            <Card style={{ padding: "24px", textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#14b8a6",
                  marginBottom: "8px",
                }}
              >
                {totalStaff}
              </div>
              <p style={{ color: "#57534e", fontSize: "16px", margin: "0" }}>
                Staff Members
              </p>
            </Card>

            <Card style={{ padding: "24px", textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#f59e0b",
                  marginBottom: "8px",
                }}
              >
                {totalActivities}
              </div>
              <p style={{ color: "#57534e", fontSize: "16px", margin: "0" }}>
                Activities & Blogs
              </p>
            </Card>
          </div>

          {/* Quick Actions */}
          <div style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "24px",
                color: "#292524",
              }}
            >
              Quick Actions
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              <Card style={{ padding: "32px" }}>
                <h3 style={{ color: "#014A98", marginBottom: "16px" }}>
                  📝 Content Management
                </h3>
                <p style={{ color: "#57534e", marginBottom: "20px" }}>
                  Update mission, vision, and other page content
                </p>
                <Button variant="primary">
                  <a
                    href="/admin/content"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Manage Content
                  </a>
                </Button>
              </Card>

              <Card style={{ padding: "32px" }}>
                <h3 style={{ color: "#014A98", marginBottom: "16px" }}>
                  👥 Staff Management
                </h3>
                <p style={{ color: "#57534e", marginBottom: "20px" }}>
                  Add, edit, or remove staff members
                </p>
                <Button variant="primary">
                  <a
                    href="/admin/staff"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Manage Staff
                  </a>
                </Button>
              </Card>

              <Card style={{ padding: "32px" }}>
                <h3 style={{ color: "#014A98", marginBottom: "16px" }}>
                  🎨 Activities & Blogs
                </h3>
                <p style={{ color: "#57534e", marginBottom: "20px" }}>
                  Add new activities, blogs, and news items
                </p>
                <Button variant="primary">
                  <a
                    href="/admin/activities"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Manage Activities
                  </a>
                </Button>
              </Card>

              <Card style={{ padding: "32px" }}>
                <h3 style={{ color: "#014A98", marginBottom: "16px" }}>
                  🎨 Gallery Management
                </h3>
                <p style={{ color: "#57534e", marginBottom: "20px" }}>
                  Add and manage event photos and gallery images
                </p>
                <Button variant="primary">
                  <a
                    href="/admin/gallery"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Manage Gallery
                  </a>
                </Button>
              </Card>

              <Card style={{ padding: "32px" }}>
                <h3 style={{ color: "#014A98", marginBottom: "16px" }}>
                  📧 Enquiries
                </h3>
                <p style={{ color: "#57534e", marginBottom: "20px" }}>
                  View and manage admission enquiries
                </p>
                <Button variant="primary">
                  <a
                    href="/admin/enquiries"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    View Enquiries
                  </a>
                </Button>
              </Card>
            </div>
          </div>

          {/* Recent Enquiries */}
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "24px",
                color: "#292524",
              }}
            >
              Recent Enquiries
            </h2>
            <Card style={{ padding: "0", overflow: "hidden" }}>
              <div
                style={{ padding: "24px", borderBottom: "1px solid #e2e8f0" }}
              >
                <h3 style={{ margin: "0", color: "#292524" }}>
                  Latest Admission Requests
                </h3>
              </div>
              <div style={{ padding: "24px" }}>
                {enquiries.slice(0, 5).length > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {enquiries.slice(0, 5).map((enquiry) => (
                      <div
                        key={enquiry.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "16px",
                          background: "#f8fafc",
                          borderRadius: "8px",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              margin: "0",
                              fontWeight: "600",
                              color: "#292524",
                            }}
                          >
                            {enquiry.parent_name}
                          </p>
                          <p
                            style={{
                              margin: "4px 0 0",
                              color: "#57534e",
                              fontSize: "14px",
                            }}
                          >
                            Child: {enquiry.child_name} ({enquiry.child_age}{" "}
                            years) - {enquiry.program_interest}
                          </p>
                        </div>
                        <div
                          style={{
                            padding: "4px 12px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "600",
                            background:
                              enquiry.status === "new" ? "#dbeafe" : "#dcfce7",
                            color:
                              enquiry.status === "new" ? "#1e40af" : "#166534",
                          }}
                        >
                          {enquiry.status}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    style={{
                      color: "#78716c",
                      textAlign: "center",
                      margin: "32px 0",
                    }}
                  >
                    No enquiries yet
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

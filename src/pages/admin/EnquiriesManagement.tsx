// src/pages/admin/EnquiriesManagement.tsx
import { useState } from "react";
import { useEnquiries } from "../../hooks/useSupabase";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import type { Enquiry } from "../../types/database";

export const EnquiriesManagement = () => {
  const { enquiries, loading, updateEnquiryStatus } = useEnquiries();
  const [selectedStatus, setSelectedStatus] = useState<
    "all" | Enquiry["status"]
  >("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  const filteredEnquiries =
    selectedStatus === "all"
      ? enquiries
      : enquiries.filter((e) => e.status === selectedStatus);

  const handleStatusUpdate = async (id: string, status: Enquiry["status"]) => {
    await updateEnquiryStatus(id, status);
  };

  const getStatusColor = (status: Enquiry["status"]) => {
    switch (status) {
      case "new":
        return { bg: "#dbeafe", color: "#1e40af" };
      case "contacted":
        return { bg: "#fef3c7", color: "#92400e" };
      case "enrolled":
        return { bg: "#dcfce7", color: "#166534" };
      case "closed":
        return { bg: "#f3f4f6", color: "#374151" };
      default:
        return { bg: "#f3f4f6", color: "#374151" };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        <p>Loading enquiries...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* Header */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid #e2e8f0",
          padding: "24px 0",
        }}
      >
        <Container>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="/admin"
              style={{
                color: "#57534e",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              ← Back to Dashboard
            </a>
            <h1 style={{ fontSize: "2rem", margin: "0", color: "#292524" }}>
              Admission Enquiries
            </h1>
            <span
              style={{
                background: "#dbeafe",
                color: "#1e40af",
                padding: "4px 12px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {enquiries.length} Total
            </span>
          </div>
        </Container>
      </div>

      <Container>
        <div style={{ padding: "32px 0" }}>
          {/* Status Filter */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {[
              { key: "all", label: "All Enquiries" },
              { key: "new", label: "New" },
              { key: "contacted", label: "Contacted" },
              { key: "enrolled", label: "Enrolled" },
              { key: "closed", label: "Closed" },
            ].map(({ key, label }) => {
              const count =
                key === "all"
                  ? enquiries.length
                  : enquiries.filter((e) => e.status === key).length;

              return (
                <button
                  key={key}
                  onClick={() =>
                    setSelectedStatus(key as typeof selectedStatus)
                  }
                  style={{
                    padding: "8px 16px",
                    background: selectedStatus === key ? "#014A98" : "white",
                    color: selectedStatus === key ? "white" : "#57534e",
                    border: "1px solid #e2e8f0",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {label} ({count})
                </button>
              );
            })}
          </div>

          {/* Enquiries List */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {filteredEnquiries.length > 0 ? (
              filteredEnquiries.map((enquiry) => {
                const statusStyle = getStatusColor(enquiry.status);

                return (
                  <Card
                    key={enquiry.id}
                    style={{
                      padding: "24px",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 150px 100px",
                        gap: "16px",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedEnquiry(enquiry)}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "1.1rem",
                            marginBottom: "4px",
                            color: "#292524",
                          }}
                        >
                          {enquiry.parent_name}
                        </h3>
                        <p
                          style={{
                            color: "#57534e",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          Child: {enquiry.child_name} ({enquiry.child_age}{" "}
                          years)
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            color: "#78716c",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          {enquiry.program_interest}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            color: "#57534e",
                            fontSize: "14px",
                            margin: "0 0 2px",
                          }}
                        >
                          {enquiry.contact_number}
                        </p>
                        <p
                          style={{
                            color: "#78716c",
                            fontSize: "12px",
                            margin: "0",
                          }}
                        >
                          {enquiry.email}
                        </p>
                      </div>

                      <div style={{ fontSize: "12px", color: "#78716c" }}>
                        {formatDate(enquiry.created_at)}
                      </div>

                      <div>
                        <select
                          value={enquiry.status}
                          onChange={(e) =>
                            handleStatusUpdate(
                              enquiry.id,
                              e.target.value as Enquiry["status"]
                            )
                          }
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            padding: "4px 8px",
                            background: statusStyle.bg,
                            color: statusStyle.color,
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              <Card style={{ padding: "48px", textAlign: "center" }}>
                <p style={{ color: "#78716c", margin: "0" }}>
                  No enquiries found for the selected status.
                </p>
              </Card>
            )}
          </div>
        </div>
      </Container>

      {/* Enquiry Detail Modal */}
      {selectedEnquiry && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "32px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", margin: "0", color: "#292524" }}>
                Enquiry Details
              </h2>
              <button
                onClick={() => setSelectedEnquiry(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#78716c",
                }}
              >
                ×
              </button>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Parent Name
                  </h4>
                  <p style={{ color: "#57534e", margin: "0" }}>
                    {selectedEnquiry.parent_name}
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Child Name
                  </h4>
                  <p style={{ color: "#57534e", margin: "0" }}>
                    {selectedEnquiry.child_name}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Child Age
                  </h4>
                  <p style={{ color: "#57534e", margin: "0" }}>
                    {selectedEnquiry.child_age} years
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Program Interest
                  </h4>
                  <p style={{ color: "#57534e", margin: "0" }}>
                    {selectedEnquiry.program_interest}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Contact Number
                  </h4>
                  <p style={{ color: "#57534e", margin: "0" }}>
                    <a
                      href={`tel:${selectedEnquiry.contact_number}`}
                      style={{ color: "#014A98" }}
                    >
                      {selectedEnquiry.contact_number}
                    </a>
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Email
                  </h4>
                  <p style={{ color: "#57534e", margin: "0" }}>
                    <a
                      href={`mailto:${selectedEnquiry.email}`}
                      style={{ color: "#014A98" }}
                    >
                      {selectedEnquiry.email}
                    </a>
                  </p>
                </div>
              </div>

              {selectedEnquiry.message && (
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "8px" }}>
                    Message
                  </h4>
                  <p
                    style={{
                      color: "#57534e",
                      background: "#f8fafc",
                      padding: "12px",
                      borderRadius: "8px",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    {selectedEnquiry.message}
                  </p>
                </div>
              )}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Status
                  </h4>
                  <span
                    style={{
                      ...getStatusColor(selectedEnquiry.status),
                      background: getStatusColor(selectedEnquiry.status).bg,
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {selectedEnquiry.status}
                  </span>
                </div>
                <div>
                  <h4 style={{ color: "#292524", marginBottom: "4px" }}>
                    Submitted
                  </h4>
                  <p style={{ color: "#57534e", margin: "0" }}>
                    {formatDate(selectedEnquiry.created_at)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

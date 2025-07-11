// src/pages/admin/ContentManagement.tsx
import { useState } from "react";
import { useContent } from "../../hooks/useSupabase";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import type { Content } from "../../types/database";

export const ContentManagement = () => {
  const { content, loading, updateContent } = useContent();
  const [editingContent, setEditingContent] = useState<Content | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: "",
  });

  const contentSections = [
    {
      key: "mission",
      label: "Mission Statement",
      description: "Main mission text for About Us page",
    },
    {
      key: "vision",
      label: "Vision Statement",
      description: "Main vision text for About Us page",
    },
    {
      key: "director_message",
      label: "Director's Message",
      description: "Message from Dr. Seema Singh",
    },
    {
      key: "principal_message",
      label: "Principal's Message",
      description: "Message from Dr. Uma Singh",
    },
    {
      key: "school_info",
      label: "School Information",
      description: "General information about the school",
    },
    {
      key: "admission_process",
      label: "Admission Process",
      description: "Details about admission procedure",
    },
  ];

  const handleEdit = (contentItem: Content) => {
    setEditingContent(contentItem);
    setFormData({
      title: contentItem.title,
      content: contentItem.content,
      image_url: contentItem.image_url || "",
    });
  };

  const handleSave = async () => {
    if (!editingContent) return;

    const { error } = await updateContent(editingContent.id, {
      title: formData.title,
      content: formData.content,
      image_url: formData.image_url || undefined,
      updated_at: new Date().toISOString(),
    });

    if (!error) {
      setEditingContent(null);
      setFormData({ title: "", content: "", image_url: "" });
    }
  };

  const handleCancel = () => {
    setEditingContent(null);
    setFormData({ title: "", content: "", image_url: "" });
  };

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        <p>Loading content...</p>
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
              Content Management
            </h1>
          </div>
        </Container>
      </div>

      <Container>
        <div style={{ padding: "32px 0" }}>
          {editingContent ? (
            // Edit Form
            <Card style={{ padding: "32px" }}>
              <h2 style={{ marginBottom: "24px", color: "#292524" }}>
                Editing: {editingContent.section}
              </h2>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#292524",
                  }}
                >
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#292524",
                  }}
                >
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows={8}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <div style={{ marginBottom: "32px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#292524",
                  }}
                >
                  Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <Button variant="primary" onClick={handleSave}>
                  Save Changes
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </Card>
          ) : (
            // Content List
            <div
              style={{
                display: "grid",
                gap: "24px",
              }}
            >
              {contentSections.map((section) => {
                const contentItem = content.find(
                  (c) => c.section === section.key
                );

                return (
                  <Card key={section.key} style={{ padding: "24px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "16px",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "1.25rem",
                            marginBottom: "8px",
                            color: "#292524",
                          }}
                        >
                          {section.label}
                        </h3>
                        <p
                          style={{
                            color: "#78716c",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          {section.description}
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => contentItem && handleEdit(contentItem)}
                      >
                        {contentItem ? "Edit" : "Create"}
                      </Button>
                    </div>

                    {contentItem && (
                      <div
                        style={{
                          background: "#f8fafc",
                          padding: "16px",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "16px",
                            marginBottom: "8px",
                            color: "#292524",
                          }}
                        >
                          {contentItem.title}
                        </h4>
                        <p
                          style={{
                            color: "#57534e",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            margin: "0",
                          }}
                        >
                          {contentItem.content.length > 200
                            ? contentItem.content.substring(0, 200) + "..."
                            : contentItem.content}
                        </p>
                        {contentItem.image_url && (
                          <p
                            style={{
                              color: "#78716c",
                              fontSize: "12px",
                              marginTop: "8px",
                              margin: "8px 0 0",
                            }}
                          >
                            📷 Image attached
                          </p>
                        )}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

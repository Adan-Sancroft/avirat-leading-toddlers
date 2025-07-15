// src/pages/admin/ActivitiesManagement.tsx
import { useState } from "react";
import { useActivities } from "../../hooks/useSupabase";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import type { Activity } from "../../types/database";

export const ActivitiesManagement = () => {
  const { activities, loading, addActivity, updateActivity, deleteActivity } =
    useActivities();
  const [showForm, setShowForm] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [activeTab, setActiveTab] = useState<"activity" | "blog" | "news">(
    "activity"
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    type: "activity" as Activity["type"],
    author: "",
    full_content: "",
  });

  const filteredActivities = activities.filter(
    (activity) => activity.type === activeTab
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .replace(/^-|-$/g, "");

    const activityData = {
      ...formData,
      slug: slug,
      published: true,
    };

    if (editingActivity) {
      await updateActivity(editingActivity.id, activityData);
    } else {
      await addActivity(activityData);
    }

    setShowForm(false);
    setEditingActivity(null);
    setFormData({
      title: "",
      description: "",
      image_url: "",
      type: "activity",
      author: "",
      full_content: "",
    });
  };

  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity);
    setFormData({
      title: activity.title,
      description: activity.description,
      image_url: activity.image_url || "",
      type: activity.type,
      author: activity.author || "",
      full_content: activity.full_content || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      await deleteActivity(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingActivity(null);
    setFormData({
      title: "",
      description: "",
      image_url: "",
      type: "activity",
      author: "",
      full_content: "",
    });
  };

  const tabLabels = {
    activity: "Activities",
    blog: "Blogs",
    news: "News Coverage",
  };

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        <p>Loading activities...</p>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                Activities & Content
              </h1>
            </div>
            {!showForm && (
              <Button
                variant="primary"
                onClick={() => {
                  setFormData({ ...formData, type: activeTab });
                  setShowForm(true);
                }}
              >
                Add New {tabLabels[activeTab]}
              </Button>
            )}
          </div>
        </Container>
      </div>

      <Container>
        <div style={{ padding: "32px 0" }}>
          {!showForm && (
            // Tabs
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid #e2e8f0",
                marginBottom: "32px",
              }}
            >
              {Object.entries(tabLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as Activity["type"])}
                  style={{
                    padding: "12px 24px",
                    background: "none",
                    border: "none",
                    borderBottom:
                      activeTab === key
                        ? "2px solid #014A98"
                        : "2px solid transparent",
                    color: activeTab === key ? "#014A98" : "#57534e",
                    fontWeight: activeTab === key ? "600" : "400",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  {label} ({activities.filter((a) => a.type === key).length})
                </button>
              ))}
            </div>
          )}

          {showForm ? (
            // Add/Edit Form
            <Card style={{ padding: "32px" }}>
              <h2 style={{ marginBottom: "24px", color: "#292524" }}>
                {editingActivity ? "Edit" : "Add New"}{" "}
                {tabLabels[formData.type]}
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#292524",
                    }}
                  >
                    Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type: e.target.value as Activity["type"],
                      })
                    }
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "16px",
                      outline: "none",
                    }}
                  >
                    <option value="activity">Activity</option>
                    <option value="blog">Blog</option>
                    <option value="news">News Coverage</option>
                  </select>
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
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
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
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                    rows={4}
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

                {formData.type === "blog" && (
                  <div style={{ marginBottom: "24px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Author
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) =>
                        setFormData({ ...formData, author: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                      }}
                      placeholder="Author name"
                    />
                  </div>
                )}

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: "600",
                      color: "#292524",
                    }}
                  >
                    Full Content - HTML for Read More pages
                  </label>
                  <textarea
                    value={formData.full_content}
                    onChange={(e) =>
                      setFormData({ ...formData, full_content: e.target.value })
                    }
                    rows={8}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "14px",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "monospace",
                    }}
                    placeholder="Enter full HTML content here"
                  />
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#78716c",
                      marginTop: "4px",
                    }}
                  >
                    You can use HTML tags for formatting.
                  </p>
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
                  <Button
                    variant="primary"
                    onClick={() => handleSubmit({} as React.FormEvent)}
                  >
                    {editingActivity ? "Update" : "Add"}{" "}
                    {tabLabels[formData.type]}
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            // Activities List
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "24px",
              }}
            >
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => (
                  <Card key={activity.id} style={{ padding: "24px" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "160px",
                        background: activity.image_url
                          ? `url(${activity.image_url})`
                          : "#dbe4ff",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                        color: "#014A98",
                        fontWeight: "bold",
                      }}
                    >
                      {!activity.image_url && "No Image"}
                    </div>

                    <h3
                      style={{
                        fontSize: "1.1rem",
                        marginBottom: "8px",
                        color: "#292524",
                      }}
                    >
                      {activity.title}
                    </h3>

                    {activity.author && (
                      <p
                        style={{
                          color: "#014A98",
                          fontSize: "14px",
                          fontWeight: "600",
                          margin: "0 0 8px",
                        }}
                      >
                        By {activity.author}
                      </p>
                    )}

                    <p
                      style={{
                        color: "#57534e",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        marginBottom: "16px",
                      }}
                    >
                      {activity.description.length > 120
                        ? activity.description.substring(0, 120) + "..."
                        : activity.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          padding: "4px 8px",
                          background: "#dbe4ff",
                          color: "#014A98",
                          borderRadius: "12px",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {tabLabels[activity.type]}
                      </span>

                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => handleEdit(activity)}
                          style={{
                            padding: "6px 12px",
                            background: "#014A98",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "12px",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(activity.id)}
                          style={{
                            padding: "6px 12px",
                            background: "#dc2626",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "12px",
                            cursor: "pointer",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
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
                  <p>
                    No {tabLabels[activeTab].toLowerCase()} found. Create your
                    first one!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

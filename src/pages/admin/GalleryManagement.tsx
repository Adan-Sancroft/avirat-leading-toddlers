import { useState } from "react";
import { useGallery } from "../../hooks/useSupabase";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import type { Gallery } from "../../types/database";

export const GalleryManagement = () => {
  const { gallery, loading, addGalleryImage, deleteGalleryImage } =
    useGallery();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    event_name: "",
    event_slug: "",
    image_url: "",
    image_order: 1,
    description: "",
  });

  // Group images by event for display
  const groupedGallery = gallery.reduce((acc, item) => {
    if (!acc[item.event_slug]) {
      acc[item.event_slug] = {
        event_name: item.event_name,
        images: [],
      };
    }
    acc[item.event_slug].images.push(item);
    return acc;
  }, {} as Record<string, { event_name: string; images: Gallery[] }>);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Auto-generate slug from event name if not provided
    const slug =
      formData.event_slug ||
      formData.event_name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    await addGalleryImage({
      ...formData,
      event_slug: slug,
    });

    setShowForm(false);
    setFormData({
      event_name: "",
      event_slug: "",
      image_url: "",
      image_order: 1,
      description: "",
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      await deleteGalleryImage(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      event_name: "",
      event_slug: "",
      image_url: "",
      image_order: 1,
      description: "",
    });
  };

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        <p>Loading gallery...</p>
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
                Gallery Management
              </h1>
            </div>
            {!showForm && (
              <Button variant="primary" onClick={() => setShowForm(true)}>
                Add New Image
              </Button>
            )}
          </div>
        </Container>
      </div>

      <Container>
        <div style={{ padding: "32px 0" }}>
          {showForm ? (
            // Add Image Form
            <Card style={{ padding: "32px", marginBottom: "32px" }}>
              <h2 style={{ marginBottom: "24px", color: "#292524" }}>
                Add New Gallery Image
              </h2>

              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Event Name *
                    </label>
                    <input
                      type="text"
                      value={formData.event_name}
                      onChange={(e) =>
                        setFormData({ ...formData, event_name: e.target.value })
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
                      placeholder="Annual Sports Day"
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Event Slug (auto-generated if empty)
                    </label>
                    <input
                      type="text"
                      value={formData.event_slug}
                      onChange={(e) =>
                        setFormData({ ...formData, event_slug: e.target.value })
                      }
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                      }}
                      placeholder="annual-sports-day"
                    />
                  </div>
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
                    Image URL *
                  </label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) =>
                      setFormData({ ...formData, image_url: e.target.value })
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
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "150px 1fr",
                    gap: "24px",
                    marginBottom: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Order *
                    </label>
                    <input
                      type="number"
                      value={formData.image_order}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          image_order: parseInt(e.target.value),
                        })
                      }
                      required
                      min="1"
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

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Image Description (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "16px",
                        outline: "none",
                      }}
                      placeholder="Children participating in relay race"
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <Button
                    variant="primary"
                    onClick={() => handleSubmit({} as React.FormEvent)}
                  >
                    Add Image
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          ) : null}

          {/* Gallery Events List */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {Object.entries(groupedGallery).map(([slug, event]) => (
              <Card key={slug} style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "16px",
                    color: "#292524",
                  }}
                >
                  {event.event_name}
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#78716c",
                      fontWeight: "normal",
                      marginLeft: "12px",
                    }}
                  >
                    ({event.images.length} images)
                  </span>
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {event.images.map((image) => (
                    <div
                      key={image.id}
                      style={{
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "120px",
                          background: `url(${image.image_url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div style={{ padding: "12px" }}>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#78716c",
                            margin: "0 0 8px",
                          }}
                        >
                          Order: {image.image_order}
                        </p>
                        {image.description && (
                          <p
                            style={{
                              fontSize: "12px",
                              color: "#57534e",
                              margin: "0 0 8px",
                              lineHeight: "1.4",
                            }}
                          >
                            {image.description}
                          </p>
                        )}
                        <button
                          onClick={() => handleDelete(image.id)}
                          style={{
                            padding: "4px 8px",
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
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

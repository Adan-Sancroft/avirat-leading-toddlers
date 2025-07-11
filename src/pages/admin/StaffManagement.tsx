import { useState } from "react";
import { useStaff } from "../../hooks/useSupabase";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import type { Staff } from "../../types/database";

export const StaffManagement = () => {
  const { staff, loading, addStaff, updateStaff, deleteStaff } = useStaff();
  const [showForm, setShowForm] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    designation: "",
    image_url: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingStaff) {
      await updateStaff(editingStaff.id, formData);
    } else {
      await addStaff(formData);
    }

    setShowForm(false);
    setEditingStaff(null);
    setFormData({
      name: "",
      qualification: "",
      designation: "",
      image_url: "",
    });
  };

  const handleEdit = (staffMember: Staff) => {
    setEditingStaff(staffMember);
    setFormData({
      name: staffMember.name,
      qualification: staffMember.qualification,
      designation: staffMember.designation,
      image_url: staffMember.image_url || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this staff member?")) {
      await deleteStaff(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingStaff(null);
    setFormData({
      name: "",
      qualification: "",
      designation: "",
      image_url: "",
    });
  };

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        <p>Loading staff...</p>
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
                Staff Management
              </h1>
            </div>
            {!showForm && (
              <Button variant="primary" onClick={() => setShowForm(true)}>
                Add New Staff
              </Button>
            )}
          </div>
        </Container>
      </div>

      <Container>
        <div style={{ padding: "32px 0" }}>
          {showForm ? (
            // Add/Edit Form
            <Card style={{ padding: "32px" }}>
              <h2 style={{ marginBottom: "24px", color: "#292524" }}>
                {editingStaff ? "Edit Staff Member" : "Add New Staff Member"}
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
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
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

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#292524",
                      }}
                    >
                      Designation *
                    </label>
                    <input
                      type="text"
                      value={formData.designation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          designation: e.target.value,
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
                    Qualification *
                  </label>
                  <input
                    type="text"
                    value={formData.qualification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        qualification: e.target.value,
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
                    Photo URL (Optional)
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
                    placeholder="https://example.com/photo.jpg"
                  />
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <Button
                    variant="primary"
                    onClick={() => handleSubmit({} as React.FormEvent)}
                  >
                    {editingStaff ? "Update Staff" : "Add Staff"}
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
            // Staff List
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {staff.map((staffMember) => (
                <Card key={staffMember.id} style={{ padding: "24px" }}>
                  <div style={{ textAlign: "center", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: staffMember.image_url
                          ? `url(${staffMember.image_url})`
                          : "#dbe4ff",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                        color: "#014A98",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {!staffMember.image_url && "Photo"}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        marginBottom: "4px",
                        color: "#292524",
                      }}
                    >
                      {staffMember.name}
                    </h3>
                    <p
                      style={{
                        color: "#014A98",
                        fontWeight: "600",
                        fontSize: "14px",
                        margin: "0 0 4px",
                      }}
                    >
                      {staffMember.designation}
                    </p>
                    <p
                      style={{
                        color: "#78716c",
                        fontSize: "14px",
                        margin: "0",
                      }}
                    >
                      {staffMember.qualification}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={() => handleEdit(staffMember)}
                      style={{
                        padding: "8px 16px",
                        background: "#014A98",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(staffMember.id)}
                      style={{
                        padding: "8px 16px",
                        background: "#dc2626",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

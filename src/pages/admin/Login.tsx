// src/pages/admin/Login.tsx
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "../../components/ui/Container";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { user, signIn } = useAuth();

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbe4ff 0%, #e5dbff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Card style={{ padding: "48px 32px" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "linear-gradient(135deg, #014A98, #0066cc)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                AL
              </div>
              <h1
                style={{
                  fontSize: "2rem",
                  marginBottom: "8px",
                  color: "#292524",
                }}
              >
                Admin Login
              </h1>
              <p style={{ color: "#57534e" }}>Avirat Leading Toddlers</p>
            </div>

            {error && (
              <div
                style={{
                  background: "#fee2e2",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                  padding: "12px",
                  marginBottom: "24px",
                  color: "#991b1b",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#292524",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  placeholder="admin@aviratschools.com"
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
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                  placeholder="Enter your password"
                />
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={() => handleSubmit({} as React.FormEvent)}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div
              style={{
                marginTop: "24px",
                textAlign: "center",
                fontSize: "14px",
                color: "#78716c",
              }}
            >
              Contact IT support if you've forgotten your credentials
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

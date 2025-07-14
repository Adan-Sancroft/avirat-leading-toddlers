import { Container } from "../ui/Container";
// import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section
      <div className="footer-newsletter">
        <Container>
          <h3>Stay Updated with Avirat Learning Tree</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter email"
              className="newsletter-input"
            />
            <Button variant="secondary">SUBSCRIBE</Button>
          </div>
        </Container>
      </div> */}

      {/* Main Footer Content */}
      <div className="footer-content">
        <Container>
          <div className="footer-grid">
            {/* School Info */}
            <div className="footer-section">
              <div className="logo">
                <img
                  src="https://trgvnfgftnftedxiasyg.supabase.co/storage/v1/object/public/home-images//logo-main.png"
                  alt="Avirat Leading Toddlers Logo"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <div className="logo-text">
                  <h4 style={{ color: "white", marginBottom: "16px" }}>
                    Avirat Leading Toddlers
                  </h4>
                </div>
              </div>
              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                }}
              >
                Avirat Leading Toddlers is committed to providing students with
                exemplary instruction designed to educate the whole child so
                that he/she may become a productive member of the community.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href="#"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#3b82f6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/avirat_leading_toddlers?igsh=bGxrcTViYzI1YWYy "
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#ec4899",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  📷
                </a>
                <a
                  href="https://www.linkedin.com/company/avirat-learning-tree17/"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#06b6d4",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  💼
                </a>
              </div>
            </div>

            {/* Information Links */}
            <div className="footer-section">
              <h4>Information</h4>
              <ul className="footer-links">
                <li>
                  <a href="/general-info#school-info">School Information</a>
                </li>
                <li>
                  <a href="/general-info#staff">List of Teachers</a>
                </li>
                <li>
                  <a href="/general-info#rules">School Rules</a>
                </li>
                <li>
                  <a href="/general-info#norms">School Norms</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/activity-zone">Cultural Activities</a>
                </li>
                <li>
                  <a href="/career">Career</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ marginRight: "12px", color: "#ff8787" }}>
                    📍
                  </span>
                  <span style={{ color: "#cbd5e1", fontSize: "14px" }}>
                    1-A/B Gayatri Tenament, Near K.K.Nagar Cross Road,
                    Ghatlodia, Ahmedabad - 380061
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ marginRight: "12px", color: "#ff8787" }}>
                    📞
                  </span>
                  <div style={{ color: "#cbd5e1", fontSize: "14px" }}>
                    <div>079-27600075</div>
                    <div>+91-9723991122</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ marginRight: "12px", color: "#ff8787" }}>
                    ✉️
                  </span>
                  <span style={{ color: "#cbd5e1", fontSize: "14px" }}>
                    info@aviratinternationalschools.com
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "12px", color: "#ff8787" }}>
                    🌐
                  </span>
                  <span style={{ color: "#cbd5e1", fontSize: "14px" }}>
                    www.aviratinternationalschools.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <Container>
          <p>
            Avirat Leading Toddlers 2025, All Rights Reserved, Design &
            Developed By Aditya Singh
          </p>
        </Container>
      </div>
    </footer>
  );
};

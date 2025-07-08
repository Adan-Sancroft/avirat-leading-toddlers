import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="header">
      {/* Top Contact Bar */}
      <div className="header-top">
        <Container>
          <div className="header-top-content">
            <div className="contact-info">
              <div className="contact-item">
                <span>📞</span>
                <span>079-27600075</span>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <span>info@aviratinternationalschools.com</span>
              </div>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>Ghatlodia, Ahmedabad - 380061</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <div className="header-main">
        <Container>
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo" style={{ textDecoration: "none" }}>
              <div className="logo-icon">AL</div>
              <div className="logo-text">
                <h1>AVIRAT LEADING TODDLERS</h1>
                <p>Nurturing Young Minds with Care</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav">
              <Link to="/" className="nav-item">
                HOME
              </Link>
              <Link to="/general-info" className="nav-item">
                GENERAL INFORMATION
              </Link>

              {/* Cultural Activities Dropdown */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={toggleDropdown}
                  className="nav-item"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  CULTURAL ACTIVITIES
                  <span style={{ fontSize: "12px" }}>
                    {isDropdownOpen ? "▲" : "▼"}
                  </span>
                </button>
                {isDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      marginTop: "8px",
                      background: "white",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                      padding: "12px 0",
                      minWidth: "200px",
                      zIndex: 1000,
                    }}
                  >
                    <Link
                      to="/activity-zone"
                      className="nav-item"
                      style={{
                        display: "block",
                        padding: "12px 20px",
                        color: "#57534e",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      onClick={() => setIsDropdownOpen(false)}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.background = "#f0f9ff")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.background =
                          "transparent")
                      }
                    >
                      Activity Zone
                    </Link>
                    <Link
                      to="/newspaper-coverage"
                      className="nav-item"
                      style={{
                        display: "block",
                        padding: "12px 20px",
                        color: "#57534e",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      onClick={() => setIsDropdownOpen(false)}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.background = "#f0f9ff")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.background =
                          "transparent")
                      }
                    >
                      Newspaper Coverage
                    </Link>
                    <Link
                      to="/blogs"
                      className="nav-item"
                      style={{
                        display: "block",
                        padding: "12px 20px",
                        color: "#57534e",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      onClick={() => setIsDropdownOpen(false)}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.background = "#f0f9ff")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.background =
                          "transparent")
                      }
                    >
                      Blogs
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/gallery" className="nav-item">
                GALLERY
              </Link>
              <Link to="/career" className="nav-item">
                CAREER
              </Link>
              <Link to="/contact" className="nav-item">
                CONTACT
              </Link>
              <Button variant="primary">INQUIRY</Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="mobile-menu-btn"
                style={{
                  display: "none",
                  background: "#f1f5f9",
                  border: "none",
                  padding: "8px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="mobile-menu"
              style={{
                display: "none",
                padding: "24px 0",
                borderTop: "1px solid #e2e8f0",
                background: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Link
                  to="/"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  to="/general-info"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GENERAL INFORMATION
                </Link>
                <Link
                  to="/activity-zone"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ACTIVITY ZONE
                </Link>
                <Link
                  to="/newspaper-coverage"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NEWSPAPER COVERAGE
                </Link>
                <Link
                  to="/blogs"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOGS
                </Link>
                <Link
                  to="/gallery"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GALLERY
                </Link>
                <Link
                  to="/career"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CAREER
                </Link>
                <Link
                  to="/contact"
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
                <Button variant="primary" onClick={() => setIsMenuOpen(false)}>
                  INQUIRY
                </Button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
};

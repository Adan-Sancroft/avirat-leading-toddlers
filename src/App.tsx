// src/App.tsx - Updated with admin routes and authentication
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { Layout } from "./components/layout/Layout";
import { AdminLayout } from "./components/layout/AdminLayout";

// Public Pages
import { AboutUs } from "./pages/AboutUs";
import { GeneralInfo } from "./pages/GeneralInfo";
import { ActivityZone } from "./pages/ActivityZone";
import { NewspaperCoverage } from "./pages/NewspaperCoverage";
import { Blogs } from "./pages/Blogs";
import { Gallery } from "./pages/Gallery";
import { Career } from "./pages/Career";
import { Contact } from "./pages/Contact";
import { ActivityDetail } from "./pages/ActivityDetail";

// Admin Pages
import { Login } from "./pages/admin/Login";
import { Dashboard } from "./pages/admin/Dashboard";
import { ContentManagement } from "./pages/admin/ContentManagement";
import { StaffManagement } from "./pages/admin/StaffManagement";
import { ActivitiesManagement } from "./pages/admin/ActivitiesManagement";
import { EnquiriesManagement } from "./pages/admin/EnquiriesManagement";
import { GalleryManagement } from "./pages/admin/GalleryManagement";

import "./index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/general-info"
            element={
              <Layout>
                <GeneralInfo />
              </Layout>
            }
          />
          <Route
            path="/activity-zone"
            element={
              <Layout>
                <ActivityZone />
              </Layout>
            }
          />
          <Route
            path="/newspaper-coverage"
            element={
              <Layout>
                <NewspaperCoverage />
              </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />
          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            path="/career"
            element={
              <Layout>
                <Career />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/activity/:slug"
            element={
              <Layout>
                <ActivityDetail />
              </Layout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Layout>
                <ActivityDetail />
              </Layout>
            }
          />
          <Route
            path="/news/:slug"
            element={
              <Layout>
                <ActivityDetail />
              </Layout>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/content"
            element={
              <AdminLayout>
                <ContentManagement />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/staff"
            element={
              <AdminLayout>
                <StaffManagement />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/activities"
            element={
              <AdminLayout>
                <ActivitiesManagement />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/enquiries"
            element={
              <AdminLayout>
                <EnquiriesManagement />
              </AdminLayout>
            }
          />

          <Route
            path="/admin/gallery"
            element={
              <AdminLayout>
                <GalleryManagement />
              </AdminLayout>
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <Layout>
                <div
                  style={{
                    padding: "80px 0",
                    textAlign: "center",
                    minHeight: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "3rem",
                      marginBottom: "24px",
                      color: "#292524",
                    }}
                  >
                    404 - Page Not Found
                  </h1>
                  <p style={{ color: "#57534e", marginBottom: "32px" }}>
                    The page you're looking for doesn't exist.
                  </p>
                  <a
                    href="/"
                    style={{
                      background: "#ff8787",
                      color: "white",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    Go Home
                  </a>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

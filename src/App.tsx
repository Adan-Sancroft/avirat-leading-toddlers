import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AboutUs } from "./pages/AboutUs";
import { GeneralInfo } from "./pages/GeneralInfo";
import { ActivityZone } from "./pages/ActivityZone";
import { NewspaperCoverage } from "./pages/NewspaperCoverage";
import { Blogs } from "./pages/Blogs";
import { Gallery } from "./pages/Gallery";
import { Career } from "./pages/Career";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/general-info" element={<GeneralInfo />} />
          <Route path="/activity-zone" element={<ActivityZone />} />
          <Route path="/newspaper-coverage" element={<NewspaperCoverage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

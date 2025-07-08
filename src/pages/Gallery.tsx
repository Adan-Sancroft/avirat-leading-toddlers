import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const Gallery = () => {
  /* 
  TO ADD MORE PICTURES TO THE GALLERY:
  1. Add new objects to the 'galleryImages' array below
  2. Each object should have: title, category, and description
  3. The grid will automatically adjust to fit new items
  4. For different grid layouts, modify the CSS class in index.css:
     - .gallery-grid for 4 columns (default)
     - .gallery-grid-3 for 3 columns
     - .gallery-grid-2 for 2 columns
  5. To span images across multiple columns/rows, add 'span' property:
     - span: 'col-span-2' (spans 2 columns)
     - span: 'row-span-2' (spans 2 rows)
  */

  const galleryImages = [
    {
      title: "Art & Craft Session",
      category: "Activities",
      description: "Children enjoying colorful art and craft activities",
      span: "", // Normal size
    },
    {
      title: "Annual Sports Day",
      category: "Events",
      description: "Exciting sports day celebrations with fun games",
      span: "col-span-2", // Spans 2 columns - FEATURED IMAGE
    },
    {
      title: "Music Class Fun",
      category: "Activities",
      description: "Learning rhythm and songs in our music room",
      span: "",
    },
    {
      title: "Story Time",
      category: "Learning",
      description: "Interactive storytelling sessions with picture books",
      span: "",
    },
    {
      title: "Garden Activity",
      category: "Outdoor",
      description: "Planting seeds and learning about nature",
      span: "",
    },
    {
      title: "Festival Celebration",
      category: "Events",
      description: "Colorful festival celebrations with traditional dances",
      span: "row-span-2", // Spans 2 rows - TALL IMAGE
    },
    {
      title: "Science Corner",
      category: "Learning",
      description: "Simple experiments and discovery activities",
      span: "",
    },
    {
      title: "Playground Fun",
      category: "Outdoor",
      description: "Happy moments on swings and slides",
      span: "",
    },
    {
      title: "Reading Corner",
      category: "Learning",
      description: "Cozy reading space with colorful books",
      span: "",
    },
    {
      title: "Cooking Activity",
      category: "Activities",
      description: "Making healthy snacks and learning nutrition",
      span: "col-span-2", // Another featured image
    },
    {
      title: "Dance Performance",
      category: "Events",
      description: "Annual day dance performances by our little stars",
      span: "",
    },
    {
      title: "Building Blocks",
      category: "Activities",
      description: "Creative construction with colorful building blocks",
      span: "",
    },
    {
      title: "Water Play Day",
      category: "Outdoor",
      description: "Splash and fun on our special water play day",
      span: "",
    },
    {
      title: "Parent Workshop",
      category: "Events",
      description: "Educational workshops for parents and children",
      span: "",
    },
    {
      title: "Nature Walk",
      category: "Outdoor",
      description: "Exploring nature and collecting leaves and flowers",
      span: "",
    },
    {
      title: "Graduation Ceremony",
      category: "Events",
      description: "Proud graduation moments for our UKG students",
      span: "col-span-2", // Wide featured image
    },
  ];

  const categories = ["All", "Activities", "Events", "Learning", "Outdoor"];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #dbe4ff 0%, #e5dbff 100%)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1
            style={{ fontSize: "3rem", marginBottom: "24px", color: "#292524" }}
          >
            🎨 School Gallery
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#57534e",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Capturing precious moments and joyful experiences of our little
            learners at Avirat Leading Toddlers! ✨
          </p>
        </Container>
      </section>

      {/* Filter Buttons */}
      <section style={{ padding: "40px 0", background: "#f8fafc" }}>
        <Container>
          <div className="filter-buttons">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${index === 0 ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <Container>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className={`gallery-item ${image.span}`}>
                <Card
                  style={{
                    padding: "0",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Image Placeholder */}
                  <div className={`gallery-image gallery-image-${index % 4}`}>
                    📸 {image.title}
                    {/* Category Badge */}
                    <span className="category-badge">{image.category}</span>
                  </div>

                  {/* Image Info */}
                  <div className="gallery-info">
                    <h3 className="gallery-title">{image.title}</h3>
                    <p className="gallery-description">{image.description}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="gallery-overlay">🔍 View Full Size</div>
                </Card>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button className="load-more-btn">📷 Load More Pictures</button>
          </div>
        </Container>
      </section>
    </div>
  );
};

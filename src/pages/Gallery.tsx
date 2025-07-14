import { useState } from "react";
import { useGallery } from "../hooks/useSupabase";
import { Container } from "../components/ui/Container";
import { Card } from "../components/ui/Card";

export const Gallery = () => {
  const { gallery, loading } = useGallery();

  // Group images by event
  const groupedGallery = gallery.reduce((acc, item) => {
    if (!acc[item.event_slug]) {
      acc[item.event_slug] = {
        event_name: item.event_name,
        images: [],
      };
    }
    acc[item.event_slug].images.push(item);
    return acc;
  }, {} as Record<string, { event_name: string; images: typeof gallery }>);

  if (loading) {
    return (
      <div style={{ padding: "48px", textAlign: "center" }}>
        Loading gallery...
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-with-background hero-gallery"
        style={{ padding: "80px 0", textAlign: "center" }}
      >
        <Container>
          <div className="hero-content">
            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "24px",
                color: "#292524",
              }}
            >
              Gallery
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#000",
                fontWeight: "500",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Capturing precious moments and joyful experiences of our little
              learners at Avirat Leading Toddlers!
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Events */}
      <section className="section">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {Object.entries(groupedGallery).length > 0 ? (
              Object.entries(groupedGallery).map(([slug, event]) => (
                <EventCard key={slug} event={event} />
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
                <p>No gallery events found. Please check back later!</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

// Event Card Component with Carousel
const EventCard = ({
  event,
}: {
  event: { event_name: string; images: any[] };
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = event.images;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card style={{ padding: "0", overflow: "hidden" }}>
      {/* Image Carousel */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: "250px",
            background: images[currentImageIndex]?.image_url
              ? `url(${images[currentImageIndex].image_url})`
              : "#dbe4ff",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#014A98",
            fontWeight: "bold",
          }}
        >
          {!images[currentImageIndex]?.image_url && "📸 Event Photo"}
        </div>

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Event Title */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#292524",
            margin: "0",
          }}
        >
          {event.event_name}
        </h3>
        {images[currentImageIndex]?.description && (
          <p
            style={{
              color: "#57534e",
              fontSize: "14px",
              marginTop: "8px",
              margin: "8px 0 0",
            }}
          >
            {images[currentImageIndex].description}
          </p>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            paddingBottom: "16px",
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "none",
                background: index === currentImageIndex ? "#ff8787" : "#e2e8f0",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

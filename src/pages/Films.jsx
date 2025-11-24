import React from "react";
import "../styles/Films.css";

function FilmsPage() {
  const videos = [
    {
      id: 1,
      title: "Yashvi Karan Boho Night",
      location: "Surat",
      iframe: (
        <iframe
          src="https://player.vimeo.com/video/1063206034?h=46cfe321c0&title=0&byline=0&portrait=0"
          title="Yashvi Karan Boho Night"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          className="w-full h-80 rounded-xl"
        ></iframe>
      ),
      description:
        '"As the sun sets and the stars begin to twinkle, tonight we gather in the spirit of freedom and creativity. With Yashvi Karan leading the way, we embrace the magic of the night,..."',
    },
    {
      id: 2,
      title: "Yashvi Karan Wedding Teaser",
      location: "Surat",
      iframe: (
        <iframe
          src="https://player.vimeo.com/video/1072480839?h=46cfe321c0&title=0&byline=0&portrait=0"
          title="Yashvi Karan Wedding Teaser"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          className="w-full h-80 rounded-xl"
        ></iframe>
      ),
      description:
        "Enveloped in petals of commitment, the varmala ceremony is a joyous expression of love—a magnificent beginning to a shared journey of dreams and laughter.",
    },
    {
      id: 3,
      title: "Riki Sabrina",
      location: "Bali",
       iframe: (
      <iframe
          src="https://player.vimeo.com/video/1062667739?h=46cfe321c0&title=0&byline=0&portrait=0"
          title="Yashvi Karan Wedding Teaser"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          className="w-full h-80 rounded-xl"
        ></iframe>

      ),
      description:
        "Riki and Sabrina's Bali prewedding video teaser is a breathtaking glimpse into their love story. Set against the backdrop of a stunning beachside, the golden sands and...",
    },
    {
      id: 4,
      title: "Aanya & Dev Prewedding",
      location: "Jaipur",
      iframe: (
        <iframe
          src="https://player.vimeo.com/video/1055838687?h=46cfe321c0&title=0&byline=0&portrait=0"
          title="Aanya & Dev Prewedding"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          className="w-full h-80 rounded-xl"
        ></iframe>
      ),
      description:
        "Aanya and Dev’s Jaipur prewedding film celebrates tradition with elegance, surrounded by heritage forts and the pink hues of the royal city.",
    },
    {
      id: 5,
      title: "Tara & Rohan Haldi Vibes",
      location: "Udaipur",
      iframe: (
        <iframe
          src="https://player.vimeo.com/video/953036587?h=46cfe321c0&title=0&byline=0&portrait=0"
          title="Tara & Rohan Haldi Vibes"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          className="w-full h-80 rounded-xl"
        ></iframe>
      ),
      description:
        "A splash of joy and laughter — Tara and Rohan’s haldi celebration was all about sunshine, smiles, and soul-stirring emotions captured forever.",
    },
    {
      id: 6,
      title: "Maya & Kabir Wedding",
      location: "Goa",
      iframe: (
        <iframe
          src="https://player.vimeo.com/video/953036587?h=46cfe321c0&title=0&byline=0&portrait=0"
          title="Maya & Kabir Wedding"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          className="w-full h-80 rounded-xl"
        ></iframe>
      ),
      description:
        "Set on the serene beaches of Goa, Maya and Kabir’s wedding was a poetic blend of sea breeze, vows, and eternal memories.",
    },
    {
      id: 7,
      title: "Ishita & Raj Engagement",
      location: "Mumbai",
      iframe: (
        <iframe
          src="https://player.vimeo.com/video/986379150?h=46cfe321c0&title=0&byline=0&portrait=0"
          title="Ishita & Raj Engagement"
          allow="autoplay; fullscreen"
          frameBorder="0"
          allowFullScreen
          className="w-full h-80 rounded-xl"
        ></iframe>
      ),
      description:
        "A night of glitz and glam — Ishita and Raj’s engagement celebration was full of love, laughter, and cinematic magic that marked the start of their forever.",
    },
  ];

  return (
    <div className="films-page">

 <div className="hero-container">
  <iframe
    className="hero-video"
    src="https://player.vimeo.com/video/1063206034?h=46cfe321c0&title=0&byline=0&portrait=0"
    title="Yashvi Karan Boho Night"
    allow="autoplay; fullscreen"
    frameBorder="0"
    allowFullScreen
  ></iframe>

  <div className="overlay"></div>

  <div className="hero-text">
    <h1>YASHVI // KARAN</h1>
  </div>
</div>

      {/* Films Grid Section */}
      <section className="films-section">
        <h2>Unforgettable Moments, Timeless Films</h2>

        <div className="films-grid">
          {videos.map((item) => (
            <div key={item.id} className="film-card">
              <div className="video-container">{item.iframe}</div>
              <div className="film-info">
                <div className="film-header">
                  <h3>{item.title}</h3>
                  <span>{item.location}</span>
                </div>
                <p>{item.description}</p>
                <a href="#" className="read-more">
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FilmsPage;

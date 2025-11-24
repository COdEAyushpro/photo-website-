import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ReadMore.css";

function ReadMore() {
  const location = useLocation();
  const blog = location.state?.blog || {
    title: "The Ivory Experience Luxury Wedding Photography in India",
    date: "10 AUG, 2025",
    image:
      "https://ivoryfilms.in/assets/img/blogs/6897e0679ea2c/cover-1754783847_00edbff36cfe8d408a9b.jpg",
    description:
      "At Ivory Films, we believe your wedding story is more than a timeline of events — it’s a tapestry of emotions, traditions, and fleeting moments that deserve to be preserved with heart and artistry.",
  };

  return (
    <>
      {/* Main Blog Section */}
      <div className="readmore-container">
        <h1 className="readmore-title">{blog.title}</h1>
        <p className="readmore-date">{blog.date}</p>
        <div className="readmore-image-wrapper">
          <img src={blog.image} alt={blog.title} className="readmore-image" />
        </div>
        <p className="readmore-description">{blog.description}</p>
      </div>

      {/* Related Blogs Section */}
      <section className="related-section">
        <h2>Related Blogs</h2>

        <div className="related-blogs">
          {/* Blog 1 */}
          <div className="related-blog">
            <img
              src="https://ivoryfilms.in/assets/img/blogs/67f8ba0e7368c/thumb-1744353806_68b5dccb8ccd13cd318d.jpg"
              alt="Aashka and Shanil wedding"
            />
            <div className="related-blog-content">
              <p>11 APR, 2025</p>
              <h3>
                Aashka and Shanil Unforgettable Wedding Celebration at Fairmont
                and Raffles Jaipur
              </h3>
              <p className="desc">
                Aashka and Shanil’s wedding at Fairmont and Raffles Jaipur was
                an unforgettable event marked by stunning fireworks and regal
                decor.
              </p>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="related-blog">
            <img
              src="https://ivoryfilms.in/assets/img/blogs/67b05dc653d66/thumb-1739611590_0ffb8334d7e793c3b59a.jpg"
              alt="Piyush Ariva Grand Wedding Celebration"
            />
            <div className="related-blog-content">
              <p>13 FEB, 2025</p>
              <h3>Piyush Ariva Grand Wedding Celebration</h3>
              <p className="desc">
                Piyush and Ariva’s ten days long wedding celebration wasn’t just
                a fusion of love, but a powerful tribute to their legacy, their
                families, and traditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReadMore;
